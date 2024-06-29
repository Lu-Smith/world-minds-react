import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Header from '../components/Header';

describe('renders Header components correctly', () => {
    it('renders without crashing', () => {
      render(<Header />);
      
      const logoContainer = screen.getByRole('logoContainer');
      expect(logoContainer).toBeVisible();

      const logoElement = screen.getByTestId('logo');
      expect(logoElement).toBeVisible();

    });
});