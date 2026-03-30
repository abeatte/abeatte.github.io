import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright 2020 Art Beatte IV/)).toBeInTheDocument();
  });

  it('renders Styleshout attribution', () => {
    render(<Footer />);
    const link = screen.getByText('Styleshout');
    expect(link).toHaveAttribute('href', 'http://www.styleshout.com/');
  });

  it('renders social links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const socialLinks = links.filter(l => l.getAttribute('href')?.includes('github') || l.getAttribute('href')?.includes('linkedin'));
    expect(socialLinks).toHaveLength(2);
  });

  it('renders a back-to-top link', () => {
    render(<Footer />);
    expect(screen.getByTestId('scroll-link-home')).toBeInTheDocument();
  });

  it('wraps content in a scroll element named footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('scroll-element-footer')).toBeInTheDocument();
  });
});
