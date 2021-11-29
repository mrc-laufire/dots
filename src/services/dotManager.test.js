import dotManager from './dotManager';
import { rndBetween } from '@laufire/utils/random';
import config from '../core/config';

test('dotManager', () => {
	const { getDots } = dotManager;
	const { screenEndPos, screenStartPos } = config;

	const result = getDots({
		config: config,
		data: {
			xPos: rndBetween(screenStartPos, screenEndPos),
			yPos: rndBetween(screenStartPos, screenEndPos),
			color: 'red',
		},
	});

	// eslint-disable-next-line no-console
	console.log(result);

	expect(result);
});
