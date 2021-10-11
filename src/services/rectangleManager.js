
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

	detectCollision: (context) =>
		RectangleManager.isOverLapping(context.state.rectangles, context.data),

	// eslint-disable-next-line no-unused-vars
	isOverLapping: (rectangles, recOne) => false,
};

export default RectangleManager;
