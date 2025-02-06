import { KeyboardEvent, useState } from 'react';
import { TSearch } from '../../types';

export default function SearchBar({ setSearchValue }: TSearch) {
  const [currSearch, setCurrSearch] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrSearch(e.target.value);
    localStorage.setItem('searchValue', e.target.value.toString());

    if (e.target.value === '') {
      setSearchValue(e.target.value);
    }
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value);
    }
  };

  return (
    <>
      <input
        onChange={handleInputSearch}
        onKeyDown={(e) => {
          handleSearch(e);
        }}
        type="search"
        className="search-bar"
        placeholder="Search"
        value={currSearch}
      />
      <button onClick={() => setSearchValue(currSearch)}>Search</button>
    </>
  );
}
