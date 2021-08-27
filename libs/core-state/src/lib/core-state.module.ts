import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetalsFacade } from './metals/metals.facade';

@NgModule({
  imports: [CommonModule],
  providers: [MetalsFacade],
})
export class CoreStateModule {}
