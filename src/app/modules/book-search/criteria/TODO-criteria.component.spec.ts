// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import {HttpClientTestingModule} from '@angular/common/http/testing';
// import {ReactiveFormsModule} from '@angular/forms';
// import { CriteriaComponent } from './criteria.component';
// import {Pipe, PipeTransform} from '@angular/core';
// import { GetBookingsByCriteriaRequestParams } from 'src/app/generated';
// import { DropdownModule } from 'primeng/dropdown';
// import { CheckboxModule } from 'primeng/checkbox';
// import { CalendarModule } from 'primeng/calendar';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateServiceMock } from 'src/app/test/TranslateServiceMock';
// import { MessageService } from 'primeng/api';

// describe('CriteriaComponent', () => {
//   let component: CriteriaComponent;
//   let fixture: ComponentFixture<CriteriaComponent>;

//   @Pipe({name: 'translate'})
//   class TranslatePipeMock implements PipeTransform {
//     transform(value: string): string {
//       return '';
//     }
//   }

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CriteriaComponent, TranslatePipeMock ],
//       imports: [
//         HttpClientTestingModule,
//         ReactiveFormsModule,
//         DropdownModule,
//         CheckboxModule,
//         InputNumberModule,
//         CalendarModule,
//         TranslateModule
//       ],
//       providers: [
//         { provide: TranslateService, useClass: TranslateServiceMock },
//         MessageService
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CriteriaComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should create form', () => {
//     expect(component.criteriaGroup).toBeTruthy();
//   });

//   it('should have predefine inputs', () => {
//     expect(component.criteriaGroup.value.bookingName).toBeNull();
//     expect(component.criteriaGroup.value.bookingType).toBeNull();
//     expect(component.criteriaGroup.value.bookingDate).toBeNull();
//     expect(component.criteriaGroup.value.expirationDate).toBeNull();
//     expect(component.criteriaGroup.value.tableId).toBeNull();
//     expect(component.criteriaGroup.value.tableSize).toBeNull();
//     expect(component.criteriaGroup.value.canceled).toBeNull();
//   });

//   it('should set inputs in search criteria', () => {
//     const testCriteria: GetBookingsByCriteriaRequestParams = {
//       bookingName: 'name',
//       tableId: 2,
//       tableSize: 5
//     };
//     component.criteriaGroup.controls.bookingName.setValue(testCriteria.bookingName);
//     component.criteriaGroup.controls.tableId.setValue(testCriteria.tableId);
//     component.criteriaGroup.controls.tableSize.setValue(testCriteria.tableSize);
//     fixture.detectChanges();

//     expect(component.criteriaGroup.value.bookingName).toEqual(testCriteria.bookingName);
//     expect(component.criteriaGroup.value.tableId).toEqual(testCriteria.tableId);
//     expect(component.criteriaGroup.value.tableSize).toEqual(testCriteria.tableSize);
//   });

//   it('should submit search criteria', () => {
//     const emitterSpy: jasmine.Spy = spyOn<any>(
//       component.criteriaSubmitted,
//       'emit'
//     );
//     component.criteriaGroup.patchValue({bookingName: 'name', tableId: 'tableId'});
//     component.submitCriteria();
//     expect(emitterSpy).toHaveBeenCalledTimes(1);
//     expect(emitterSpy).toHaveBeenCalledWith(component.criteriaGroup.value);
//   });

//   it('should reset criteria inputs', () => {
//     component.criteriaGroup.patchValue({bookingName: 'name', tableId: 'tableId'});
//     component.submitCriteria();
//     expect(component.criteriaGroup.value.bookingName).toEqual('name');
//     expect(component.criteriaGroup.value.tableId).toEqual('tableId');
//     component.resetFormGroup();
//     expect(component.criteriaGroup.value.bookingName).toBeNull();
//     expect(component.criteriaGroup.value.tableId).toBeNull();
//   });
// });
