import { AfterContentInit, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { BoardService } from "./board.service";

@Directive({
  selector: '[gol-board-grid]'
})
export class BoardGridDirective implements OnInit, AfterContentInit{
  @Input()
  dimension: number;

  @HostBinding('style.position')
  display:string = 'absolute';
  @HostBinding('style.top')
  top:string = '0';
  @HostBinding('style.left')
  left:string = '0';
  @HostBinding('style.right')
  right:string = '0';
  @HostBinding('style.bottom')
  bottom:string = '0';

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.onReady.subscribe(() => this.boardService.setBoardDimension(this.dimension));
  }

  ngAfterContentInit(): void {
    //this.boardService.setBoardDimension(this.dimension);
  }

  private getGridProperties(dimension: number): { columns: string, rows: string } {
    let columns = '';
    let rows = '';
    for(let i = 0; i < dimension; ++i) {
      columns += 'auto ';
      rows += 'auto ';
    }
    return {
      columns: columns.slice(0, columns.length - 1),
      rows: columns.slice(0, columns.length - 1)
    }
  }

}
