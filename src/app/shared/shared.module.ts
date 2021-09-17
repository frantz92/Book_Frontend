import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConfigurationService, TkitPortalModule } from 'portal-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TkitPortalModule,
    ReactiveFormsModule,
    CheckboxModule,
    TabViewModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule,
    MultiSelectModule,
    TranslateModule,
  ],
  exports: [
    CommonModule,
    MultiSelectModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule,
    TranslateModule,
    FormsModule,
    TkitPortalModule,
    ReactiveFormsModule,
    TabViewModule,
  ],
})
export class SharedModule {
  constructor(txService: TranslateService, confService: ConfigurationService) {
    confService.lang$.subscribe((lang) => {
      txService.use(lang);
    });
  }
}
