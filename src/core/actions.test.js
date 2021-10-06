import RectangleManager from '../services/rectangleManager';
import actions from './actions';
import context from './context';

describe('actions', () => {
	const returnValue = Symbol('returnValue');

	test('setRectangle', () => {
		jest.spyOn(RectangleManager, 'setRectangle')
			.mockReturnValue(returnValue);

		const result = actions.setRectangle(context);

		expect(result).toMatchObject({ rectangle: returnValue });
		expect(RectangleManager.setRectangle).toHaveBeenCalledWith(context);
	});
});
