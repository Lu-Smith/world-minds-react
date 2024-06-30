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

    it('renders the BannerContentContainer', () => {
      render(<Banner />);
  
      const bannerContentContainer = screen.getByRole('bannerImageContainer').querySelector('div');
      expect(bannerContentContainer).toBeInTheDocument();
      expect(bannerContentContainer).toHaveStyle('position: relative');
      expect(bannerContentContainer).toHaveStyle('top: -55%');
    });

    it('renders the BannerTitle', () => {
      render(<Banner />);
  
      const bannerTitle = screen.getByText('Welcome to World Minds');
      expect(bannerTitle).toBeInTheDocument();
      expect(bannerTitle.tagName).toBe('H1');
      expect(bannerTitle).toHaveStyle('font-size: 1.8em');
    });

    it('renders the BannerSubTitle', () => {
      render(<Banner />);
  
      const bannerSubTitle = screen.getByText('Open your mind and find yourself');
      expect(bannerSubTitle).toBeInTheDocument();
      expect(bannerSubTitle.tagName).toBe('H2');
      expect(bannerSubTitle).toHaveStyle('font-size: 1.2em');
      expect(bannerSubTitle).toHaveStyle('font-style: italic');
      expect(bannerSubTitle).toHaveStyle('font-weight: 300');
      expect(bannerSubTitle).toHaveStyle('margin-bottom: 20px');
    });
  
    it('renders the Button', () => {
      render(<Banner />);
  
      const joinButton = screen.getByRole('join');
      expect(joinButton).toBeInTheDocument();
      expect(joinButton.tagName).toBe('BUTTON'); 
    });
  
});