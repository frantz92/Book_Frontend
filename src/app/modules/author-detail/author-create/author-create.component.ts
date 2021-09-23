import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'portal-lib';
import { MessageService } from 'primeng/api';
import {
  CreateAuthorRequestParams,
  AuthorDTO,
  AuthorRESTAPIService,
} from '../../../generated';
import { AuthorDetailFormComponent } from '../author-detail-form/author-detail-form.component';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css'],
})
export class AuthorCreateComponent implements OnInit {
  @ViewChild(AuthorDetailFormComponent, { static: false })
  public authorDetailFormComponent: AuthorDetailFormComponent;
  public helpArticleId = 'PAGE_AUTHOR_CREATE';
  public translatedData: Record<string, string>;

  constructor(
    private readonly authorRESTAPIService: AuthorRESTAPIService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService,
    private readonly breadCrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.translateService
      .get([
        'AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE_SUCCESS',
        'AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE_ERROR',
        'AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE',
      ])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE'],
            label: this.translatedData['AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE'],
          },
        ]);
      });
  }

  public onSubmit(authorDTO: AuthorDTO): void {
    this.authorRESTAPIService.createAuthor({ authorDTO }).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary:
            this.translatedData[
              'AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE_SUCCESS'
            ],
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary:
            this.translatedData['AUTHOR_MENU.AUTHOR_CREATE_EDIT.CREATE_ERROR'],
        });
      }
    );
  }
}
