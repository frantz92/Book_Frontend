// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { BookCategory, BookDTO } from 'src/app/generated';

// import { ResultsComponent } from './results.component';
// import { Pipe, PipeTransform } from '@angular/core';
// import { Column } from 'src/app/core/types/column';
// import { By } from '@angular/platform-browser';
// import { TableModule } from 'primeng/table';

// const mockBookResults: BookDTO[] = [
//   {
//     bookTitle: 'Test 1',
//     bookIsbn: '123-1-12-123123-1',
//     bookPages: 256,
//     bookCategory: BookCategory.Horror,
//     bookAuthor: {
//         authorName: 'Jane',
//         authorSurname: 'Sundale',
//         authorAge: 47
//     }
//   },
//   {
//     bookTitle: 'Test 2',
//     bookIsbn: '222-2-22-222222-2',
//     bookPages: 2222,
//     bookCategory: BookCategory.Contemporary,
//     bookAuthor: {
//         authorName: 'Clay',
//         authorSurname: 'Swanson',
//         authorAge: 71
//     }
//   }
// ];

// describe('ResultsComponent', () => {
//   let component: ResultsComponent;
//   let fixture: ComponentFixture<ResultsComponent>;

//   const mockColumns: Column[] = [
//     {
//       field: 'bookTitle',
//       header: 'TITLE'
//     }
//   ];

//   @Pipe({name: 'translate'})
//   class TranslatePipeMock implements PipeTransform {
//     transform(value: string): string {
//       return value;
//     }
//   }

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ResultsComponent, TranslatePipeMock ],
//       imports: [TableModule, HttpClientTestingModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ResultsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should create with given inputs', () => {
//     component.results = mockBookResults;
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });

//   it('should display number of table in table', () => {
//     component.results = mockBookResults;
//     fixture.detectChanges();
//     void expect(
//       fixture.debugElement.queryAll(By.css('p-table  tbody > tr')).length).toEqual(mockBookResults.length);
//   });

//   it('should match data on page with mock data', () => {
//     component.results = mockBookResults;
//     component.columns = mockColumns;
//     fixture.detectChanges();

//     const firstRowOfColumn = fixture.debugElement.query(By.css('p-table tbody > tr'));

//     expect(firstRowOfColumn.query(By.css('td div')).nativeElement.textContent).toContain(mockBookResults[0].bookTitle);
//   });
// });
