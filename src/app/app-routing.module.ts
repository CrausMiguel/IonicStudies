import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* rotas são os caminhos especificados para acessar as páginas
   - são acessadas via url 
*/
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { /* quando não houver um caminho específico, direcionar para a 'home' */
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'grid1', /* texto para a rota */
    loadChildren: () => import('./grid1/grid1.module').then( m => m.Grid1PageModule) /* especificação da página para a rota */
  },
  {
    path: 'grid2',
    loadChildren: () => import('./grid2/grid2.module').then( m => m.Grid2PageModule)
  },  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'form2',
    loadChildren: () => import('./form2/form2.module').then( m => m.Form2PageModule)
  },
  {
    path: 'ng-pge',
    loadChildren: () => import('./ng-pge/ng-pge.module').then( m => m.NgPgePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
