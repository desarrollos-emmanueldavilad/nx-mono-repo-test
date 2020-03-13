import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CoffeComponent } from './coffe/coffe.component';
import { InicioshareComponent } from './inicioshare/inicioshare.component';
import { PepitoComponent } from './pepito/pepito.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InicioComponent, CoffeComponent, InicioshareComponent, PepitoComponent],
  exports: [InicioComponent, CoffeComponent, InicioshareComponent],
})
export class MyLibModule {}
