import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardGridDirective } from "./board-grid.directive";
import { BoardService } from "./board.service";
import { BoardCellComponent } from "./board-cell/board-cell.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardGridDirective,
    BoardCellComponent
  ],
  providers: [BoardService],
  exports: [
    BoardGridDirective,
    BoardCellComponent
  ]
})
export class BoardModule { }
