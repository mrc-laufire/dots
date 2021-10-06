import { rndBetween } from '@laufire/utils/random';

const two = 2;
const hundred = 100;

const PositionService = {
	getRandomPosition: (data) =>
		rndBetween(data / two, hundred - (data / two)) - (data / two),
};

export default PositionService;
