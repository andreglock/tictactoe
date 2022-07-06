import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actionTypes } from './features/board'
import { findPossibleMoves, findWinner } from './features/board/ticTacToe';

export default function TicTacToeApp () {
    const board = useSelector(selectors.getCurrentBoard);
    const dispatch = useDispatch();
    const [ showOverlay, setShowOverlay ] = useState(true);
    const [ showMessage, setShowMessage ] = useState(false);
    const [ message, setMessage ] = useState("");

    useEffect(() => {
        const winner = findWinner(board);
        if (winner !== null) {
            setMessage(`${winner.toUpperCase()} wins!`);
            setShowMessage(!showMessage);
        } else if (findPossibleMoves(board).length === 0) {
            setMessage(`Game over: tie!`);
            setShowMessage(!showMessage);
        }
    }, [board]);

    return <div id="tictactoe-container">
        {showOverlay &&
            /* Could be in another component */
            <div className="tictactoe-overlay">
                <div className="overlay-content">
                    <div className="text-container">
                        The AI plays perfectly, the best you can do is tie the game.
                    </div>
                    <div className="button-container">
                        <button onClick={() => {
                            dispatch({ type: actionTypes.RESET });
                            setShowOverlay(!showOverlay)
                            }
                        }>
                            Play as X
                        </button>
                        <button onClick={() => {
                                dispatch({ type: actionTypes.RESET });
                                dispatch({ type: actionTypes.INIT });
                                setShowOverlay(!showOverlay);
                            }
                        }>
                            Play as O
                        </button>
                    </div>
                </div>
            </div>
        }
        {showMessage &&
            <div className="tictactoe-overlay">
                <div className="overlay-content message"
                    onClick={() => {
                        setShowMessage(!showMessage);
                        setShowOverlay(!showOverlay);
                    }}
                >
                    <div>{message}</div>
                    <div>Play again?</div>
                </div>
            </div>
        }
        <div id="board-container">
            <div className={board[0]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_ONE });
                }}
            ></div>
            <div className={board[1]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_TWO });
                }}
            ></div>
            <div className={board[2]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_THREE });
                }}
            ></div>
            <div className={board[3]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_FOUR });
                }}
            ></div>
            <div className={board[4]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_FIVE });
                }}
            ></div>
            <div className={board[5]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_SIX });
                }}
            ></div>
            <div className={board[6]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_SEVEN });
                }}
            ></div>
            <div className={board[7]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_EIGHT });
                }}
            ></div>
            <div className={board[8]} onClick={() => {
                    dispatch({ type: actionTypes.CLICK_NINE });
                }}
            ></div>
        </div>
    </div>
}