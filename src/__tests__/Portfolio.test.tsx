import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Portfolio from '../Components/Portfolio';

describe('Portfolio', () => {
  it('renders the My Workbench heading', () => {
    render(<Portfolio />);
    expect(screen.getByText('My Workbench')).toBeInTheDocument();
  });

  it('renders all portfolio projects', () => {
    render(<Portfolio />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('No Link Project')).toBeInTheDocument();
  });

  it('renders project categories', () => {
    render(<Portfolio />);
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Another Category')).toBeInTheDocument();
  });

  it('renders project images with correct src paths', () => {
    render(<Portfolio />);
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', 'images/portfolio/test.png');
  });

  it('renders link icon only for projects with a URL', () => {
    render(<Portfolio />);
    const linkIcons = screen.getAllByTestId('fa-icon').filter(el => el.textContent === 'faLink');
    expect(linkIcons).toHaveLength(1);
  });

  it('wraps content in a scroll element named portfolio', () => {
    render(<Portfolio />);
    expect(screen.getByTestId('scroll-element-portfolio')).toBeInTheDocument();
  });
});
