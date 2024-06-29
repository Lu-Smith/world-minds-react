import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Banner from '../components/Banner';

describe('renders Banner components correctly', () => {
    it('renders without crashing', () => {
      render(<Banner />);
      
      const bannerImageContainer = screen.getByRole('bannerImageContainer');
      expect(bannerImageContainer).toBeVisible();

      const bannerImage = bannerImageContainer.querySelector('video');
      expect(bannerImage).toBeInTheDocument();
      expect(bannerImage).toHaveAttribute('src', expect.stringContaining('banner.mp4'));
      expect(bannerImage).toHaveAttribute('autoPlay');
      expect(bannerImage).toHaveAttribute('loop');
    });
});