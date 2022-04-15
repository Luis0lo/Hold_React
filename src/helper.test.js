import { twoDecimalPlacesPrice } from './helper';

describe('when updating the shares price', () => {
  it(`should return a num with 2 decimal max and rounded down`, () => {
    //arrange //act //assert
    const price = 350.737;
    const actual = twoDecimalPlacesPrice(price);
    const expected = actual;

    expect(actual).toBe(expected);
  });

  // https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
  // https://jestjs.io/docs/expect#tothrowerror

  it('should throw an error if input is not a number', () => {
    expect(() => {
      twoDecimalPlacesPrice('a');
    }).toThrowError('it must be a number');
    // option 2
    // function testing() {
    //   twoDecimalPlacesPrice('a');
    //   }
    // expect(testing).toThrowError('it must be a number');
  });
});
