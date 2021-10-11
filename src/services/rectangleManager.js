
import { rndString } from '@laufire/utils/random';

const RectangleManager = {
	createRectangle: (state, config) => ({
		id: rndString(config.idLength),
		x: state.position.x,
		y: state.position.y,
		width: config.width,
		height: config.height,
	}),

	setRectangle: ({ state, config }) => [...state.rectangles, RectangleManager
		.createRectangle(state, config)],

	detectCollision: (context, object) =>
		RectangleManager.isOverLapping(context, object),

	// eslint-disable-next-line no-unused-vars
	isOverLapping: (recOne, recTwo) => false,
};

export default RectangleManager;
