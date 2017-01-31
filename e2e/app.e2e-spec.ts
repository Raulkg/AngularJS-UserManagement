import { UsermanagementPage } from './app.po';

describe('usermanagement App', function() {
  let page: UsermanagementPage;

  beforeEach(() => {
    page = new UsermanagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
