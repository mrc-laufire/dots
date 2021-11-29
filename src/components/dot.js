import { rndString } from '@laufire/utils/random';
import { React } from 'react';

const Dot = (context) => {
	const { data: { x, y, color }} = context;
	const getStyle = {
		left: `${ x }vw`,
		bottom: `${ y }vw`,
		background: color,
	};

	return (
		<div
			key={ rndString() }
			role="dot"
			style={ getStyle }
			className="dot"
		/>
	);
};

export default Dot;
