import { render, fireEvent } from '@testing-library/react';
import { React } from 'react';
import App from './App';
import * as Rectangle from './components/rectangle';
import { range } from '@laufire/utils/collection';

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

	test('onClick fireEvent', () => {
		jest.spyOn(context.actions, 'setRectangle').mockReturnValue();

		const component = render(App(context)).getByRole('App');

		fireEvent.click(component);

		expect(context.actions.setRectangle).toHaveBeenCalledWith();
	});
});
