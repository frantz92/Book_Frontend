import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BookSearchComponent } from './book-search.component';
import { TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { TranslateServiceMock } from 'src/app/test/TranslateServiceMock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { BookDTO } from 'src/app/generated/model/bookDTO';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  @Pipe({ name: 'translate' })
  class TranslatePipeMock implements PipeTransform {
    transform(value: string): string {
      return '';
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookSearchComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MultiSelectModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        MessageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have results component', () => {
    expect(
      fixture.debugElement.nativeElement.querySelector('app-results')
    ).not.toEqual(null);
    expect(
      fixture.debugElement.nativeElement.querySelectorAll('app-results').length
    ).toEqual(1);
  });

  it('should have criteria component', () => {
    expect(
      fixture.debugElement.nativeElement.querySelector('app-criteria')
    ).not.toBe(null);
    expect(
      fixture.debugElement.nativeElement.querySelectorAll('app-criteria').length
    ).toEqual(1);
  });

  it('should not have another component', () => {
    expect(
      fixture.debugElement.nativeElement.querySelector('app-another')
    ).toBe(null);
    expect(
      fixture.debugElement.nativeElement.querySelectorAll('app-another').length
    ).toEqual(0);
  });

  it('should get all books', () => {
    const books: BookDTO[] = [];
    const mockBookRestApi = jasmine.createSpyObj(['getBookByCriteria']);
    mockBookRestApi.getBookByCriteria.and.returnValue(of(books));
    component.doSearch().subscribe(res => {
      expect(res).toBe(books);
    });
  });
});
