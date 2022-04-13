function player(board: string[]) {
    let empties = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'empty') {
            empties++
        }
    }
    if (empties % 2 === 1) {
        return 'x';
    } else {
        return 'o';
    }
}

export function findWinner(board: string[]) {
    if (board[0] !== 'empty') {
        if (
            (board[0] === board[1] && board[0] === board[2]) || 
            (board[0] === board[3] && board[0] === board[6]) ||
            (board[0] === board[4] && board[0] === board[8])
        ) return board[0];
    }
    if (board[1] !== 'empty') {
        if (
            board[1] === board[4] && board[1] === board[7]
        ) return board[1];
    }
    if (board[2] !== 'empty') {
        if (
            (board[2] === board[5] && board[2] === board[8]) || 
            (board[2] === board[4] && board[2] === board[6])
        ) return board[2];
    }
    if (board[3] !== 'empty') {
        if (
            board[3] === board[4] && board[3] === board[5]
        ) return board[3];
    }
    if (board[6] !== 'empty') {
        if (
            board[6] === board[7] && board[6] === board[8]
        ) return board[6];
    }
    return null;
}

export function findPossibleMoves(board: string[]) {
    const moves = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'empty') {
            moves.push(i);
        }
    }
    return moves;
}

export function utility(board: string[]) {
    if (findWinner(board) === 'x') {
        return 1;
    }
    else if (findWinner(board) === 'o') {
        return -1;
    }
    else {
        return 0;
    }
}

export function makeFirstMove(value: string[]) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== "empty") {
            return null;
        }
    }
    const board = [...value]
    const randomIndex = Math.floor(Math.random() * board.length);
    board.splice(randomIndex, 1, 'x');
    return board;
}

export function result(value: string[], action: number) {
    if (value[action] !== 'empty') {
        return value;
    }
    const board = [...value];
    const playerToPlay = player(board);
    board.splice(action, 1, playerToPlay);
    return board;
}

export function minimax(gameBoard: string[]) {
    
    function findValue(board: string[]) {
        const winner = utility(board);
        if (winner !== 0) {
            return winner;
        }
        const possibleMoves = findPossibleMoves(board);
        if (possibleMoves.length === 1) {
            return utility(result(board, possibleMoves[0]))
        }
        const playerToPlay = player(board);
        let best: number;
        if (playerToPlay === 'x') {
            best = -2;
            for (const action of possibleMoves) {
                best = Math.max(best, findValue(result(board, action)));
            }
        } else {
            best = 2;
            for (const action of possibleMoves) {
                best = Math.min(best, findValue(result(board, action)));
            } 
        }
        return best;
    }

    function findBest(board: string[]) {
        const playerToPlay = player(board);
        let best: number;
        if (playerToPlay === 'x') {
            best = -2;
        } else {
            best = 2;
        }
        let bestAction = -1;
        const possibleActions = findPossibleMoves(board);
        for (const action of possibleActions) {
            const actionValue = findValue(result(board, action));
            if (playerToPlay === 'x' && best < actionValue) {
                best = actionValue;
                bestAction = action;
            }
            if (playerToPlay === 'o' && best > actionValue) {
                best = actionValue;
                bestAction = action;
            }
        }
        return bestAction;
    }

    const bestMove = findBest(gameBoard)

    return result(gameBoard, bestMove);
}