import { React } from 'react';
import './App.scss';
import Rectangle from './components/rectangle';

const App = (context) => {
	const { state } = context;

	return (
		<div
			role="App"
			className="App"
			onMouseUp={ (evt) => {
				// eslint-disable-next-line id-match
				const { clientX, clientY } = evt;

				context.actions.setPosition({ clientX, clientY });
			} }
			onClick={ () => context.actions.setRectangle() }
		>
			{ state.rectangles.map((data) => Rectangle({ ...context, data })) }
		</div>
	);
};

export default App;
