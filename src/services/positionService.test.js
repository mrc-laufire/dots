import * as random from '@laufire/utils/random';
import PositionService from './positionService';

describe('PositionService', () => {
	const {
		getRandomPosition,
		getRectanglePoint,
	} = PositionService;

	test('getRandomPosition return position', () => {
		const two = 2;
		const hundred = 100;
		const returnValue = random.rndBetween(two, hundred);
		const data = random.rndBetween(two, hundred);
		const min = data / two;
		const max = hundred - (data / two);
		const expectedResult = returnValue - (data / two);

		jest.spyOn(random, 'rndBetween').mockReturnValue(returnValue);

		const result = getRandomPosition(data);

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(expectedResult);
	});

	test('getRectanglePoint', () => {
		const x = random.rndBetween();
		const y = random.rndBetween();
		const width = random.rndBetween();
		const height = random.rndBetween();
		const rectangle = { x, y, width, height };
		const expected = {
			tl: {
				x: rectangle.x,
				y: rectangle.y,
			},
			tr: {
				x: rectangle.x + rectangle.width,
				y: rectangle.y,
			},
			bl: {
				x: rectangle.x,
				y: rectangle.y + rectangle.height,
			},
			br: {
				x: rectangle.x + rectangle.width,
				y: rectangle.y + rectangle.height,
			},
		};

		const result = getRectanglePoint(rectangle);

		expect(result).toMatchObject(expected);
	});
});
