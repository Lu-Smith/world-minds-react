import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import App from '../App';

describe('renders App components correctly', () => {
    it('renders without crashing', () => {
      render(<App />);
      
      const headerComponent = screen.findByRole('header');
      expect(headerComponent).toBeVisible();
  
      const mainComponent = screen.findByRole('main');
      expect(mainComponent).toBeVisible();
  
      const footerComponent = screen.findByRole('footer');
      expect(footerComponent).toBeVisible();
    });
});