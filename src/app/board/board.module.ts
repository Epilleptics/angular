import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from "./board.service";
import { CellComponent } from "./cell/cell.component";
import { GridComponent } from "./grid/grid.component";
import { BOARD } from "./board.tokens";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CellComponent,
    GridComponent
  ],
  providers: [
    {provide: BOARD, useClass: BoardService}
  ],
  exports: [
    CellComponent,
    GridComponent
  ]
})
export class BoardModule { }
