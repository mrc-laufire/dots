import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
import context from './core/context';

describe('App', () => {
	test('renders with a welcome message', () => {
		render(App(context));
		const someText = screen.getByText(context.config.message);

		expect(someText).toBeInTheDocument();
	});

	test('onClick fireEvent', () => {
		jest.spyOn(context.actions, 'setRectangle').mockReturnValue();

		const component = render(App(context)).getByRole('App');

		fireEvent.click(component);

		expect(context.actions.setRectangle).toHaveBeenCalledWith();
	});
});
