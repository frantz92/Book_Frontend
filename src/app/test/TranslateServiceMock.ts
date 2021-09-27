/* eslint-disable @typescript-eslint/member-ordering */
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

export class TranslateServiceMock {
  public get(value: any): Observable<string | any> {
    return of(value);
  }
  public instant(value: string) {
    return value;
  }
  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();
}
