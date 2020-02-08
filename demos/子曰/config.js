import config from '../base.config';

export default async () => {
  let code = await import('!raw-loader!./序.wy');
  const html = await import('!raw-loader!~/index.html');

  return config({html, code});
};