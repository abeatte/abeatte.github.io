import { describe, it, expect, vi } from 'vitest';

// Test the data provider module shape by importing the raw data
// (the actual `use()` hook is a React 19 API that Next.js provides at runtime)
vi.unmock('../../app/dataProvider');

describe('DataProvider module', () => {
  it('exports DataContext, DataProvider, and useSiteData', async () => {
    const mod = await import('../../app/dataProvider');
    expect(mod.DataContext).toBeDefined();
    expect(mod.DataProvider).toBeDefined();
    expect(mod.useSiteData).toBeDefined();
  });

  it('DataProvider is a function component', async () => {
    const mod = await import('../../app/dataProvider');
    expect(typeof mod.DataProvider).toBe('function');
  });
});
