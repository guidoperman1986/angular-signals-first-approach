import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsVsRxjsComponent } from './signals-vs-rxjs/signals-vs-rxjs.component';

const routes: Routes = [
  {
    path: 'signals-rxjs',
    component: SignalsVsRxjsComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m =>m.UsersModule),
  },
  {
    path: 'paulina',
    loadChildren: () => import('./paulina/paulina.module').then(m =>m.PaulinaModule),
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
