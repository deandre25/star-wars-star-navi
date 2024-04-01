import { render, screen, fireEvent, act } from '@testing-library/react';
import HeroesPage from './page';
import '@testing-library/jest-dom'; // Import jest-dom for extended expectations

jest.mock('../../services/axios-service', () => ({
  HeroService: {
    getAllHeroes: jest.fn(() => [{ id: 1, name: 'Luke Skywalker' }]), // Mocked data to trigger setHeroes
  },
}));

describe('HeroesPage page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title', () => {
    render(<HeroesPage />);
    expect(screen.getByText('Star Wars Heroes')).toBeInTheDocument();
  });

  it('renders the "Previous Page" button disabled on the first page', () => {
    render(<HeroesPage />);
    const previousPageButton = screen.getByText('Previous Page');
    expect(previousPageButton).toBeInTheDocument();
    expect(previousPageButton).toBeDisabled();
  });

  it('renders the "Next Page" button enabled', () => {
    render(<HeroesPage />);
    const nextPageButton = screen.getByText('Next Page');
    expect(nextPageButton).toBeInTheDocument();
    expect(nextPageButton).not.toBeDisabled();
  });

  it('calls handleNextPage when "Next Page" button is clicked', async () => {
    render(<HeroesPage />);
    const nextPageButton = screen.getByText('Next Page');
    // Simulate 9 clicks on the "Next Page" button
    for (let i = 0; i < 9; i++) {
      await act(async () => {
        fireEvent.click(nextPageButton);
      });
    }
    expect(nextPageButton).toBeDisabled(); // Expecting the button to be disabled
    expect(nextPageButton).toHaveClass('bg-gray-800 cursor-not-allowed');
  });

  it('calls handlePreviousPage when "Previous Page" button is clicked', () => {
    render(<HeroesPage />);
    const previousPageButton = screen.getByText('Previous Page');
    act(() => {
      fireEvent.click(previousPageButton);
    });
    expect(previousPageButton).toBeDisabled();
    expect(previousPageButton).toHaveClass('bg-gray-800 cursor-not-allowed');
  });
});
