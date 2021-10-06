import { rndString } from '@laufire/utils/random';
import PositionService from './positionService';

const RectangleManager = {
	createRectangle: (config) => ({
		id: rndString(config.idLength),
		x: PositionService.getRandomPosition(config.width),
		y: PositionService.getRandomPosition(config.height),
		width: config.width,
		height: config.height,
	}),

	setRectangle: ({ state, config }) => [...state.rectangle, RectangleManager
		.createRectangle(config)],

	detectCollision: (context, object) =>
		RectangleManager.isOverLapping(context, object),

	// eslint-disable-next-line no-unused-vars
	isOverLapping: (recOne, recTwo) => false,
};

export default RectangleManager;
