/* eslint-disable no-magic-numbers */
import { rndString } from '@laufire/utils/random';
import { React } from 'react';

const Dot = (context) => {
	const { data: { x, y, color }, config: { size }} = context;
	const getStyle = {
		left: `${ x - (size / 2) }%`,
		bottom: `${ y - (size / 2) }%`,
		background: color,
		height: `${ size }%`,
		width: `${ size }%`,
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
