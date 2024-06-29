import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import App from '../App';

describe('renders App components correctly', () => {
    it('renders without crashing', () => {
      render(<App />);
      
      const headerComponent = screen.getByRole('banner');
      expect(headerComponent).toBeInTheDocument();
  
      const mainComponent = screen.getByRole('main');
      expect(mainComponent).toBeInTheDocument();
  
      const footerComponent = screen.getByRole('footer');
      expect(footerComponent).toBeInTheDocument();
    });
});