import RectangleManager from '../services/rectangleManager';

const actions = {
	setRectangle: (context) => ({
		rectangle: RectangleManager.setRectangle(context),
	}),
};

export default actions;
