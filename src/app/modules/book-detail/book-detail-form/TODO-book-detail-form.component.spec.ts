// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Pipe, PipeTransform } from '@angular/core';
// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import {
//   TranslateModule,
//   TranslateService
// } from '@ngx-translate/core';
// import { MessageService } from 'primeng/api';
// import { CalendarModule } from 'primeng/calendar';
// import { CheckboxModule } from 'primeng/checkbox';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { DropdownModule } from 'primeng/dropdown';
// import { TranslateServiceMock } from 'src/app/test/TranslateServiceMock';

// import { BookingDetailFormComponent } from './booking-detail-form.component';

// describe('BookingDetailFormComponent', () => {
//   let component: BookingDetailFormComponent;
//   let fixture: ComponentFixture<BookingDetailFormComponent>;
//   @Pipe({ name: 'translate' })
//   class TranslatePipeMock implements PipeTransform {
//     transform(value: string): string {
//       return '';
//     }
//   }
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [BookingDetailFormComponent],
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule,
//         ReactiveFormsModule,
//         DropdownModule,
//         InputNumberModule,
//         CheckboxModule,
//         CalendarModule,
//         TranslateModule
//       ],
//       providers: [
//         { provide: TranslateService, useClass: TranslateServiceMock },
//         MessageService
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BookingDetailFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
