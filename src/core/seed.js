import { rndBetween } from '@laufire/utils/random';
import dotManager from '../services/dotManager';
import config from './config';

const { screenStartPos, screenEndPos } = config;
const { getDots } = dotManager;

const seed = {
	rectangles: [],
	position: {
		x: '',
		y: '',
	},
	dots: [
		...getDots({
			config: config,
			data: {
				xPos: rndBetween(screenStartPos, screenEndPos),
				yPos: rndBetween(screenStartPos, screenEndPos),
				color: 'red',
			},
		}),
		...getDots({
			config: config,
			data: {
				xPos: rndBetween(screenStartPos, screenEndPos),
				yPos: rndBetween(screenStartPos, screenEndPos),
				color: 'green',
			},
		}),
	],
};

export default seed;
