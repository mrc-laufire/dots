import * as random from '@laufire/utils/random';
import RectangleManager from './rectangleManager';
import config from '../core/config';
import PositionService from './positionService';

describe('RectangleManager', () => {
	const {
		setRectangle,
		createRectangle,
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
			rectangle: [{ rectangle }],
		};
		const result = setRectangle({ state, config });

		expect(result).toEqual([...state.rectangle, returnValue]);
		expect(RectangleManager.createRectangle).toHaveBeenCalledWith(config);
	});
});
