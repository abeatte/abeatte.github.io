import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';

describe('Header', () => {
  it('renders all main navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Workbench')).toBeInTheDocument();
  });

  it('renders the Playground link as hidden by default', () => {
    render(<Header />);
    const playgroundLink = screen.getByText('Playground');
    expect(playgroundLink.closest('li')).toHaveClass('hidden');
  });

  it('reveals the Playground link when Konami code is triggered', () => {
    render(<Header />);
    const konamiTrigger = screen.getByTestId('konami-trigger');
    fireEvent.click(konamiTrigger);
    const playgroundLink = screen.getByText('Playground');
    expect(playgroundLink.closest('li')).not.toHaveClass('hidden');
  });

  it('toggles Playground link visibility on repeated Konami triggers', () => {
    render(<Header />);
    const konamiTrigger = screen.getByTestId('konami-trigger');

    fireEvent.click(konamiTrigger);
    expect(screen.getByText('Playground').closest('li')).not.toHaveClass('hidden');

    fireEvent.click(konamiTrigger);
    expect(screen.getByText('Playground').closest('li')).toHaveClass('hidden');
  });

  it('has correct scroll link targets', () => {
    render(<Header />);
    expect(screen.getByTestId('scroll-link-home')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-link-about')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-link-resume')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-link-portfolio')).toBeInTheDocument();
  });

  it('Playground link points to /playground', () => {
    render(<Header />);
    const playgroundLink = screen.getByText('Playground');
    expect(playgroundLink).toHaveAttribute('href', '/playground');
  });
});
