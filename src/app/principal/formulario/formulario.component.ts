import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Tbldatos } from '../../models/tbldatos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  datos: Tbldatos[] = [
    {Id: '', Nombre: '', Apellido: '', Correo: ''}
    ]

    constructor(private servicio: UserserviceService, private ruta: ActivatedRoute){}

Procesar(){
  if(this.datos[0].Id==''){
    this.servicio.getNuevo(this.datos[0]).subscribe();
  }else{
    this.servicio.getEditar(this.datos[0]).subscribe();
  }
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  let id = this.ruta.snapshot.params['id'];
  this.servicio.getBuscar(id).subscribe({
    next: (datos: Tbldatos[])=> this.datos[0] = datos[0],
    complete() {
      console.log("registro traido")
    },
  })
}

}
