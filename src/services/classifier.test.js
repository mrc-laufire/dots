import classifier from './classifier';
import dotManager from './dotManager';
import config from '../core/config';
import { rndBetween } from '@laufire/utils/random';

const { classify } = classifier;
const { screenStartPos, screenEndPos } = config;

test('classify', () => {
	const dots = dotManager.getDots({
		config: config,
		data: {
			xPos: rndBetween(screenStartPos, screenEndPos),
			yPos: rndBetween(screenStartPos, screenEndPos),
			color: 'red',
		},
	});
	const result = classify(dots);

	expect(result).toEqual(dots);
});
