import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BookSearchModule } from './modules/book-search/book-search.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () => BookSearchModule,
  },
  // ,
  // {
  //   path: 'detail',
  //   loadChildren: () =>
  //     import('src/app/modules/book-detail/book-detail.module').then(
  //       (m) => m.BookDetailModule
  //     )
  // },
  // {
  //   path: 'table',
  //   loadChildren: () =>
  //     import('src/app/modules/table-detail/table-detail.module').then(
  //       (m) => m.TableDetailModule
  //     )
  // }
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
