/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';
import helpers from './helpers';

const dotManager = {
	getDots: (context) => {
		const { config, data } = context;
		const { xPos, yPos, color } = data;
		const { radius: configRadius, count, variance } = config;
		const { getVariance } = helpers;
		const counts = range(1, count * getVariance(variance.count));
		const radius = configRadius * getVariance(variance.radius);

		const dots = counts.map(() => {
			const angle = rndBetween(0, 359) * Math.PI / 180;
			const distance = rndBetween(0, radius);

			return {
				x: xPos + (distance * Math.sin(angle)),
				y: yPos + (distance * Math.cos(angle)),
				color: color,
			};
		});

		return dots;
	},
};

export default dotManager;
