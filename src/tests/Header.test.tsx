import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Header from '../components/Header';

describe('renders Header components correctly', () => {
    it('renders without crashing', () => {
      render(<Header />);
      
      const logoContainer = screen.getByRole('logoContainer');
      expect(logoContainer).toBeVisible();

      const logoElement1 = screen.getByTestId('logo1');
      expect(logoElement1).toBeVisible();

      const logoElement2 = screen.getByTestId('logo2');
      expect(logoElement2).toBeVisible();

      const menuContainer = screen.getByRole('menuContainer');
      expect(menuContainer).toBeVisible();

      const aboutLink = screen.getByTestId('about');
      expect(aboutLink).toBeVisible();

      const discoverLink = screen.getByTestId('invest');
      expect(discoverLink).toBeVisible();

      const galleryLink = screen.getByTestId('technology');
      expect(galleryLink).toBeVisible();

      const contactLink = screen.getByTestId('contact');
      expect(contactLink).toBeVisible();

      const aboutMobileLink = screen.getByTestId('mobile-about');
      expect(aboutMobileLink).not.toBeVisible();

      const discoverMobileLink = screen.getByTestId('mobile-invest');
      expect(discoverMobileLink).not.toBeVisible();

      const galleryMobileLink = screen.getByTestId('mobile-technology');
      expect(galleryMobileLink).not.toBeVisible();

      const contactMobileLink = screen.getByTestId('mobile-contact');
      expect(contactMobileLink).not.toBeVisible();

      const joinButton = screen.getByRole('join');
      expect(joinButton).toBeVisible();
    });
});