/* eslint-disable @typescript-eslint/default-param-last */

import {
	INIT, CLICK_ONE, CLICK_TWO, CLICK_THREE,
	CLICK_FOUR, CLICK_FIVE, CLICK_SIX,
	CLICK_SEVEN, CLICK_EIGHT, CLICK_NINE,
	BEST_MOVE, RESET, SET_MODE,
} from './actionTypes';
import { makeFirstMove, result, playMove, Mode } from './ticTacToe';

import { BoardActionTypes } from './types';

const initialState: { value: string[]; mode: Mode } = {
	value: [
		"empty", "empty", "empty",
		"empty", "empty", "empty",
		"empty", "empty", "empty"
	],
	mode: 'bad'
};

export default (state = initialState, action: BoardActionTypes) => {
	let resultingBoard: string[];
	switch (action.type) {
		case INIT:
			return { ...state, value: makeFirstMove(state.value) };
		case CLICK_ONE:
			resultingBoard = result(state.value, 0);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_TWO:
			resultingBoard = result(state.value, 1);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_THREE:
			resultingBoard = result(state.value, 2);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_FOUR:
			resultingBoard = result(state.value, 3);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_FIVE:
			resultingBoard = result(state.value, 4);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_SIX:
			resultingBoard = result(state.value, 5);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_SEVEN:
			resultingBoard = result(state.value, 6);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_EIGHT:
			resultingBoard = result(state.value, 7);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case CLICK_NINE:
			resultingBoard = result(state.value, 8);
			if (resultingBoard === state.value) {
				return state
			}
			return { ...state, value: playMove(resultingBoard, state.mode) };
		case BEST_MOVE:
			return { ...state, value: playMove(state.value, state.mode) };
		case RESET:
			return { ...state, value: initialState.value };
		case SET_MODE:
			return { ...state, mode: action.mode };
		default:
			return state;
	};
};
