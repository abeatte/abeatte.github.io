import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import testData from './testData.json';

// Mock the dataProvider — React 18 doesn't have `use()`, which the real
// dataProvider relies on. This mock returns test data synchronously.
vi.mock('../../app/dataProvider', () => ({
  DataContext: {},
  DataProvider: ({ children }: any) => children,
  useSiteData: () => testData,
}));

// Mock react-ga
vi.mock('react-ga', () => ({
  default: {
    initialize: vi.fn(),
    pageview: vi.fn(),
  },
}));

// Mock react-konami-code
vi.mock('react-konami-code', () => ({
  default: ({ action, children }: any) => (
    <button data-testid="konami-trigger" onClick={action}>{children}</button>
  ),
}));

// Mock react-scroll
vi.mock('react-scroll', () => ({
  Element: ({ name, children }: any) => <div data-testid={`scroll-element-${name}`}>{children}</div>,
  Link: ({ to, children, ...rest }: any) => {
    const { smooth, duration, activeClass, ...safeProps } = rest;
    return <a data-testid={`scroll-link-${to}`} href={`#${to}`} {...safeProps}>{children}</a>;
  },
}));

// Mock FontAwesome
vi.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }: any) => <span data-testid="fa-icon">{String(icon)}</span>,
}));

vi.mock('@fortawesome/fontawesome-svg-core', () => ({
  library: { add: vi.fn() },
}));

vi.mock('@fortawesome/free-brands-svg-icons', () => ({
  fab: {},
}));

vi.mock('@fortawesome/free-solid-svg-icons', () => ({
  faCircleChevronDown: 'faCircleChevronDown',
  faChevronUp: 'faChevronUp',
  faFileLines: 'faFileLines',
  faLink: 'faLink',
}));
