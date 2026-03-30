import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Intro from '../Components/Intro';

describe('Intro', () => {
  it('renders the user name', () => {
    render(<Intro />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders occupation and city', () => {
    render(<Intro />);
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Seattle/)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Intro />);
    expect(screen.getByText(/A test description/)).toBeInTheDocument();
  });

  it('renders social links for each network', () => {
    render(<Intro />);
    const links = screen.getAllByRole('link');
    const socialLinks = links.filter(l => l.getAttribute('href')?.includes('github') || l.getAttribute('href')?.includes('linkedin'));
    expect(socialLinks).toHaveLength(2);
  });

  it('wraps content in a scroll element named home', () => {
    render(<Intro />);
    expect(screen.getByTestId('scroll-element-home')).toBeInTheDocument();
  });
});
