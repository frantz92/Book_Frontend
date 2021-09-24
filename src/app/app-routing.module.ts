import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BookSearchModule } from './modules/book-search/book-search.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => BookSearchModule,
  },
  {
    path: 'book',
    loadChildren: () =>
      import('src/app/modules/book-detail/book-detail.module').then(
        (m) => m.BookDetailModule
      ),
  },
  {
    path: 'author',
    loadChildren: () =>
      import('src/app/modules/author-detail/author-detail.module').then(
        (m) => m.AuthorDetailModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
    }),
    TranslateModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
