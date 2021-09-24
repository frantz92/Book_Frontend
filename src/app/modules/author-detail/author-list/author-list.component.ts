import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'portal-lib';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Column } from '../../../core/types/column';
import { ColumnType } from '../../../core/types/columnType';
import {
  GetAuthorByCriteriaRequestParams,
  AuthorDTO,
  AuthorRESTAPIService,
} from '../../../generated';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  @Input()
  public results: AuthorDTO[];
  public criteria: GetAuthorByCriteriaRequestParams;
  public deleteDialogVisible = false;
  public helpArticleId = 'PAGE_AUTHOR_SEARCH';
  public translatedData: Record<string, string>;

  public columns: Column[] = [
    {
      field: 'authorSurname',
      header: 'AUTHOR.FORM.SURNAME',
      type: ColumnType.INPUT,
    },
    {
      field: 'authorName',
      header: 'AUTHOR.FORM.NAME',
      type: ColumnType.INPUT,
    },
  ];

  private selectedAuthor = null;

  constructor(
    private readonly authorApi: AuthorRESTAPIService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private breadCrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.translateService
      .get([
        'AUTHOR.DELETE.SUCCESS',
        'AUTHOR.DELETE.ERROR',
        'AUTHOR.LIST.HEADER',
      ])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['AUTHOR.LIST.HEADER'],
            label: this.translatedData['AUTHOR.LIST.HEADER'],
          },
        ]);
      });
    this.loadData();
  }

  public getSelectedAuthor(): AuthorDTO {
    return this.selectedAuthor;
  }

  public setSelectedAuthor(selectedAuthor: AuthorDTO): void {
    this.selectedAuthor = selectedAuthor;
  }

  public deleteAuthor(id: number): void {
    this.authorApi.deleteAuthor({ id }).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translatedData['AUTHOR.DELETE.SUCCESS'],
        });
        this.loadData();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: this.translatedData['AUTHOR.DELETE.ERROR'],
        });
      }
    );
  }

  private loadData(): void {
    this.getAuthors().subscribe((authors) => {
      this.results = authors;
    });
  }

  private getAuthors(): Observable<AuthorDTO[]> {
    return this.authorApi
      .getAuthorByCriteria({})
      .pipe(map((data) => data.stream as AuthorDTO[]));
  }
}
