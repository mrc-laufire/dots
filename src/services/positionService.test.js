import * as random from '@laufire/utils/random';
import PositionService from './positionService';

describe('PositionService', () => {
	const { getRandomPosition } = PositionService;

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
});
