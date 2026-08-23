import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import TicTacToeApp from './TicTacToeApp';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<TicTacToeApp />
	</Provider>
);
