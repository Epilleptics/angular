import { Component, Inject, Input, OnInit } from '@angular/core';
import { BOARD } from "../board.tokens";
import { Board } from "../model/board";

@Component({
  selector: 'gol-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() dimension = 0;

  constructor(
    @Inject(BOARD) private boardService: Board
  ) { }

  ngOnInit() {
    this.boardService.setDimension(this.dimension);
  }
}
