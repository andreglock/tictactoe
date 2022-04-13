import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import TicTacToeApp from './TicTacToeApp';

ReactDOM.render(
	<Provider store={store}>
		<TicTacToeApp />
	</Provider>,
  	document.getElementById('root')
);
