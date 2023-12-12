import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RetroPhotos } from './retro.photos';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given RetroPhotos component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RetroPhotos></RetroPhotos>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByAltText('Fotografía retro Maradona');
      expect(element).toBeInTheDocument();
    });
  });
});
