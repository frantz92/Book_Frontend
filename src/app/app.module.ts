import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  APP_CONFIG,
  MockAuthModule,
  StandardTranslateHttpLoader,
  TkitPortalModule,
} from 'portal-lib';
import { environment } from '../environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BASE_PATH } from './generated';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookSearchModule } from './modules/book-search/book-search.module';

const authModule = MockAuthModule;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TkitPortalModule,
    authModule,
    BookSearchModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StandardTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: BASE_PATH, useValue: 'BooksManagerApi' },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
