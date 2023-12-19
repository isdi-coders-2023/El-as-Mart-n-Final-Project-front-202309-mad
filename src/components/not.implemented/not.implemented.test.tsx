import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { NotImplemented } from './not.implemented';

describe('Given Not Implemented Component', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <NotImplemented />
          </Provider>
        </Router>
      );
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByText(/Disculpen las molestias/i);
      expect(element).toBeInTheDocument();
    });
  });
});
