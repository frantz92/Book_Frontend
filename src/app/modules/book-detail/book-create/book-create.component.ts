import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'portal-lib';
import { MessageService } from 'primeng/api';
import { BookDTO, BookRESTAPIService } from '../../../generated';
import { BookDetailFormComponent } from '../book-detail-form/book-detail-form.component';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {
  @ViewChild(BookDetailFormComponent, { static: false })
  bookDetailFormComponent: BookDetailFormComponent;
  public helpArticleId = 'PAGE_BOOK_CREATE';
  public translatedData: Record<string, string>;

  constructor(
    private readonly translateService: TranslateService,
    private readonly breadCrumbService: BreadcrumbService,
    private readonly bookRESTAPIService: BookRESTAPIService,
    private readonly messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.translateService
      .get(['BOOK.CREATE.SUCCESS', 'BOOK.CREATE.ERROR', 'BOOK.CREATE.HEADER'])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['BOOK.CREATE.HEADER'],
            label: this.translatedData['BOOK.CREATE.HEADER'],
          },
        ]);
      });
  }

  public onSubmit(bookDTO: BookDTO): void {
    this.bookRESTAPIService.createBook({ bookDTO }).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translatedData['BOOK.CREATE.SUCCESS'],
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: this.translatedData['BOOK.CREATE.ERROR'],
        });
      }
    );
  }
}
