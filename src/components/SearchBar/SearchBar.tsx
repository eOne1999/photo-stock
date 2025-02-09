import { useState } from 'react';
import { TSearch } from '../../types';

export default function SearchBar({ setSearchValue }: TSearch) {
  const [currSearch, setCurrSearch] = useState(
    localStorage.getItem('searchValue') || ''
  );

  const handleClick = (value: string) => {
    const string = value.trim().replace(/ +/g, ' ');
    setCurrSearch(string);
    setSearchValue(string);
    localStorage.setItem('searchValue', string);
  };

  return (
    <>
      <input
        onChange={(e) => setCurrSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick(e.currentTarget.value);
          }
        }}
        type="search"
        className="search-bar"
        placeholder="Search"
        value={currSearch}
      />
      <button onClick={() => handleClick(currSearch)}>Search</button>
    </>
  );
}
