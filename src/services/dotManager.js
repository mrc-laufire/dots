/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';

const dotManager = {
	getDots: (context) => {
		const { config, data } = context;
		const { xPos, yPos, color } = data;
		const { radius, minCount, maxCount } = config;
		const count = range(1, rndBetween(minCount, maxCount));

		const dots = count.map(() => ({
			x: rndBetween(xPos - radius, xPos + radius),
			y: rndBetween(yPos - radius, yPos + radius),
			color: color,
		}));

		return dots;
	},
};

export default dotManager;
