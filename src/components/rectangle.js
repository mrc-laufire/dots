import { React } from 'react';

const Rectangle = (data) => {
	const { id, x, y, width, height } = data;

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
