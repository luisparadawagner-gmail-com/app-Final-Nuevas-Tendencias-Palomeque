import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './objeto/crear/crear.component';
import { MostrarComponent } from './objeto/mostrar/mostrar.component';


const routes: Routes = [

  { path : 'crear-component', component: CrearComponent},
  { path : 'mostrar-component', component: MostrarComponent },
  { path : 'crear-component/:id', component: CrearComponent},
  { path: '', redirectTo: 'mostrar', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }