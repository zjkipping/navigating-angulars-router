import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyMainComponent } from './lazy-main/lazy-main.component';

const routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main', component: LazyMainComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
