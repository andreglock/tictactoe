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

export type Mode = 'good' | 'bad' | 'ugly';

// Assign a value to every action on the board:
function findValue(board: string[]): number {
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

// "The bad": always plays to win, i.e. the optimal minimax move for whoever is to play.
function findBestMove(board: string[]) {
    const playerToPlay = player(board);
    let best: number;
    if (playerToPlay === 'x') {
        best = -2;
    } else {
        best = 2;
    }
    let bestAction = -1;
    const possibleActions = findPossibleMoves(board);
    // Iterate over the actions and pick the one with the best value:
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

// "The good": always takes the worst move, i.e. the one with the lowest minimax score.
function findWorstMove(board: string[]) {
    const playerToPlay = player(board);
    let worst: number;
    if (playerToPlay === 'x') {
        worst = 2;
    } else {
        worst = -2;
    }
    let worstAction = -1;
    const possibleActions = findPossibleMoves(board);
    // Iterate over the actions and pick the one with the best value:
    for (const action of possibleActions) {
        const actionValue = findValue(result(board, action));
        if (playerToPlay === 'x' && worst > actionValue) {
            worst = actionValue;
            worstAction = action;
        }
        if (playerToPlay === 'o' && worst < actionValue) {
            worst = actionValue;
            worstAction = action;
        }
    }
    return worstAction;
}

// "The ugly": plays a uniformly random legal move.
function findRandomMove(board: string[]) {
    const possibleMoves = findPossibleMoves(board);
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

export function playMove(gameBoard: string[], mode: Mode) {
    let action: number;
    switch (mode) {
        case 'good':
            action = findWorstMove(gameBoard);
            break;
        case 'ugly':
            action = findRandomMove(gameBoard);
            break;
        case 'bad':
        default:
            action = findBestMove(gameBoard);
            break;
    }
    return result(gameBoard, action);
}