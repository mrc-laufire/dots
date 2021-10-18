import { find } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';
import PositionService from './positionService';

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

	detectCollision: ({ state, data }) =>
		state.rectangles.filter((rectangle) => rectangle.id !== data.id)
			.find((rectangle) => RectangleManager
				.isOverLapping(rectangle, data)),

	isOverLapping: (rectangle, data) =>
		find(PositionService.getRectanglePoint(rectangle), (point) =>
			RectangleManager.isPointInRect(point, PositionService
				.getRectanglePoint(data))) !== undefined,

	isPointInRect: (point, { tl, br }) =>
		point.x >= tl.x
		&& point.x <= br.x
		&& point.y <= br.y
		&& point.y >= tl.y,
};

export default RectangleManager;
