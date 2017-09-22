import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromPattern, PATTERN } from "./example/patterns";
import { BOARD_DIMENSION, CELL_TRACKER } from "./app.tokens";
import { CellTracker } from "./model/cell-tracker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cellMatrix: Array<Array<Observable<boolean>>> = [];

  constructor(
    @Inject(CELL_TRACKER) private cellTrackerService: CellTracker,
    @Inject(BOARD_DIMENSION) private dimension: number
  ) {}

  ngOnInit(): void {
    for (let x = 0; x < this.dimension; ++x) {
      this.cellMatrix[x] = [];
      for (let y = 0; y < this.dimension; ++y) {
        this.cellMatrix[x][y] = this.cellTrackerService.generateNewCell(x, y, fromPattern(this.dimension, PATTERN.SELF_DESTRCT));
      }
    }
  }
}
