export const createFetchMock = (result: any) => jest.fn(() => Promise
  .resolve({ json: () => Promise.resolve(result) })) as jest.Mock;
