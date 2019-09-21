import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyMainComponent } from './lazy-main/lazy-main.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [LazyMainComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazyModule {}
