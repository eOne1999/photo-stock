import { GetResp, LoaderOptions, RespFromGet } from '../types';

class Loader {
  baseLink: string;

  options: LoaderOptions;

  constructor(baseLink: string, options: LoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  async getResp<T>({ options }: GetResp): Promise<RespFromGet<T>> {
    const res = await fetch(this.makeUrl(options), { method: 'GET' });
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    const data = (await res.json()) as RespFromGet<T>;
    if (data.stat !== 'ok') {
      throw Error(data.message);
    }

    return data;
  }

  makeUrl(options: object | undefined): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }
}

export default Loader;
