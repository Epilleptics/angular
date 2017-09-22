import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardService } from "./board.service";
import { CellComponent } from "./cell/cell.component";
import { GridComponent } from "./grid/grid.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CellComponent,
    GridComponent
  ],
  providers: [BoardService],
  exports: [
    CellComponent,
    GridComponent
  ]
})
export class BoardModule { }
