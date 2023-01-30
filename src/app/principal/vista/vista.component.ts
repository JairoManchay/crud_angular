import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Tbldatos } from '../../models/tbldatos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  constructor(private servicio: UserserviceService, private ruta: ActivatedRoute){}

  registros: Tbldatos[]=[];

  ngOnInit(){
    this.Vista();

  }

  Eliminar(id: string){
    this.servicio.getEliminar(id).subscribe({
      complete:()=>console.log("Servicio recupero los registros ")
    })
    this.Vista();
  }


  Vista(){
    this.registros.pop();
    this.servicio.getVista().subscribe({
      next:(datos: Tbldatos[])=> this.registros = datos,
      complete:()=> console.log(" Servicio recupero los registros de la tabla datos")
    })
  }
}
