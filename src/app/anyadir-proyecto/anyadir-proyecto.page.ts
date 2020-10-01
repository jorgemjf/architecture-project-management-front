import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto';
import { Router, ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../services/proyectos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-anyadir-proyecto',
  templateUrl: './anyadir-proyecto.page.html',
  styleUrls: ['./anyadir-proyecto.page.scss'],
})
export class AnyadirProyectoPage implements OnInit {
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
    activo: true,
  };


  constructor(private enviar: ProyectosService, private alertController: AlertController, private route: Router) { }

  ngOnInit() {
  }

  enviarProyecto() {
    if (this.proyecto.titulo !== '' && this.proyecto.tipo !== '' &&
        this.proyecto.zonificacion !== '' && this.proyecto.catastro !== '' && this.proyecto.cliente !== '' &&
        this.proyecto.ubicacion !== '' && this.proyecto.comercial !== ''
     && this.proyecto.presupuesto !== 0) {
    this.enviar.enviarProyectos(this.proyecto).subscribe(() => {
      });

    }
    else {
      this.presentAdd();
    }
  }

async addAlertConfirm() {
  const alert = await this.alertController.create({
    header: '¿Desea añadir el proyecto?',
    message: 'Se añadirá el proyecto a la lista.',
    buttons: [
      {
        text: 'Ok',
        handler: () => {
          console.log('Aceptar');
          this.enviarProyecto();
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

async presentAdd() {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: '<strong>Los campos no pueden estar vacíos</strong>!!!',
    buttons: [
      {
        text: 'Ok',
        handler: () => {
          console.log('Aceptar');
        }
      }
    ]
  });

  await alert.present();
}
}
