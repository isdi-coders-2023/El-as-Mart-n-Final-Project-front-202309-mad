import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AdminPanel } from './admin.panel';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given Header component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <AdminPanel></AdminPanel>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
