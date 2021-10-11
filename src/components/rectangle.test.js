import { render } from '@testing-library/react';
import config from '../core/config';
import seed from '../core/seed';
import RectangleManager from '../services/rectangleManager';
import Rectangle from './rectangle';

describe('Rectangle', () => {
	const data = RectangleManager.createRectangle(seed, config);
	const context = {
		data,
	};

	test('Rectangle render', () => {
		const component = render(Rectangle(context)).getByRole('rectangle');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('rectangle');
		expect(component).toHaveStyle({
			left: `${ data.x }px`,
			top: `${ data.y }px`,
			width: `${ data.width }vw`,
			height: `${ data.height }vw`,
		});
	});

	describe('background color', () => {
		const expectations = [
			[true, 'green'],
			[false, 'red'],
		];

		test.each(expectations)('isCollided is %p background color is %p',
			(hasCollided, color) => {
				jest.spyOn(RectangleManager, 'detectCollision')
					.mockReturnValue(hasCollided);
				const component = render(Rectangle(context))
					.getByRole('rectangle');

				expect(component).toHaveStyle({
					background: color,
				});
			});
	});
});
