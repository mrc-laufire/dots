import { React } from 'react';
import './App.scss';
import Dot from './components/dot';

const App = (context) => {
	const { state } = context;

	return (
		<div
			role="App"
			className="App"
		>
			{ state.dots.map((data) => Dot({ ...context, data })) }
		</div>
	);
};

export default App;
