import { React } from 'react';
import './App.scss';
import Rectangle from './components/rectangle';

const App = ({ state, actions }) =>
	<div
		role="App"
		className="App"
		onClick={ () => actions.setRectangle() }
	>
		{ state.rectangles.map(Rectangle) }
	</div>;

export default App;
