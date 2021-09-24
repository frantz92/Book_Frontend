import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailFormComponent } from './book-detail-form/book-detail-form.component';
import { BookDetailRoutingModule } from './book-detail-routing.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigurationService, TkitPortalModule } from 'portal-lib';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BookEditComponent,
    BookCreateComponent,
    BookDetailFormComponent,
  ],
  imports: [CommonModule, SharedModule, BookDetailRoutingModule],
  exports: [
    BookEditComponent,
    BookCreateComponent,
    TkitPortalModule,
    TranslateModule,
  ],
})
export class BookDetailModule {
  constructor(txService: TranslateService, confService: ConfigurationService) {
    confService.lang$.subscribe((lang) => {
      txService.use(lang);
    });
  }
}
