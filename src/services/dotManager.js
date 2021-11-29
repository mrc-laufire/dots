/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';
import helpers from './helpers';

const dotManager = {
	getDots: (context) => {
		const { config, data } = context;
		const { xPos, yPos, color } = data;
		const { radius, minCount, maxCount, variance } = config;
		const { getVariance } = helpers;
		const variation = getVariance(variance);
		const count = range(minCount * variation, maxCount * variation);

		const dots = count.map(() => ({
			x: rndBetween(xPos - radius, xPos + radius),
			y: rndBetween(yPos - radius, yPos + radius),
			color: color,
		}));

		return dots;
	},
};

export default dotManager;
