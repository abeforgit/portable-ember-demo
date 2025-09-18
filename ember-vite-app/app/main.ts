import App from './app.ts';

type SimpleElement = Parameters<App['visit']>[1]['rootElement'];

export async function startApp(element: HTMLElement) {
  const app = App.create({
    autoboot: false,
    name: `ember-vite-app`,
    location: 'none',
  });

  await app.visit('/', {
    rootElement: element as unknown as SimpleElement,
    location: 'none',
  });
}
