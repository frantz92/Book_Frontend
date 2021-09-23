// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { BookingDTO } from '../../../generated/model/bookingDTO';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// import { ResultsComponent } from './results.component';
// import { Pipe, PipeTransform } from '@angular/core';
// import { Column } from 'src/app/core/types/column';
// import { By } from '@angular/platform-browser';
// import { TableModule } from 'primeng/table';

// const mockBookingResults: BookingDTO[] = [
//   {
//     name: 'booking1',
//     assistants: 2,
//     canceled: false,
//     table: {seatsNumber: 4}
//   },
//   {
//     name: 'booking2',
//     assistants: 1,
//     canceled: false,
//     table: {seatsNumber: 2}
//   }
// ];

// describe('ResultsComponent', () => {
//   let component: ResultsComponent;
//   let fixture: ComponentFixture<ResultsComponent>;

//   const mockColumns: Column[] = [
//     {
//       field: 'name',
//       header: 'NAME'
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
//     component.results = mockBookingResults;
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });

//   it('should display number of table in table', () => {
//     component.results = mockBookingResults;
//     fixture.detectChanges();
//     void expect(
//       fixture.debugElement.queryAll(By.css('p-table  tbody > tr')).length).toEqual(mockBookingResults.length);
//   });

//   it('should match data on page with mock data', () => {
//     component.results = mockBookingResults;
//     component.columns = mockColumns;
//     fixture.detectChanges();

//     const firstRowOfColumn = fixture.debugElement.query(By.css('p-table tbody > tr'));

//     expect(firstRowOfColumn.query(By.css('td div')).nativeElement.textContent).toContain(mockBookingResults[0].name);
//   });
// });
