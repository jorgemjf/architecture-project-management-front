import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProyectosService } from '../services/proyectos.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.page.html',
  styleUrls: ['./detalles-proyecto.page.scss'],
})
export class DetallesProyectoPage implements OnInit {
  readonly = true;
  inactivo = true;
  url = '';
  proyecto: Proyecto = {
    id: '',
    referencia: '',
    titulo: '',
    tipo: '',
    zonificacion: '',
    catastro: '',
    cliente: '',
    ubicacion: '',
    comercial: '',
    presupuesto: 0,
  };
  constructor(private route: Router, private router: ActivatedRoute,
              private servicios: ProyectosService, private alertController: AlertController) {
  }

  ngOnInit() {
  }

  toggleReadOnly(){
    this.readonly = !this.readonly;
    this.inactivo = !this.inactivo;

  }

  toggleActivo(){
    this.proyecto.activo = !this.proyecto.activo;
    console.log(this.proyecto.activo);
    }

  obtenerLocalizacion(){
    navigator.geolocation.getCurrentPosition(pos => {
    this.url = 'https://maps.google.com/maps?&z=15&t=k&q=' + pos.coords.latitude + ' ' + pos.coords.longitude;

    });
  }
  obtenerProyecto(){
  this.servicios.obtenerProyectoId(this.proyecto.id).subscribe((resp: any) => {
    this.proyecto = resp;
  });
  }

  actualizarProyecto() {
    this.servicios.actualizarProyecto(this.proyecto).subscribe((resp: any) => {

    });
  }

  borrarProyecto(){
    this.deleteAlertConfirm();

  }



  async presentAlertConfirm() {
    console.log(this.proyecto);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Quiere actualizar el proyecto?',
      message: 'Los cambios no serán reversibles',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.route.navigate(['/home']);
            this.actualizarProyecto();
          }
          },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          console.log('No se ha realizado ningún cambio');
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Quiere borrar el proyecto?',
      message: 'Los cambios no pueden ser revertidos.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.servicios.borrarProyecto(this.proyecto.id).subscribe((resp: any) => {
            });
            this.route.navigate(['/home']);
          }
          },
          {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          console.log('No se ha realizado ningún cambio');
          }
        }
      ]
    });

    await alert.present();
  }

  async canceltAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar cambios',
      message: 'No se guardarán los cambios realizados.',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            console.log('Si');
            this.obtenerProyecto();
            this.toggleReadOnly();
          }
        },
      {
          text: 'No',
          role: 'cancel',
          handler: () => {
          console.log('No se ha realizado ningún cambio');
      }
    }
      ]
    });

    await alert.present();
  }


  ionViewDidEnter() {
    this.proyecto.id = this.router.snapshot.paramMap.get('id');
    this.obtenerProyecto();
  }

}

