import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent implements OnInit {

  @Input() cell: Observable<boolean>;
  public isAlive = false;

  ngOnInit() {
    this.cell.subscribe( alive => this.isAlive = alive);
  }

}
