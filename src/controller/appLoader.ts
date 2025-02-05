import Loader from './loader.ts';

class AppLoader extends Loader {
  constructor() {
    super('https://www.flickr.com/services/rest/', {
      api_key: '0b86493e77ea0dd7c88d77fc646b5bf3',
      format: 'json',
      nojsoncallback: '1',
    });
  }
}

export default AppLoader;
