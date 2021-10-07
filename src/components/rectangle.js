import { React } from 'react';

const Rectangle = (context) => {
	const { data: { id, x, y, width, height }} = context;

	const getStyle = {
		left: `${ y }%`,
		top: `${ x }%`,
		width: `${ width }%`,
		height: `${ height }%`,
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
