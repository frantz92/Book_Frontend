import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  BookCategory,
  GetBookByCriteriaRequestParams,
  AuthorDTO,
  AuthorRESTAPIService,
} from '../../../generated';
import { MessageService, SelectItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
})
export class CriteriaComponent implements OnInit {
  @Input() criteria: GetBookByCriteriaRequestParams;
  @Output() public criteriaSubmitted =
    new EventEmitter<GetBookByCriteriaRequestParams>();
  @Output() public resetEmitter = new EventEmitter();

  public helpArticleId = 'PAGE_BOOK_SEARCH';
  public translatedData: Record<string, string>;

  public criteriaGroup: FormGroup;
  public authorsIds: SelectItem[];
  public bookCategories: SelectItem[];
  public canceledOptions: SelectItem[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authorRestApi: AuthorRESTAPIService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.translateService
      .get([
        'GENERAL.YES',
        'GENERAL.NO',
        'BOOK_MENU.BOOK_SEARCH.CRITERIA.INVALID',
      ])
      .subscribe((data) => {
        this.translatedData = data;
        this.canceledOptions = [
          { label: this.translatedData['GENERAL.YES'], value: true },
          { label: this.translatedData['GENERAL.NO'], value: false },
        ];
      });
    this.initFormGroup();
    this.loadAllAuthorsIds();
    this.loadAllBookCategories();
  }

  public submitCriteria(): void {
    if (this.criteriaGroup.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: this.translatedData['BOOK_MENU.BOOK_SEARCH.CRITERIA.INVALID'],
      });
    } else {
      this.criteriaSubmitted.emit(this.criteriaGroup.value);
    }
  }

  public resetFormGroup(): void {
    this.resetEmitter.emit();
  }

  private initFormGroup(): void {
    this.criteriaGroup = this.formBuilder.group({
      bookTitle: null,
      bookCategory: null,
      bookIsbn: null,
      bookPages: null,
      authorName: null,
      authorSurname: null,
      authorAge: null,
    });
  }
  private loadAllAuthorsIds(): void {
    this.authorRestApi.getAuthorByCriteria({}).subscribe((pageResult) => {
      const tables = pageResult.stream as AuthorDTO[];
      this.authorsIds = tables.map((table) => ({
        label: table.id.toString(),
        value: table.id,
      }));
    });
  }
  private loadAllBookCategories(): void {
    this.bookCategories = Object.keys(BookCategory).map((key) => ({
      label: BookCategory[key],
      value: key,
    }));
  }
}
