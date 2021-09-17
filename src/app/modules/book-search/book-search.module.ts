import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BookSearchComponent } from './book-search.component';
import { BookSearchRoutingModule } from './book-search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CriteriaComponent } from './criteria/criteria.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [BookSearchComponent, CriteriaComponent, ResultsComponent],
  imports: [SharedModule, BookSearchRoutingModule],
  exports: [BookSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookSearchModule {}
