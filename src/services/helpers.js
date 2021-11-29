import { rndBetween } from '@laufire/utils/random';

const hundred = 100;

const helpers = {
	getVariance: (variance) => rndBetween(hundred - (variance * hundred),
		hundred + (variance * hundred) + 1) / hundred,
};

export default helpers;
