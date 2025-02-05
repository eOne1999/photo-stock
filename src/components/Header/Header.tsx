import SearchBar from '../SearchBar/SearchBar';
import { TSearch } from '../../types';

function Header({ searchValue, setSearchValue }: TSearch) {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            src="./src/assets/logo.svg"
            alt="PhotoStock logo"
            className="logo__img"
          />
        </a>
      </div>
      <div className="header__search-bar">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </header>
  );
}

export default Header;
