// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { Pipe, PipeTransform } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { TranslateService } from '@ngx-translate/core';
// import { MessageService } from 'primeng/api';
// import { TranslateServiceMock } from 'src/app/test/TranslateServiceMock';

// import { TableCreateComponent } from './table-create.component';

// describe('TableCreateComponent', () => {
//   let component: TableCreateComponent;
//   let fixture: ComponentFixture<TableCreateComponent>;

//   @Pipe({ name: 'translate' })
//   class TranslatePipeMock implements PipeTransform {
//     transform(value: string): string {
//       return '';
//     }
//   }

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
//       declarations: [ TableCreateComponent, TranslatePipeMock ],
//       providers: [
//         { provide: TranslateService, useClass: TranslateServiceMock },
//         { provide: MessageService, useClass: MessageService}
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TableCreateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
