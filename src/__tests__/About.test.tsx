import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../Components/About';

describe('About', () => {
  it('renders the About Me heading', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders the bio text', () => {
    render(<About />);
    expect(screen.getByText('Test bio content.')).toBeInTheDocument();
  });

  it('renders the profile picture with correct src', () => {
    render(<About />);
    const img = screen.getByAltText('Art Beatte Profile Pic');
    expect(img).toHaveAttribute('src', 'images/headshot.png');
  });

  it('wraps content in a scroll element named about', () => {
    render(<About />);
    expect(screen.getByTestId('scroll-element-about')).toBeInTheDocument();
  });
});
