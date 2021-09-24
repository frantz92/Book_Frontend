import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, SelectItem } from 'primeng/api';
import { AuthorDTO, AuthorRESTAPIService } from '../../../generated';

@Component({
  selector: 'app-author-detail-form',
  templateUrl: './author-detail-form.component.html',
  styleUrls: ['./author-detail-form.component.css'],
})
export class AuthorDetailFormComponent implements OnInit {
  @Output()
  public jsonTranslatePrefix = 'AUTHOR.FORM.';
  public formSubmitted: EventEmitter<AuthorDTO> = new EventEmitter();
  public authorForm: FormGroup;
  public authorId: number;
  public helpArticleId = 'PAGE_AUTHOR_DETAIL';
  public translatedData: Record<string, string>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly authorApi: AuthorRESTAPIService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService
  ) {
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));
    this.authorForm = formBuilder.group({
      authorName: new FormControl(null),
      authorSurame: new FormControl(null),
      authorAge: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.translateService
      .get(['AUTHOR.FORM.INVALID'])
      .subscribe((data) => {
        this.translatedData = data;
      });
    if (this.route.snapshot.paramMap.get('id')) {
      this.loadData(this.authorId);
    }
  }

  public emitForm(): void {
    if (this.authorForm.valid) {
      const authorDTO: AuthorDTO = this.authorForm.value;
      this.formSubmitted.emit(authorDTO);
    } else {
      this.messageService.add({
        severity: 'error',
        summary:
          this.translatedData['AUTHOR.FORM.INVALID'],
      });
    }
  }

  private fillForm(authorDTO: AuthorDTO): void {
    Object.keys(this.authorForm.controls).forEach((element) => {
      if (authorDTO[element]) {
        this.authorForm.controls[element].setValue(authorDTO[element]);
      }
    });
  }

  private loadData(authorId: number): void {
    this.authorApi.getAuthorById({ id: authorId }).subscribe((authors) => {
      this.fillForm(authors);
    });
  }
}
