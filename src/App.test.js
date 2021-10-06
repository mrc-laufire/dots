import { render, fireEvent } from '@testing-library/react';
import { React } from 'react';
import App from './App';
import * as Rectangle from './components/rectangle';

describe('App', () => {
	const state = {
		rectangle: [],
	};
	const actions = {
		setRectangle: jest.fn(),
	};

	test('renders rectangle', () => {
		const returnValue = <div role="rectangle"/>;

		jest.spyOn(Rectangle, 'default').mockReturnValue(returnValue);
		jest.spyOn(state.rectangle, 'map').mockReturnValue(returnValue);

		const { getByRole } = render(App({ state, actions }));
		const component = getByRole('App');

		expect(component).toBeInTheDocument();
		expect(getByRole('rectangle')).toBeInTheDocument();
		expect(state.rectangle.map).toHaveBeenCalledWith(Rectangle.default);
	});
	test('onClick fireEvent', () => {
		jest.spyOn(actions, 'setRectangle').mockReturnValue();

		const component = render(App({ state, actions })).getByRole('App');

		fireEvent.click(component);

		expect(actions.setRectangle).toHaveBeenCalledWith();
	});
});
