import { render } from '@testing-library/react';
import { describe, it, expect, vitest } from 'vitest';
import '@testing-library/jest-dom/vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Renders SearchBar', () => {
    const searchValue = 'cat';
    const mockSet = vitest.fn();
    const { container } = render(
      <SearchBar searchValue={searchValue} setSearchValue={mockSet} />
    );
    expect(
      container.getElementsByClassName('search-bar')[0]
    ).toBeInTheDocument();
  });
});
