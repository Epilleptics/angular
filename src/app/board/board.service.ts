import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/debounceTime'
import { Observable } from "rxjs/Observable";

@Injectable()
export class BoardService {

  private boardDimension$ = new Subject<number>();
  private ready$ = new Subject<void>();
  private currentDimension: number = 0;

  public setBoardDimension(dimension: number) {
    this.currentDimension = dimension;
    this.boardDimension$.next(dimension);
  }

  public getBoardDimension(): Observable<number> {
    return this.boardDimension$;
  }

  public get onReady(): Observable<void> {
    return this.ready$.debounceTime(10);
  }

  public ready() {
    this.ready$.next();
  }

  constructor() {

  }

}
