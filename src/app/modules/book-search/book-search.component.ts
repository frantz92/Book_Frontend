import { Component, OnInit } from '@angular/core';
import { BreadcrumbService, PortalSearchPage, provideParent } from 'portal-lib';
import {
  AuthorRESTAPIService,
  BookDTO,
  BookRESTAPIService,
  GetBookByCriteriaRequestParams,
} from '../../generated';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
  providers: [provideParent(BookSearchComponent)],
})
export class BookSearchComponent
  extends PortalSearchPage<BookDTO, GetBookByCriteriaRequestParams>
  implements OnInit
{
  public criteria: GetBookByCriteriaRequestParams;
  public tablesIds: SelectItem[];

  public helpArticleId = 'PAGE_BOOK_SEARCH';
  public translatedData: Record<string, string>;

  public bookCriteria: SelectItem[];
  constructor(
    private readonly bookRestApi: BookRESTAPIService,
    private readonly breadCrumbService: BreadcrumbService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.criteria = this.getDefaultCriteria();
    this.translateService
      .get([
        'BOOK_MENU.BOOK_DELETE.BOOK_DELETE_SUCESS',
        'BOOK_MENU.BOOK_DELETE.BOOK_DELETE_ERROR',
        'BOOK_MENU.BOOK_SEARCH.SEARCH_BOOK',
      ])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['BOOK_MENU.BOOK_SEARCH.SEARCH_BOOK'],
            label: this.translatedData['BOOK_MENU.BOOK_SEARCH.SEARCH_BOOK'],
          },
        ]);
      });
  }

  doSearch(): Observable<BookDTO[]> {
    return this.bookRestApi
      .getBookByCriteria(this.mapDatesInSubmittingCriteria(this.criteria))
      .pipe(map((pageResult) => pageResult.stream as BookDTO[]));
  }

  public submitCriteria(criteria: GetBookByCriteriaRequestParams): void {
    this.criteria = criteria;
    this.search();
  }

  getDefaultCriteria(): GetBookByCriteriaRequestParams {
    return {};
  }

  public mapDatesInSubmittingCriteria(criteria: any): any {
    const mappedCriteria = { ...criteria };
    Object.keys(mappedCriteria).forEach((key) => {
      if (mappedCriteria[key] instanceof Date) {
        mappedCriteria[key] = mappedCriteria[key].toISOString();
      }
    });
    return mappedCriteria;
  }
  public deleteBook(id: number): void {
    this.bookRestApi.deleteBook({ id }).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary:
            this.translatedData['BOOK_MENU.BOOK_DELETE.BOOK_DELETE_SUCESS'],
        });
        this.search();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary:
            this.translatedData['BOOK_MENU.BOOK_DELETE.BOOK_DELETE_ERROR'],
        });
      }
    );
  }

  public resetEmitted(): void {
    this.reset();
  }
}
