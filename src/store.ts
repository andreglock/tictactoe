import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BoardReducer } from './features/board';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  	board: BoardReducer
});

const store = createStore(
	rootReducer,
	/* preloadedState, */ devToolsEnhancer({})
);

export default store;
