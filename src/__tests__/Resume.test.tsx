import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../Components/Resume';

describe('Resume', () => {
  it('renders work history', () => {
    render(<Resume />);
    expect(screen.getByText('Test Corp')).toBeInTheDocument();
    expect(screen.getByText('Engineer')).toBeInTheDocument();
    expect(screen.getByText('2020 - Present')).toBeInTheDocument();
    expect(screen.getByText('Test work description.')).toBeInTheDocument();
  });

  it('renders education history', () => {
    render(<Resume />);
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByText(/B\.S\. in Computer Science/)).toBeInTheDocument();
    expect(screen.getByText('June 2020')).toBeInTheDocument();
  });

  it('renders the View Resume download link', () => {
    render(<Resume />);
    const link = screen.getByText(/View Resume/);
    expect(link.closest('a')).toHaveAttribute('href', './docs/test_resume.pdf');
  });

  it('renders Work and Education section headers', () => {
    render(<Resume />);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('wraps content in a scroll element named resume', () => {
    render(<Resume />);
    expect(screen.getByTestId('scroll-element-resume')).toBeInTheDocument();
  });
});
