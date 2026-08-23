import { combineReducers, createStore } from 'redux';
import { BoardReducer } from './features/board';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  	board: BoardReducer
});

const store = createStore(
	rootReducer,
	undefined,
);

export default store;
