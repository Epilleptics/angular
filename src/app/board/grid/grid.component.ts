import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from "../board.service";

@Component({
  selector: 'gol-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() dimension = 0;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.setDimension(this.dimension);
  }
}
