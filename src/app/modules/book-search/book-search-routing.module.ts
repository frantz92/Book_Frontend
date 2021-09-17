import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './book-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BookSearchComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookSearchRoutingModule {}
