/**
 * Wraps the passed function into a promise
 */
export const toPromise = <T = any> (
  binding: any,
  fn: (...args: any[]) => void,
  args?: any[]
) => {
  return new Promise((resolve, reject) => {
    const safeArgs = args || [];
    fn.bind(binding)(...safeArgs, (err: Error | null, ...results: T[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

/**
 * Waits the given amount of milliseconds
 * @return promise
 */
export const wait = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time));

export const combineFlags = (flags: number[]) : number =>
  flags.reduce((memo, flag) => memo | flag, 0);
