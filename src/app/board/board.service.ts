import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";

@Injectable()
export class BoardService {
  private boardDimension$ = new ReplaySubject<number>(1);

  public setDimension(dimension: number) {
    this.boardDimension$.next(dimension);
  }

  public getDimension(): Observable<number> {
    return this.boardDimension$.distinctUntilChanged();
  }
}
