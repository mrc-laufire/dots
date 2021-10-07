import * as random from '@laufire/utils/random';
import RectangleManager from './rectangleManager';
import config from '../core/config';
import PositionService from './positionService';
import context from '../core/context';

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
		const expected = {
			id,
			x,
			y,
			width,
			height,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);
		jest.spyOn(PositionService, 'getRandomPosition').mockReturnValueOnce(x)
			.mockReturnValueOnce(y);

		const result = createRectangle(config);

		expect(random.rndString).toHaveBeenCalledWith(idLength);
		expect(PositionService.getRandomPosition).toHaveBeenCalledWith(width);
		expect(PositionService.getRandomPosition).toHaveBeenCalledWith(height);
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
		expect(RectangleManager.createRectangle).toHaveBeenCalledWith(config);
	});

	test('detectCollision', () => {
		jest.spyOn(RectangleManager, 'isOverLapping')
			.mockReturnValue(returnValue);

		const object = Symbol('object');
		const result = detectCollision(context, object);

		expect(result).toEqual(returnValue);
		expect(RectangleManager.isOverLapping)
			.toHaveBeenCalledWith(context, object);
	});

	test('isOverLapping', () => {
		const recOne = Symbol('recOne');
		const recTwo = Symbol('recTwo');

		const result = isOverLapping(recOne, recTwo);

		expect(result).toEqual(false);
	});
});
