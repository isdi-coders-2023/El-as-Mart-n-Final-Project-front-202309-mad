import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { ErrorComponent } from './error';

describe('Given Error Component', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <ErrorComponent />
          </Provider>
        </Router>
      );
    });

    test('Then it should be in the document', async () => {
      const error = screen.getByAltText('Error image');
      expect(error).toBeInTheDocument();
    });
  });
});
