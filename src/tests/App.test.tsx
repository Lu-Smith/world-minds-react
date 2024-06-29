import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import App from '../App';

describe('renders App components correctly', () => {
    it('renders without crashing', () => {
      render(<App />);
      
      const headerComponent = screen.getByRole('bannerContainer');
      expect(headerComponent).toBeInTheDocument();
  
      const mainComponent = screen.getByRole('mainContainer');
      expect(mainComponent).toBeInTheDocument();
  
      const footerComponent = screen.getByRole('footerContainer');
      expect(footerComponent).toBeInTheDocument();
    });
});