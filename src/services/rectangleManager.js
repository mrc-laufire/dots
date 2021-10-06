import { rndBetween, rndString } from '@laufire/utils/random';

const RectangleManager = {
	createRectangle: (config) => ({
		id: rndString(config.idLength),
		x: rndBetween(),
		y: rndBetween(),
		width: config.width,
		height: config.height,
	}),
	setRectangle: ({ state, config }) => [...state.rectangle, RectangleManager
		.createRectangle(config)],
};

export default RectangleManager;
