import { Component, Inject, OnInit } from '@angular/core';
import { Cell } from "../app.component";

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {

  constructor(
    @Inject("cell") private cell: Cell
  ) { }

  ngOnInit() {
    console.log(">>", this.cell);
  }

  increaseRows(): void {
    !!this.cell.rowspan && this.cell.rowspan++;
  }
  decreaseRows(): void {
    !!this.cell.rowspan && this.cell.rowspan--;
  }
}
