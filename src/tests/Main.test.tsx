import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Main from '../components/Main';
import mainContent from '../assets/mainContent';

describe('Main component', () => {
  it('renders without crashing', () => {
    render(<Main />);
    
    const sectorContainer = screen.getAllByRole('sector');
    expect(sectorContainer).toBeVisible;
  });

  it('renders SectorTitle with correct text', () => {
    render(<Main />);
    mainContent.forEach(content => {
      const sectorTitle = screen.getByText(content.title);
      expect(sectorTitle).toBeInTheDocument();
    });
  });

  it('renders SectorSubTitle with correct text', () => {
    render(<Main />);
    mainContent.forEach(content => {
      if (content.subtitle) {
          const sectorSubTitle = screen.getByText(content.subtitle);
          expect(sectorSubTitle).toBeInTheDocument();
        }
    });
  });

it('renders SectorDescription with correct text', () => {
  render(<Main />);
  mainContent.forEach(content => {
    if (content.content) {
      const sectorDescription = screen.getByText(content.content);
      expect(sectorDescription).toBeInTheDocument();
    }
  });
});

  it('renders Button with correct text', () => {
    render(<Main />);
    mainContent.forEach(content => {
      if (content.button) {
        const button = screen.getByRole('button', { name: content.button });
        expect(button).toBeInTheDocument();
      }
    });
  });

  it('renders SectorImage with correct alt text', () => {
    render(<Main />);
    mainContent.forEach(content => {
      if (content.src) {
      const sectorImage = screen.getByAltText(content.title);
      expect(sectorImage).toBeInTheDocument();
      expect(sectorImage).toHaveAttribute('src', content.src);
      }
    });
  });
});
