import { createGetRequest, getUrlWithParams } from './helpers';

export const getWordsListByHash = (hash: string) => createGetRequest(getUrlWithParams('search', { hash }));
