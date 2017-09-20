# Game of Life - Angular

This project is a boilerplate for [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) projects, written in Angular.

## Usage

* Import `BoardModule` as a dependency your module
* Board
  * Use the directive `gol-board-grid` on your container that will contain the cells
  * Bind the property `dimension` to the size the board should later have (e.g. 50 for a 50x50 board)
* Cells
  * The directive `gol-board-cell` has to be applied to a wrapping-container of your cell

## Example

```
<div gol-board-grid [dimension]="dimension">
   <ng-template ngFor let-cellArray [ngForOf]="cellMatrix">
     <ng-template ngFor let-cell [ngForOf]="cellArray">
       <div gol-board-cell>
         <app-cell-view [cell]="cell"></app-cell-view>
       </div>
     </ng-template>
   </ng-template>
 </div>
 ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
