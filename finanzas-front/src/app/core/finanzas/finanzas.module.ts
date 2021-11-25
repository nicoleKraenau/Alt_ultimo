import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetraComponent } from './pages/letra/letra.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { ReciboComponent } from './pages/recibo/recibo.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { ViewDataComponent } from './components/dialog/view-data/view-data.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViewDataComponent,
    LetraComponent,
    FacturaComponent,
    ReciboComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports:[
    FacturaComponent,
    ReciboComponent,
    LetraComponent,
    
  ]
})
export class FinanzasModule { }
