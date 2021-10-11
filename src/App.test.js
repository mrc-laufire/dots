/* eslint-disable id-match */
import { render, fireEvent } from '@testing-library/react';
import { React } from 'react';
import App from './App';
import * as Rectangle from './components/rectangle';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';

describe('App', () => {
	const rectangles = range().map((dummy, id) => ({
		id: id,
		data: Symbol('data'),
	}));

	const context = {
		state: {
			rectangles,
		},
		actions: {
			setRectangle: jest.fn(),
			setPosition: jest.fn(),
		},
	};

	test('renders Rectangles', () => {
		jest.spyOn(Rectangle, 'default')
			.mockImplementation(({ data: { id }}) =>
				<div key={ id } role="rectangle"/>);

		const { getByRole, getAllByRole } = render(App(context));
		const component = getByRole('App');

		expect(component).toBeInTheDocument();
		expect(getAllByRole('rectangle').length).toEqual(rectangles.length);

		context.state.rectangles.forEach((rectangle) => {
			expect(Rectangle.default)
				.toHaveBeenCalledWith({ ...context, data: rectangle });
		});
	});

	test('onClick and onMouseUp fireEvent', () => {
		jest.spyOn(context.actions, 'setRectangle').mockReturnValue();
		jest.spyOn(context.actions, 'setPosition').mockReturnValue();

		const clientX = rndBetween();
		const clientY = rndBetween();
		const component = render(App(context)).getByRole('App');

		fireEvent.click(component);
		fireEvent.mouseUp(component, { clientX, clientY });

		expect(context.actions.setPosition)
			.toHaveBeenCalledWith({ clientX, clientY });
		expect(context.actions.setRectangle).toHaveBeenCalledWith();
	});
});
