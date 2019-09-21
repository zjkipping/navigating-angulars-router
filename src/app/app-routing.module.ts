import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'child',
        pathMatch: 'full'
      },
      { path: 'child', component: ChildComponent },
      { path: 'form', component: FormComponent },
      { path: '**', redirectTo: 'child' }
    ]
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
