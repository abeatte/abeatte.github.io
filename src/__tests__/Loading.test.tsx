import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading from '../Components/Loading';

describe('Loading', () => {
  it('renders Loading... text', () => {
    render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has the loading_container class', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('.loading_container')).toBeInTheDocument();
  });
});
