import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'portal-lib';
import { MessageService } from 'primeng/api';
import {
  AuthorDTO,
  AuthorRESTAPIService,
  UpdateAuthorRequestParams,
} from '../../../generated';
import { AuthorDetailFormComponent } from '../author-detail-form/author-detail-form.component';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css'],
})
export class AuthorEditComponent implements OnInit {
  @ViewChild(AuthorDetailFormComponent, { static: false })
  public authorDetailFormComponent: AuthorDetailFormComponent;
  public helpArticleId = 'PAGE_AUTHOR_EDIT';
  public translatedData: Record<string, string>;
  private readonly authorId: number;

  constructor(
    private readonly authorApi: AuthorRESTAPIService,
    private readonly translateService: TranslateService,
    private readonly messageService: MessageService,
    private readonly route: ActivatedRoute,
    private readonly breadCrumbService: BreadcrumbService
  ) {
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.translateService
      .get([
        'AUTHOR.EDIT.SUCCESS',
        'AUTHOR.EDIT.ERROR',
        'AUTHOR.EDIT.HEADER',
      ])
      .subscribe((data) => {
        this.translatedData = data;
        this.breadCrumbService.setItems([
          {
            title: this.translatedData['AUTHOR.EDIT.HEADER'],
            label: this.translatedData['AUTHOR.EDIT.HEADER'],
          },
        ]);
      });
  }

  public onSumbit(data: AuthorDTO): void {
    const params: UpdateAuthorRequestParams = {
      id: this.authorId,
      authorDTO: data,
    };
    this.authorApi.updateAuthor(params).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: this.translatedData['AUTHOR.EDIT.SUCCESS'],
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: this.translatedData['AUTHOR.EDIT.ERROR'],
        });
      }
    );
  }
}
