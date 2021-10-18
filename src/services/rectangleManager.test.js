import * as random from '@laufire/utils/random';
import RectangleManager from './rectangleManager';
import config from '../core/config';
import PositionService from './positionService';

describe('RectangleManager', () => {
	const {
		setRectangle,
		createRectangle,
		detectCollision,
		isOverLapping,
		isPointInRect,
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

	describe('detectCollision', () => {
		const rectangle = { id: Symbol('rectangles') };
		const data = { id: Symbol('data') };
		const rectangles = [rectangle, data];
		const state = { rectangles };
		const context = { state, data };
		const expectations = [
			[undefined, undefined],
			[returnValue, rectangle],
		];

		test.each(expectations)('detectCollision',
			(overLapped, expected) => {
				jest.spyOn(RectangleManager, 'isOverLapping')
					.mockReturnValue(overLapped);

				const result = detectCollision(context);

				expect(RectangleManager.isOverLapping)
					.toHaveBeenCalledWith(rectangle, data);
				expect(result).toEqual(expected);
			});
	});

	describe('isOverLapping', () => {
		const expectations = [
			[false],
			[true],
		];

		test.each(expectations)('isOverLapping return %p', (expected) => {
			jest.spyOn(RectangleManager, 'isPointInRect')
				.mockReturnValue(expected);
			jest.spyOn(PositionService, 'getRectanglePoint')
				.mockReturnValueOnce({ returnValue })
				.mockReturnValueOnce(returnValue);

			const rectangle = { recOne: Symbol('recOne') };
			const data = Symbol('data');

			const result = isOverLapping(rectangle, data);

			expect(result).toEqual(expected);
		});
	});

	describe('isPointInRect', () => {
		const x = random.rndBetween();
		const y = random.rndBetween();
		const expectations = [
			[true, { x, y }],
			[false, { x: random.rndBetween(), y: random.rndBetween() }],
		];

		test.each(expectations)('isPointInRect return %p',
			(expected, point) => {
				const tl = { x, y };
				const br = { x, y };
				const result = isPointInRect(point, { tl, br });

				expect(result).toEqual(expected);
			});
	});
});
