import { SystemState } from './types';

export const getCurrentBoard = (state: SystemState) => state.board.value;
export const getMode = (state: SystemState) => state.board.mode;