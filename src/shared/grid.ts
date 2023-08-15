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

    checkWin(connectN: any, row: any, col: any, piece: any) {

        let count = 0;

        // Check horizontal
        for (let c = 0; c < this.columns; c++) {
            if (this.grid[row][c] == piece) {
                count++;
            } else {
                count = 0;
            }

            if (count == connectN) {
                return true;
            }
        }

        // Check vertical
        count = 0;

        for (let r = 0; r < this.rows; r++) {
            if (this.grid[r][col] == piece) {
                count++;
            } else {
                count = 0;
            }

            if (count == connectN) {
                return true;
            }
        }

        // Check diagonal
        count = 0;

        for (let r = 0; r < this.rows; r++) {
            let c = row + col - r;

            if (c >= 0 && c < this.columns && this.grid[r][c] == piece) {
                count++;
            } else {
                count = 0;
            }

            if (count == connectN) {
                return true;
            }
        }

        //  Check anti-diagonal
        count = 0;
        for (let r = 0; r < this.rows; r++) {
            let c = col - row + r;
            if (c >= 0 && c < this.columns && this.grid[r][c] == piece) {
                count++;
            } else {
                count = 0;
            }

            if (count == connectN) {
                return true;
            }
        }

        return;

    }

}