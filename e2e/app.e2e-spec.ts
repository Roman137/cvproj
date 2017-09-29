import {CvprojPage} from './app.po';

describe('cvproj App', () => {
  let page: CvprojPage;

  beforeEach(() => {
    page = new CvprojPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
