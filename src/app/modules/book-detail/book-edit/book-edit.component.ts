import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'portal-lib';
import { BookDetailFormComponent } from '../book-detail-form/book-detail-form.component';
import {
  BookDTO,
  BookRESTAPIService,
  UpdateBookRequestParams,
} from '../../../generated';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  @ViewChild(BookDetailFormComponent, { static: false })
  bookDetailFormComponent: BookDetailFormComponent;
  public bookToEditId: number;
  public helpArticleId = 'PAGE_BOOK_EDIT';
  public translatedData: Record<string, string>;

  constructor(
    private readonly translateService: TranslateService,
    private readonly breadCrumbService: BreadcrumbService,
    private readonly bookRestApi: BookRESTAPIService,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.bookToEditId = Number(this.route.snapshot.paramMap.get('id'));
    this.translateService
      .get(['BOOK.EDIT.SUCCESS', 'BOOK.EDIT.ERROR', 'BOOK.EDIT.HEADER'])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['BOOK.EDIT.HEADER'],
            label: this.translatedData['BOOK.EDIT.HEADER'],
          },
        ]);
      });
  }
  public onSubmit(bookDTO: BookDTO): void {
    const params: UpdateBookRequestParams = {
      id: this.bookToEditId,
      bookDTO,
    };
    this.bookRestApi.updateBook(params).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translatedData['BOOK.EDIT.SUCCESS'],
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: this.translatedData['BOOK.EDIT.ERROR'],
        });
      }
    );
  }
}
