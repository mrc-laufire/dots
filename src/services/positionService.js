import { rndBetween } from '@laufire/utils/random';

const two = 2;
const hundred = 100;

const PositionService = {
	getRandomPosition: (data) =>
		rndBetween(data / two, hundred - (data / two)) - (data / two),

	getRectanglePoint: (rectangle) => ({
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
	}),
};

export default PositionService;
