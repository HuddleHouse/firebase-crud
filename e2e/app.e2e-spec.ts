import { FirebaseCrudPage } from './app.po';

describe('firebase-crud App', function() {
  let page: FirebaseCrudPage;

  beforeEach(() => {
    page = new FirebaseCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
