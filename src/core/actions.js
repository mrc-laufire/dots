import RectangleManager from '../services/rectangleManager';

const actions = {
	setRectangle: (context) => ({
		rectangles: RectangleManager.setRectangle(context),
	}),
};

export default actions;
