import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';

export function App() {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="main">
        <Home searchValue={searchValue} setSearchValue={setSearchValue} />
      </main>
    </div>
  );
}
