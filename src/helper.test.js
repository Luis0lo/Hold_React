import { twoDecimalPlacesPrice, updateHoldings } from './helper';

describe('when updating the shares price', () => {
  it(`should return price with 2 decimal max and rounded down`, () => {
    //arrange //act //assert
    const price = 350.737;
    const actual = twoDecimalPlacesPrice(price);
    const expected = actual;

    expect(actual).toBe(expected);
  });

  // https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
  // https://jestjs.io/docs/expect#tothrowerror

  it('should throw an error if price is not a number', () => {
    expect(() => {
      twoDecimalPlacesPrice('a');
    }).toThrowError('it must be a number');
    // option 2
    // function testing() {
    //   twoDecimalPlacesPrice('a');
    //   }
    // expect(testing).toThrowError('it must be a number');
  });

  it('should update holdings with the correct data structure', () => {
    const holdings = [
      {
        name: 'TSLA',
        quantity: 4,
        price: 725,
        total: 2900,
        currentMarketValueTotal: 0,
        currency: 'USD',
      },
      {
        name: 'GOOGL',
        quantity: 2,
        price: 2500,
        total: 5000,
        currentMarketValueTotal: 0,
        currency: 'USD',
      },
    ]

    const data = [
      {
        name: 'TSLA',
        quantity: 2,
        price: 700,
        total: 1400,
        currentMarketValueTotal: 0,
        currency: 'USD',
      },
      {
        name: 'GOOGL',
        quantity: 2,
        price: 2500,
        total: 5000,
        currentMarketValueTotal: 0,
        currency: 'USD',
      },
    ]
    const input = {
      currency: 'USD',
      name: 'TSLA',
      price: 750,
      quantity: 2,
    };
    const index = 0;
    //act //assert
    const actual = updateHoldings(data, index, input)
    expect(actual).toEqual(holdings);
  });
});
