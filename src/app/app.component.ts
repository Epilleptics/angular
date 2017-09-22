import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CellsTrackerService } from './cells-tracker.service';
import { fromPattern, PATTERN } from "./example/patterns";
import { BOARD_DIMENSION } from "./app.token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cellMatrix: Array<Array<Observable<boolean>>> = [];

  constructor(
    private cellTrackerService: CellsTrackerService,
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
