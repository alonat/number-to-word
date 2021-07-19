import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { createFetchMock } from '../../__mock__/fetch';

describe('Search Component', () => {
  describe('initial render', () => {
    it('should render component', () => {
      render(<App />);

      expect(screen.getByTestId('form-component')).toBeTruthy();
      expect(screen.getByTestId('no-search')).toBeTruthy();
    });
  });

  describe('empty search', () => {
    it('should render form with empty list', () => {
      render(<App />);

      fireEvent.change(screen.getByTestId('query'), { target: { value: '222' } });
      expect(screen.getByTestId('form-component')).toBeTruthy();
      expect(screen.getByTestId('empty-search')).toBeTruthy();
    });
  });

  describe('with search result', () => {
    const searchResults = [
      { word: 'cat', id: '1' },
      { word: 'dog', id: '2' },
      { word: 'animal', id: '3' },
    ];
    beforeAll(() => {
      global.fetch = createFetchMock(searchResults);
    });

    it('should render form with list of elements', async () => {
      render(<App />);

      fireEvent.change(screen.getByTestId('query'), { target: { value: '222' } });
      expect(screen.getByTestId('form-component')).toBeTruthy();
      expect(screen.findAllByTestId('list-item')).toBeTruthy();
      searchResults.forEach(({ word }) => {
        expect(screen.findByText(word)).toBeTruthy();
      });
    });
  });
});
