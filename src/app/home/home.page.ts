import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProyectosService } from '../services/proyectos.service';
import { Proyecto } from '../interfaces/proyecto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mostrarActivos = true;
  searchTerm = '';
  search = '';
  proyectosFiltered = [];
  proyectos = [{
    id: '',
    referencia: '',
    titulo: '',
    tipo: '',
    zonificacion: '',
    refcatastral: '',
    cliente: '',
    ubicacion: '',
    comercial: '',
    activo: true
  }];
  constructor(private listado: ProyectosService) {
  }
  botonActivados() {
    this.mostrarActivos = !this.mostrarActivos;
    this.filtrarProyectosActivos();
  }

    ionViewWillEnter() {
      this.listado.obtenerProyectos().subscribe((resp: any) => {
        this.proyectos = resp;
        this.filtrarProyectosActivos();
      });
    }

    filterItems() {
      this.search = this.searchTerm.toLowerCase();
      this.proyectosFiltered = this.proyectos.filter(proyecto => {
        return (proyecto.titulo.toLowerCase().indexOf(this.search) > -1 ||
          proyecto.cliente.toLowerCase().indexOf(this.search) > -1 ||
          proyecto.ubicacion.toLowerCase().indexOf(this.search) > -1 ||
          proyecto.comercial.toLowerCase().indexOf(this.search) > -1);
      });
    }
    filtrarProyectosActivos() {
      if (this.mostrarActivos) {
        this.proyectosFiltered = this.proyectos.filter(proyecto => {
          return (proyecto.activo === true);
        });
      }
      else {
      this.proyectosFiltered = this.proyectos;
      }
    }
  }
