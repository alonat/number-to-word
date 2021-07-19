import { mocked } from 'ts-jest/utils';
import { getUrlWithParams, createGetRequest, createRequest } from '../helpers';
import { createFetchMock } from '../../__mock__/fetch';

global.fetch = createFetchMock([]);

const baseUrl = 'http://localhost:3002';

describe('Api helpers', () => {
  const checkRequestMethodAndLink = (method: string, link: string) => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(mocked(fetch).mock.calls[0][0]).toBe(`${baseUrl}/${link}`);
    expect(mocked(fetch).mock.calls[0][1]).toHaveProperty('method');
    expect(mocked(fetch).mock.calls[0][1]?.method).toBe(method);
  };

  beforeEach(() => {
    mocked(fetch).mockClear();
  });

  describe('createGetRequest', () => {
    it('should create GET request with correct url', async () => {
      const link = 'search';
      await createGetRequest(link);
      checkRequestMethodAndLink('GET', link);
    });
  });

  describe('createRequest', () => {
    it('should create request with correct url and method POST', async () => {
      const link = 'save';
      const method = 'POST';
      await createRequest(method)(link);
      checkRequestMethodAndLink(method, link);
    });
  });

  describe('getUrlWithParams', () => {
    it('should return correct url according to passed parameters', () => {
      const params = { hash: '123', query: 'empty', param2: 'car' };
      const link = 'search';
      expect(getUrlWithParams(link, params)).toBe(`${link}?hash=${params.hash}&query=${params.query}&param2=${params.param2}`);

      const params2 = { query: 'empty', param2: 'car' };
      expect(getUrlWithParams(link, params2)).toBe(`${link}?query=${params2.query}&param2=${params2.param2}`);
    });

    it('should return same url if params empty', () => {
      const link = 'search';
      expect(getUrlWithParams(link, {})).toBe(link);
    });
  });
});
