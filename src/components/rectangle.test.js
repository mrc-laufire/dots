import { render } from '@testing-library/react';
import config from '../core/config';
import RectangleManager from '../services/rectangleManager';
import Rectangle from './rectangle';

describe('Rectangle', () => {
	const data = RectangleManager.createRectangle(config);

	test('Rectangle render', () => {
		const component = render(Rectangle(data)).getByRole('rectangle');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('rectangle');
		expect(component).toHaveStyle({
			left: `${ data.y }%`,
			top: `${ data.x }%`,
			width: `${ data.width }%`,
			height: `${ data.height }%`,
		});
	});
});
