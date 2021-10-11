import RectangleManager from '../services/rectangleManager';

const actions = {
	setRectangle: (context) => ({
		rectangles: RectangleManager.setRectangle(context),
	}),

	setPosition: ({ data }) => ({
		position: {
			x: data.clientX,
			y: data.clientY,
		},
	}),
};

export default actions;
