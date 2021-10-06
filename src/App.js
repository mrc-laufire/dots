import { React } from 'react';
import './App.scss';

const App = ({ config, actions }) =>
	<div
		role="App"
		className="App"
		onClick={ () => actions.setRectangle() }
	>{ config.message }</div>;

export default App;
