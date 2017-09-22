import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { Board } from "../model/board";
import { BOARD } from "../board.tokens";

@Component({
  selector: 'gol-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @HostBinding('style.width') width:string;

  constructor(
    @Inject(BOARD) private boardService: Board
  ) { }

  ngOnInit(): void {
    this.boardService.getDimension().subscribe(dimension => this.width = 100 / dimension + '%');
  }
}
