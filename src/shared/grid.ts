import { throwError } from "rxjs";
import { GridPosition } from "./gridposition";


class Grid {

    private rows: any;
    private columns: any;
    private grid: any;

    constructor(rows: any, columns: any) {
        this.rows = rows;
        this.columns = columns;
        this.grid = undefined;
    }

    initializeGrid() {
        this.grid = Array.from({ length: this.rows }, () => Array.from({ length: this.columns }, () => GridPosition.EMPTY));
    }

    getGrid() {
        return this.grid;
    }

    getColumnCount() {
        return this.columns;
    }

    placePiece(column: any, piece: any) {

        if (column < 0 || column >= this.columns) {
            throwError('Invalid column')
        }

        if (piece == GridPosition.EMPTY) {
            throwError('Invalid piece')
        }

        for (let row = this.rows - 1; row >= 0; row--) {

            if (this.grid[row][column] == GridPosition.EMPTY) {
                this.grid[row][column] = piece;
                return row;
            }

        }
        return;
    }



}