import { Component, HostBinding, OnInit } from '@angular/core';
import { BoardService } from "../board.service";

@Component({
  selector: 'gol-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @HostBinding('style.width') width:string;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getDimension().subscribe(dimension => this.width = 100 / dimension + '%');
  }
}
