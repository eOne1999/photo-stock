import { useEffect, useState } from 'react';
import AppController from '../../controller/controller';
import { RespFromGet, RespPhotosSearch, TSearch } from '../../types';
import Card from '../Card/Card';
import spinner from '../../assets/spinner.gif';

function Cards({ searchValue }: TSearch) {
  const [photos, setPhotos] = useState<RespPhotosSearch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const controller = new AppController();
      let data: RespFromGet<RespPhotosSearch>;

      if (searchValue) {
        data = (await controller.getPhotosSearch({
          privacy_filter: '1',
          safe_search: '3',
          content_type: '1',
          text: searchValue,
          sort: 'relevance',
          extras:
            'description, date_taken, owner_name, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c,url_l, url_o',
        })) as RespFromGet<RespPhotosSearch>;
      } else {
        data = (await controller.getPhotosSearch({
          privacy_filter: '1',
          safe_search: '3',
          content_type: '1',
          tags: 'nature, city, architecture',
          sort: 'interestingness-desc',
          extras:
            'description, date_taken, owner_name, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c,url_l, url_o',
        })) as RespFromGet<RespPhotosSearch>;
      }

      setPhotos(() => {
        if (data.photos) {
          setIsLoading(false);
          return data.photos?.photo.sort(() => Math.random() - 0.5);
        }
        throw Error('Failed to get data');
      });
    })().catch((err) => setError(err));
  }, [searchValue]);

  function handleClick() {
    setError(() => {
      throw new Error('Error by button');
    });
  }

  return (
    <>
      <button onClick={handleClick}>Throw error</button>
      {searchValue && <p>Results for: {searchValue}</p>}
      <div className="cards">
        {isLoading && <img src={spinner} alt="loader" />}
        {!isLoading && (
          <>
            {photos && photos.map((elem) => <Card key={elem.id} card={elem} />)}
          </>
        )}
      </div>
    </>
  );
}

export default Cards;
