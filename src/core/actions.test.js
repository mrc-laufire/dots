/* eslint-disable id-match */

import { rndBetween } from '@laufire/utils/random';
import RectangleManager from '../services/rectangleManager';
import actions from './actions';
import context from './context';

describe('actions', () => {
	const returnValue = Symbol('returnValue');

	test('setRectangle', () => {
		jest.spyOn(RectangleManager, 'setRectangle')
			.mockReturnValue(returnValue);

		const result = actions.setRectangle(context);

		expect(result).toMatchObject({ rectangles: returnValue });
		expect(RectangleManager.setRectangle).toHaveBeenCalledWith(context);
	});

	test('setPosition', () => {
		const clientX = rndBetween();
		const clientY = rndBetween();

		const data = {
			clientX,
			clientY,
		};
		const result = actions.setPosition({ data });

		expect(result).toMatchObject({
			position: {
				x: data.clientX,
				y: data.clientY,
			},
		});
	});
});
