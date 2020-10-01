import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto';

// const SERVIDOR = 'https://gentle-citadel-05245.herokuapp.com/api/proyectos';
const SERVIDOR = 'http://localhost:8080/api/proyectos';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  obtenerProyectos(){
    return (this.http.get<Proyecto[]>(SERVIDOR));
  }
  obtenerProyectoId(id: string){
    return (this.http.get<Proyecto>(SERVIDOR + '/' + id));
  }

  enviarProyectos(proyecto: Proyecto){
    return (this.http.post(SERVIDOR, proyecto));
  }

  borrarProyecto(id: string){
    return (this.http.delete(SERVIDOR + '/' + id));
  }
  actualizarProyecto(proyecto: Proyecto){
    return (this.http.put(SERVIDOR + '/' + proyecto.id, proyecto));
  }

}
