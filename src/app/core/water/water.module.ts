import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WaterRoutingModule } from './water-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [CommonModule, WaterRoutingModule, ReactiveFormsModule, FormsModule],
})
export class WaterModule {}
