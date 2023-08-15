
class Player {

    private name: any;
    private pieceColor: any;

    constructor(name: any, pieceColor: any) {
        this.name = name;
        this.pieceColor = pieceColor;
    }

    getName() {
        return this.name;
    }

    getPieceColor() {
        return this.pieceColor;
    }
}