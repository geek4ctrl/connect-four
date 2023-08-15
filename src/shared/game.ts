import { GridPosition } from "./gridposition";

class Game {

    private grid: any;
    private connectN: any;
    private targetScore: any;
    private players: any;
    private score: any;

    constructor(grid: any, connectN: any, targetScore: any) {
        this.grid = grid;
        this.connectN = connectN;
        this.targetScore = targetScore;

        this.players = [
            new Player('Player 1', GridPosition.YELLOW), new Player('Player 2', GridPosition.RED)
        ]

        this.score = {};

        for (let player of this.players) {
            this.score[player.getName()] = 0;
        }
    }

    printBoard() {
        console.log('Board: \n');

        let grid = this.grid.getGrid();


        // TODO: Continue with the board
    }

}