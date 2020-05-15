import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const config: ExtraOptions = {
  useHash: true
};
const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
