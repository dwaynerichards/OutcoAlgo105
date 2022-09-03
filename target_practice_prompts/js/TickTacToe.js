var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.wins = 0;
        this.ties = 0;
    }
    return Player;
}());
var TTT = /** @class */ (function () {
    function TTT(rounds, _player1, _player2) {
        this.rounds = rounds;
        //YOUR WORK HERE
        this.player1 = new Player(_player1);
        this.player2 = new Player(_player2);
        this.player1.symbol = 'O';
        this.player2.symbol = 'X';
    }
    TTT.prototype.runGame = function () {
        if (this.rounds === 0) {
            var _a = this, player1 = _a.player1, player2 = _a.player2, declareWinner = _a.declareWinner, declareTie = _a.declareTie;
            player1.wins === player2.wins
                ? declareTie()
                : player1.wins > player2.wins
                    ? declareWinner(player1)
                    : declareWinner(player1);
        }
        else {
            this.board = new TTTBoard();
            this.turn = this.player1;
            this._decrementRounds();
            this.printCurrentBoard();
            this._printCurrentPlayersTurn();
        }
    };
    TTT.prototype.playRound = function (row, col) {
        //invoke playPeice on board
        //
        ////chech if valid move- place move- print move- switch player turns
        this.board.canPlacePiece(row, col)
            ? this._playRound(row, col)
            : this.printInvalidMove();
    };
    TTT.prototype._playRound = function (row, col) {
        this.board.placePiece(row, col, this.turn);
        this.printCurrentBoard();
        this.board.moves > 2 && this.board.checkWinCondtion(this.turn)
            ? this.declareWinner(this.turn)
            : this.switchPlayer();
    };
    TTT.prototype._printCurrentPlayersTurn = function () {
        process.stdout.write("It's ".concat(this.turn.name, "'s turn"));
        //YOUR WORK HERE
    };
    TTT.prototype._decrementRounds = function () {
        this.rounds--;
    };
    TTT.prototype.declareWinner = function (player) {
        //@TODO print winner
        process.stdout.write("".concat(player.name, " has won the game"));
        player.wins++;
        //YOUR WORK HERE
        this.runGame();
    };
    TTT.prototype.declareTie = function () {
        process.stdout.write("No Player is victorious, there has been a tie");
    };
    TTT.prototype.printInvalidMove = function () {
        process.stdout.write("Invalid move- That spot is taken");
    };
    TTT.prototype.printCurrentBoard = function () {
        this.board.printBoard();
    };
    TTT.prototype.switchPlayer = function () {
        var _a = this, _switchPlayer = _a._switchPlayer, _printCurrentPlayersTurn = _a._printCurrentPlayersTurn;
        _switchPlayer();
        _printCurrentPlayersTurn();
    };
    TTT.prototype._switchPlayer = function () {
        var _a = this, player1 = _a.player1, player2 = _a.player2, turn = _a.turn;
        turn === player1 ? (this.turn = player2) : (this.turn = player1);
    };
    return TTT;
}());
var TTTBoard = /** @class */ (function () {
    function TTTBoard() {
        this.storage = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        this.moves = 0;
    }
    TTTBoard.prototype.printBoard = function () {
        process.stdout.write('  0 1 2\n');
        process.stdout.write('  _ _ _\n');
        this.storage.forEach(function (line, row) {
            process.stdout.write("".concat(row));
            line.forEach(function (square) {
                process.stdout.write("|".concat(square));
            });
            process.stdout.write('|');
            process.stdout.write('\n');
            process.stdout.write('  - - -\n');
        });
        process.stdout.write('\n');
    };
    TTTBoard.prototype.canPlacePiece = function (row, col) {
        var location = this.storage[row][col];
        if (location === '')
            return true;
        return false;
    };
    TTTBoard.prototype.placePiece = function (row, col, player) {
        this.storage[row][col] = player.symbol;
        this.moves++;
        //mark place on board
    };
    TTTBoard.prototype.checkWinCondtion = function (player) {
        if (this.checkColumns(player) ||
            this.checkDiagonals(player) ||
            this.checkRows(player))
            return true;
        return false;
    };
    TTTBoard.prototype.checkDiagonals = function (player) {
        //YOUR WORK HERE
        var storage = this.storage;
        var middle = storage[1][1];
        if (middle === player.symbol) {
            if (storage[0][0] === middle && storage[2][2] === middle)
                return true;
            if (storage[0][2] === middle && storage[2][0] === middle)
                return true;
        }
        return false;
    };
    TTTBoard.prototype.checkRows = function (player) {
        //YOUR WORK HERE
        for (var _i = 0, _a = this.storage; _i < _a.length; _i++) {
            var arr = _a[_i];
            var set = new Set(arr);
            if (set.has(player.symbol) && set.size === 1)
                return true;
        }
        return false;
    };
    TTTBoard.prototype.checkColumns = function (player) {
        //assemble comumns as indices of each arr
        //copy storage/ deconstruct
        var storage = this.storage;
        var prev = storage[0].length;
        var count = 0;
        ///step though matrix until all items are removed/checked or we have counted 3 consecutive player symbols
        while (storage[2].length > 0 && count < 3) {
            ///if one column has been removed, reset count, change
            storage.forEach(function (row) {
                if (row.length < prev) {
                    count = 0;
                    prev = row.length;
                }
                var current = row.pop();
                if (current === player.symbol)
                    count++;
            });
            if (count === 3)
                return true;
        }
        return false;
    };
    return TTTBoard;
}());
var game = new TTT(9, 'dwayne', 'naima');
game.runGame();
