import Cards from '../components/Cards/Cards';
import { TSearch } from '../types';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary.tsx';

function Home({ searchValue, setSearchValue }: TSearch) {
  return (
    <>
      <h1>Home</h1>
      <ErrorBoundary>
        <Cards searchValue={searchValue} setSearchValue={setSearchValue} />
      </ErrorBoundary>
    </>
  );
}

export default Home;
