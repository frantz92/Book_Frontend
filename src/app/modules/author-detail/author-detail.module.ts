import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorDetailRoutingModule } from './author-detail-routing.module';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailFormComponent } from './author-detail-form/author-detail-form.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigurationService, TkitPortalModule } from 'portal-lib';

@NgModule({
  declarations: [
    AuthorCreateComponent,
    AuthorDetailFormComponent,
    AuthorEditComponent,
    AuthorListComponent,
  ],
  imports: [CommonModule, AuthorDetailRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TranslateModule, TkitPortalModule],
})
export class AuthorDetailModule {
  constructor(txService: TranslateService, confService: ConfigurationService) {
    confService.lang$.subscribe((lang) => {
      txService.use(lang);
    });
  }
}
