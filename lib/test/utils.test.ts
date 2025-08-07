import { combineFlags, toPromise } from '../src/utils';

test('Combine flags', () => {
  expect(combineFlags([1, 2])).toBe(3);
});

test('toPromise should resolve and reject properly', async () => {
  expect.assertions(2);

  let returnError = false;

  const mockFn = (callback: (err: Error | null, result?: number) => void) => {
    if (returnError) {
      return callback(new Error('Some error'));
    }
    return callback(null, 4);
  };

  // Should resolve
  const result = await toPromise<number>({}, mockFn);
  expect(result).toBe(4);

  // Should reject
  returnError = true;

  try {
    await toPromise<number>({}, mockFn);
    expect('this line').toBe('should not be reached');
  } catch (e) {
    expect((e as Error).message).toBe('Some error');
  }
});
