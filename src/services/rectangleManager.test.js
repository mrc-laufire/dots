import * as random from '@laufire/utils/random';
import RectangleManager from './rectangleManager';
import config from '../core/config';

describe('RectangleManager', () => {
	const {
		setRectangle,
		createRectangle,
	} = RectangleManager;
	const returnValue = Symbol('returnValue');

	test('createRectangle', () => {
		const id = Symbol('id');
		const x = Symbol('x');
		const y = Symbol('y');
		const expected = {
			id: id,
			x: x,
			y: y,
			width: config.width,
			height: config.height,
		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);
		jest.spyOn(random, 'rndBetween').mockReturnValueOnce(x)
			.mockReturnValueOnce(y);

		const result = createRectangle(config);

		expect(random.rndString).toHaveBeenCalledWith(config.idLength);
		expect(random.rndBetween).toHaveBeenCalledWith();
		expect(random.rndBetween).toHaveBeenCalledWith();
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
