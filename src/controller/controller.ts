import { ReqPhotosSearch, RespFromGet, RespPhotosSearch } from '../types';
import AppLoader from './appLoader.ts';

class AppController extends AppLoader {
  async getPhotosSearch(
    params: ReqPhotosSearch
  ): Promise<RespFromGet<RespPhotosSearch>> {
    const data: RespFromGet<RespPhotosSearch> = await super.getResp({
      options: {
        ...params,
        method: 'flickr.photos.search',
      },
    });
    return data;
  }
}

export default AppController;
