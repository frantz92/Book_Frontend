import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, SelectItem } from 'primeng/api';
import { concatMap } from 'rxjs/operators';
import {
  BookDTO,
  AuthorDTO,
  BookRESTAPIService,
  AuthorRESTAPIService,
  GetBookByIdRequestParams,
  BookCategory,
} from '../../../generated';
@Component({
  selector: 'app-book-detail-form',
  templateUrl: './book-detail-form.component.html',
  styleUrls: ['./book-detail-form.component.css'],
})
export class BookDetailFormComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  public jsonTranslatePrefix = 'BOOK_MENU.HEADER.';

  public editCreateFormGroup: FormGroup;

  public bookToEditId: number;

  public authorsIds: SelectItem[];

  public bookCategories: SelectItem[];

  public options: SelectItem[];

  public helpArticleId = 'PAGE_BOOK_DETAIL';
  public translatedData: Record<string, string>;

  constructor(
    private readonly bookRestApi: BookRESTAPIService,
    private readonly authorRestApi: AuthorRESTAPIService,
    private readonly translateService: TranslateService,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.bookToEditId = Number(this.route.snapshot.paramMap.get('id'));
    this.editCreateFormGroup = fb.group({
      title: new FormControl(null),
      isbn: new FormControl(null),
      category: new FormControl(null),
      pages: new FormControl(null),
      authorId: new FormControl(null),
    });
  }

  ngOnInit(): void {
    const params: GetBookByIdRequestParams = { id: this.bookToEditId };
    this.translateService
      .get([
        'GENERAL.YES',
        'GENERAL.NO',
        'BOOK_MENU.BOOK_CREATE_EDIT.FORM_INVALID',
      ])
      .subscribe((data) => {
        this.translatedData = data;
      });
    this.loadTypes();
    if (this.route.snapshot.paramMap.get('id')) {
      this.loadData(params);
    } else {
      this.loadAuthors();
      this.editCreateFormGroup.get('authorId');
    }
    this.editCreateFormGroup.get('authorId').disable();
    this.options = [
      { label: this.translatedData['GENERAL.YES'], value: true },
      { label: this.translatedData['GENERAL.NO'], value: false },
    ];
  }

  public fillForm(bookDTO: BookDTO): void {
    Object.keys(this.editCreateFormGroup.controls).forEach((element) => {
      if (bookDTO.bookAuthor.id) {
        this.editCreateFormGroup.controls.authorId.setValue(
          bookDTO.bookAuthor.id
        );
      }
    });
  }

  public emitForm(): void {
    if (this.editCreateFormGroup.valid) {
      const bookDTO: BookDTO = Object.assign(
        {},
        this.editCreateFormGroup.value,
        { bookTitle: { id: this.editCreateFormGroup.getRawValue().bookTitle } }
      );
      //bookDTO.bookAuthor = this.authorFormComponent.authorForm.value;
      this.formSubmitted.emit(bookDTO);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: this.translatedData['BOOK_MENU.BOOK_CREATE_EDIT.FORM_INVALID'],
      });
    }
  }
  private loadTypes(): void {
    this.bookCategories = Object.keys(BookCategory).map((key) => ({
      label: BookCategory[key],
      value: key,
    }));
  }
  private loadData(params: GetBookByIdRequestParams): void {
    const observableOfBook = this.bookRestApi.getBookById(params);
    this.authorRestApi
      .getAuthorByCriteria({})
      .pipe(
        concatMap((response) => {
          const authors = response.stream as AuthorDTO[];
          this.authorsIds = authors.map((author) => ({
            label: author.id.toString(),
            value: author.id,
          }));
          return observableOfBook;
        })
      )
      .subscribe((response) => {
        this.fillForm(response);
      });
  }
  private loadAuthors(): void {
    this.authorRestApi.getAuthorByCriteria({}).subscribe((response) => {
      const authors = response.stream as AuthorDTO[];
      this.authorsIds = authors.map((author) => ({
        label: author.id.toString(),
        value: author.id,
      }));
    });
  }
}
