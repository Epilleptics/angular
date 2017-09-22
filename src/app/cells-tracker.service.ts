import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import { TICK_DURATION } from "./app.tokens";
import { CellTracker } from "./model/cell-tracker";

@Injectable()
export class CellTrackerService implements CellTracker{
  
  private nextCellState: boolean[][] = [];
  private cellState: boolean[][];
  
  private ticker = Rx.Observable.interval(this.tick_duration).do(_ => this.cellState = [...this.nextCellState.map(x => [...x])]).publish().refCount();
  
  constructor(
    @Inject(TICK_DURATION) private tick_duration: number
  ) {}
  
  private isCellAliveInNextTick(x: number, y: number): boolean {
    const aliveCells = this.countLivingCellsAroundA(x, y);
    return ((aliveCells === 2 && this.cellState[x][y]) || aliveCells === 3);
  }
  
  private countLivingCellsAroundA(x: number, y: number): number {
    return this.cellState
      .map((valX, iX) => valX
        .filter((valY, iY) => ((iY !== y || iX !== x) && iY >= y - 1 && y + 1 >= iY && iX >= x - 1 && x + 1 >= iX) && valY))
      .reduce((p, c) => p + c.length, 0);
  }
  
  public generateNewCell(x: number, y: number, pattern: (x: number, y: number) => boolean): Observable<boolean> {
    const isAlive = pattern(x, y);
    this.nextCellState[x] = this.nextCellState[x] || [];
    this.nextCellState[x][y] = isAlive;
    
    return Observable.of(isAlive).merge(this.ticker.switchMap(_ => Observable.of(this.isCellAliveInNextTick(x, y))).do(alive => this.nextCellState[x][y] = alive));
  }
}
