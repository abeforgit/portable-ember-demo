import App from './app.ts';

export async function startApp(element: HTMLElement) {
  const app = App.create({
    autoboot: false,
    name: `ember-vite-app`,
    location: 'none',
  });

  await app.visit('/', {
    rootElement: element,
    location: 'none',
  });
}
