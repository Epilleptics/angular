import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CellsTrackerService } from './cells-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  public cellMatrix: Array<Array<Observable<boolean>>> = [];
  private dimension = 100;

  constructor(private cellTrackerService: CellsTrackerService) {}

  ngOnInit(): void {
    for (let x = 0; x < this.dimension; ++x) {
      this.cellMatrix[x] = [];
      for (let y = 0; y < this.dimension; ++y) {
        this.cellMatrix[x][y] = this.cellTrackerService.generateNewCell(x, y);
      }
    }
  }

  ngAfterViewInit(): void {
    this.cellTrackerService.start();
  }
}
