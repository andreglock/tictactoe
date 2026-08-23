import {
	INIT, CLICK_ONE, CLICK_TWO, CLICK_THREE,
	CLICK_FOUR, CLICK_FIVE, CLICK_SIX,
	CLICK_SEVEN, CLICK_EIGHT, CLICK_NINE,
	BEST_MOVE, RESET, SET_MODE,
} from './actionTypes';
import { Mode } from './ticTacToe';

interface InitBoardAction {
	type: typeof INIT
}
interface OneBoardAction {
  	type: typeof CLICK_ONE
}
interface TwoBoardAction {
  	type: typeof CLICK_TWO
}
interface ThreeBoardAction {
  	type: typeof CLICK_THREE
}
interface FourBoardAction {
  	type: typeof CLICK_FOUR
}
interface FiveBoardAction {
  	type: typeof CLICK_FIVE
}
interface SixBoardAction {
  	type: typeof CLICK_SIX
}
interface SevenBoardAction {
  	type: typeof CLICK_SEVEN
}
interface EightBoardAction {
  	type: typeof CLICK_EIGHT
}
interface NineBoardAction {
  	type: typeof CLICK_NINE
}
interface BestMoveAction {
	type: typeof BEST_MOVE
}
interface ResetAction {
	type: typeof RESET
}
interface SetModeAction {
	type: typeof SET_MODE
	mode: Mode
}

export type BoardActionTypes =
	InitBoardAction | OneBoardAction | TwoBoardAction | ThreeBoardAction | FourBoardAction |
	FiveBoardAction | SixBoardAction | SevenBoardAction | EightBoardAction | NineBoardAction |
	BestMoveAction | ResetAction | SetModeAction;

export interface SystemState {
  	board: {
    	value: string[]
    	mode: Mode
  	}
}
