/* eslint-disable id-match */
import { range } from '@laufire/utils/collection';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders Rectangles', () => {
		const context = {
			state: {
				dots: range(),
			},
			config: {
				size: 1,
			},
		};
		const { getByRole } = render(App(context));
		const component = getByRole('App');

		expect(component).toBeInTheDocument();
	});
});
