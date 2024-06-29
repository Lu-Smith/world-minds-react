import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import App from '../App';

describe('renders App components correctly', () => {
    it('renders without crashing', () => {
      render(<App />);

      const headerComponent = screen.getByRole('headerContainer');
      expect(headerComponent).toBeInTheDocument();
      
      const bannerComponent = screen.getByRole('bannerContainer');
      expect(bannerComponent).toBeInTheDocument();
  
      const mainComponent = screen.getByRole('mainContainer');
      expect(mainComponent).toBeInTheDocument();
  
      const footerComponent = screen.getByRole('footerContainer');
      expect(footerComponent).toBeInTheDocument();
    });
});