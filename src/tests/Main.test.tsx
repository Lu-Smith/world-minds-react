import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import Main from '../components/Main';

describe('renders Main components correctly', () => {
    it('renders without crashing', () => {
      render(<Main />);
      
      const sectorContainer = screen.getByRole('sector');
      expect(sectorContainer).toBeVisible();
    });
});