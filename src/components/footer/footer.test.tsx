import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { Footer } from './footer';

describe('Given Footer Component', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <Footer />
          </Provider>
        </Router>
      );
    });

    test('Then it should be in the document', async () => {
      const footerP = screen.getByText('CONÓCENOS');
      expect(footerP).toBeInTheDocument();
    });
  });
});
