import { test} from '@playwright/test';
import { bookingPage } from '../pages/bookingPage';
import { BasePage } from '../pages/basePage'; 

test('test', async ({ page }) => {
  const basePage = new BasePage(page);
  const bookingPageInstance = new bookingPage(page);
  await basePage.loadWeb('https://blazedemo.com/');

  await bookingPageInstance.selectDestiny();
  await bookingPageInstance.fillForm();
});

