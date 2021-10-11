import * as random from '@laufire/utils/random';
import RectangleManager from './rectangleManager';
import config from '../core/config';

describe('RectangleManager', () => {
	const {
		setRectangle,
		createRectangle,
		detectCollision,
		isOverLapping,
	} = RectangleManager;
	const returnValue = Symbol('returnValue');

	test('createRectangle', () => {
		const { idLength, width, height } = config;
		const id = Symbol('id');
		const x = Symbol('x');
		const y = Symbol('y');
		const state = {
			position: { x, y },
		};
		const expected = {
			id,
			x,
			y,
			width,
			height,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = createRectangle(state, config);

		expect(random.rndString).toHaveBeenCalledWith(idLength);
		expect(result).toMatchObject(expected);
	});

	test('setRectangle', () => {
		jest.spyOn(RectangleManager, 'createRectangle')
			.mockReturnValue(returnValue);
		const rectangle = Symbol('rectangle');
		const state = {
			rectangles: [{ rectangle }],
		};
		const result = setRectangle({ state, config });

		expect(result).toEqual([...state.rectangles, returnValue]);
		expect(RectangleManager.createRectangle)
			.toHaveBeenCalledWith(state, config);
	});

	test('detectCollision', () => {
		jest.spyOn(RectangleManager, 'isOverLapping')
			.mockReturnValue(returnValue);

		const rectangles = Symbol('rectangles');
		const state = { rectangles };
		const data = Symbol('data');
		const context = { state, data };

		const result = detectCollision(context);

		expect(result).toEqual(returnValue);
		expect(RectangleManager.isOverLapping)
			.toHaveBeenCalledWith(state.rectangles, data);
	});

	test('isOverLapping', () => {
		const recOne = Symbol('recOne');
		const recTwo = Symbol('recTwo');

		const result = isOverLapping(recOne, recTwo);

		expect(result).toEqual(false);
	});
});
