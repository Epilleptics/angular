import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Cell } from './models/cell';

@Injectable()
export class CellsTrackerService {

  private cells: Map<number, Map<number, Cell>>;

  constructor() {
    this.cells = new Map();
  }

  private getTrueOrFalse(): boolean {
    return Math.random() > 0.5;
  }

  public generateNewCell(x: number, y: number): Observable<boolean> {
    const isAlive = this.getTrueOrFalse();

    let yDimension = this.cells.get(x);
    if (!yDimension) {
      yDimension = new Map();
      this.cells.set(x, yDimension);
    }
    return Observable.create((observer: Observer<boolean>) => {
      const cell: Cell = {
        alive: isAlive,
        observer: observer,
        aliveInNextTick: false
      };
      yDimension.set(y, cell);
      observer.next(isAlive);
    });
  }

  public tick() {
    this.cells.forEach((map: Map<number, Cell>, x: number) => {
      map.forEach((cell: Cell, y: number) => {
          const aliveCells = this.countLivingCellsAround(x, y);
          let isAlive = false;
          if ((aliveCells === 2 && cell.alive) || aliveCells === 3) {
            isAlive = true;
          }
          cell.aliveInNextTick = isAlive;
      });
    });
    this.cells.forEach((map: Map<number, Cell>, x: number) => {
      map.forEach((cell: Cell, y: number) => {
        if (cell.alive !== cell.aliveInNextTick) {
          cell.alive = cell.aliveInNextTick;
          cell.observer.next(cell.alive);
        }
      });
    });
  }

  public start() {
    setInterval(() => this.tick(), 2000);
  }

  private countLivingCellsAround(x: number, y: number): number {
    let aliveCells = 0;
    // noinspection TsLint
    for (let cX = x - 1, maxX = x + 1; cX <= maxX; ++cX ){
      // noinspection TsLint
      for (let cY = y - 1, maxY = y + 1; cY <= maxY; ++cY) {
        if (cX !== x || cY !== y) {
          const yDimension = this.cells.get(cX);
          if(yDimension) {
            const cell = yDimension.get(cY);
            if(cell && cell.alive) {
              aliveCells++;
            }
          }
        }
      }
    }
    return aliveCells;
  }
}
