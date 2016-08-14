import { FriendsaccountsPage } from './app.po';

describe('friendsaccounts App', function() {
  let page: FriendsaccountsPage;

  beforeEach(() => {
    page = new FriendsaccountsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
