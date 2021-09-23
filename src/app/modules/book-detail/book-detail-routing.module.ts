import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
//import { BookEditComponent } from './booking-edit/booking-edit.component';

const routes: Routes = [
  { path: 'create', component: BookCreateComponent },
  // { path: 'edit/:id', component: BookingEditComponent },
  { path: '', component: BookCreateComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailRoutingModule {}
