import { render } from '@testing-library/react';
import { describe, it} from 'vitest';
import App from '../App';

describe('renders App components correctly', () => {
    it('renders without crashing', () => {
      render(<App />);
    });
});