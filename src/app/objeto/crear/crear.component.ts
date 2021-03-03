import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasajero } from 'src/app/clase/pasajero';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  formCliente : FormGroup;
   pasajeros : any[] = [];
   idPasajero : any;
   param : any;
   pasajero : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router, private servicioService: ServicioService) { }

  ngOnInit() {
      
      this.route.paramMap.subscribe((param) => {
        
        this.idPasajero = param.get('id');

        if (this.idPasajero !== 'new') {
            this.getPasajeroById(this.idPasajero);
        }
});

      this.initForm(this.pasajero);
  }

 

   initForm(editarPasajero : Pasajero){
 
    this.formCliente = this.fb.group({
      nombre : [editarPasajero ? editarPasajero.nombre:'', Validators.required],
      apellido : [editarPasajero ? editarPasajero.apellido:'', Validators.required],
      edad : [editarPasajero ? editarPasajero.edad:'', Validators.required],
      fechaDeNacimiento : [editarPasajero ? editarPasajero.fechaDeNacimiento:'', Validators.required],
     });
    }

    getPasajeroById(idPasajero: String) {
      this.servicioService.getPasajeroById(idPasajero).subscribe((data) => {
          
          let pasajeroId = data;

          this.formCliente.patchValue(pasajeroId);
      });
  }

    getPasajero(){
      this.servicioService.getPasajero().subscribe((pasajero: any) =>{
        this.pasajero = pasajero;
      });
    }

   

   enviar(){
    if(this.idPasajero){
      this.servicioService.editarPasajero(this.idPasajero, this.formCliente.value).subscribe(pasajero =>{
        
      });
  } else {
    this.servicioService.guardarPasajero(this.formCliente.value).subscribe(pasajero => {
      let pasajeroNuevo = pasajero;
    });
    }
    this.router.navigate(['/mostrar-component']);
   };  
  
}