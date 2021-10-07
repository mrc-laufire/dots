import { React } from 'react';
import RectangleManager from '../services/rectangleManager';

const Rectangle = (context) => {
	const { data: { id, x, y, width, height }} = context;
	const isCollided = RectangleManager.detectCollision(context);
	const color = isCollided ? 'green' : 'red';
	const getStyle = {
		left: `${ y }%`,
		top: `${ x }%`,
		width: `${ width }%`,
		height: `${ height }%`,
		background: color,
	};

	return (
		<div
			key={ id }
			role="rectangle"
			style={ getStyle }
			className="rectangle"
		/>
	);
};

export default Rectangle;
