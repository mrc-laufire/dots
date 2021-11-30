/* eslint-disable no-unused-vars */
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
				xPos: 90,
				yPos: 90,
				color: 'red',
			},
		}),
		...getDots({
			config: config,
			data: {
				xPos: 10,
				yPos: 10,
				color: 'green',
			},
		}),
	],
};

export default seed;
