import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorCreateComponent } from './author-create/author-create.component';
//import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [
  { path: 'create', component: AuthorCreateComponent },
  { path: 'list', component: AuthorListComponent },
  //{ path: 'edit/:id', component: AuthorEditComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorDetailRoutingModule {}
