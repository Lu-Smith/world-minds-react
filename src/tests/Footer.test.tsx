import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Footer from '../components/Footer';

describe('renders Footer components correctly', () => {
    it('renders without crashing', () => {
      render(<Footer />);
      
      const portfolioLink = screen.getByRole('portfolio');
      expect(portfolioLink).toBeVisible();

      const gitHubLink = screen.getByRole('GitHub');
      expect(gitHubLink).toBeVisible();

    });
});