import Cards from '../components/Cards/Cards';
import { TSearch } from '../types';

function Home({ searchValue, setSearchValue }: TSearch) {
  return (
    <>
      <h1>Home</h1>
      <Cards searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
  );
}

export default Home;
