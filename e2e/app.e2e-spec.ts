import { TryAppPage } from './app.po';

describe('try-app App', () => {
  let page: TryAppPage;

  beforeEach(() => {
    page = new TryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
