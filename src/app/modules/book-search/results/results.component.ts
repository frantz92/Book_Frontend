import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookDTO } from '../../../generated';
import { Column } from '../../../core/types/column';
import { ColumnType } from 'src/app/core/types/columnType';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() public results: BookDTO[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  public helpArticleId = 'PAGE_BOOK_SEARCH';

  public deleteDialogVisible = false;
  public selectedBook = null;
  public readonly pathToTranslationJSON =
    'BOOK_MENU.BOOK_SEARCH.AUTHOR.HEADER.';

  public columns: Column[] = [
    {
      field: 'name',
      header: this.pathToTranslationJSON + 'NAME',
      type: ColumnType.INPUT,
    },
    {
      field: 'surname',
      header: this.pathToTranslationJSON + 'SURNAME',
      type: ColumnType.INPUT,
    },
    {
      field: 'age',
      header: this.pathToTranslationJSON + 'AGE',
      type: ColumnType.INPUT,
    },
  ];

  public getSelectedBook(): BookDTO {
    return this.selectedBook;
  }

  public setSelectedBook(selectedBook: BookDTO): void {
    this.selectedBook = selectedBook;
  }
}
