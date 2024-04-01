import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for extended expectations
import Home from './page';

describe('Home page', () => {
  it('Home page render', () => {
    render(<Home />);
    const welcomeElement = screen.getByText('Welcome to the world of Star Wars!');
    expect(welcomeElement).toBeInTheDocument();
  });

  it('renders immersive text', () => {
    render(<Home />);
    const immersiveElement = screen.getByText('Immerse yourself in the exciting world of the galactic saga and travel with your favorite heroes.');
    expect(immersiveElement).toBeInTheDocument();
  });

  it('renders link to heroes page', () => {
    render(<Home />);
    const linkElement = screen.getByRole('link', { name: 'Go to heroes' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe('/heroes');
  });
});
