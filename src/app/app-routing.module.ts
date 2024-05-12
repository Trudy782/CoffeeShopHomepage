import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }, // Adaugam o ruta goală pentru a incarca MenuModule pe pagina principala
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

