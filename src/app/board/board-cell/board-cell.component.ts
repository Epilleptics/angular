import { AfterContentInit, AfterViewInit, Component, HostBinding, Input, OnInit } from '@angular/core';
import { BoardService } from "../board.service";

@Component({
  selector: '[gol-board-cell]',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {

  @HostBinding('style.display') display: string = 'inline-block';
  @HostBinding('style.position') position: string = 'relative';
  @HostBinding('style.width') width:string;
  @HostBinding('style.float') float:string = 'left';

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getBoardDimension().distinctUntilChanged().subscribe((dimension) => {
      this.width = 100 / dimension + '%';
    });
    this.boardService.ready();
  }
}
