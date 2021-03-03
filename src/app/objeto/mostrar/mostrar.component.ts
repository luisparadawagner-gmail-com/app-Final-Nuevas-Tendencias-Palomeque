import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../servicio/servicio.service';
import { CrearComponent } from '../crear/crear.component';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Pasajero } from "../../clase/pasajero";

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'fechaDeNacimiento', 'editar', 'borrar'];
  dataSource : any[] = [];

  formCliente : FormGroup;
   pasajeros : any[] = [];
   idPasajero : any;
   pasajero : any;

  constructor(private fb : FormBuilder, private servicioService : ServicioService, private router : Router) { }

  ngOnInit(): void {
    this.getPasajero();
    this.initForm(this.pasajero);
  }
  nombreControl = new FormControl('User');

  initForm(editarPasajero : Pasajero){
 
    this.formCliente = this.fb.group({
      nombre : [editarPasajero ? editarPasajero.nombre:'', Validators.required],
      apellido : [editarPasajero ? editarPasajero.apellido:'', Validators.required],
      edad : [editarPasajero ? editarPasajero.edad:'', Validators.required],
      fechaDeNacimiento : [editarPasajero ? editarPasajero.fechaDeNacimiento:'', Validators.required],
     });
    }

  getPasajero(){
    this.servicioService.getPasajero().subscribe((data: any) => {
      
      this.dataSource = data;
    });
  }

  recibePasajero(pasajero : CrearComponent){
    
    this.dataSource.push(pasajero);
  }

  editarPasajero(idPasajero){
  

    this.router.navigate(['/crear-component/', idPasajero]);
  }
    
  borrarPasajero(pasajero: any){
    this.idPasajero = pasajero._id;
    this.servicioService.borrarPasajero
    (this.idPasajero).subscribe((data: any ) =>{
    let pasajeroBorrado = pasajero;
  });
  location.reload();
  }
}