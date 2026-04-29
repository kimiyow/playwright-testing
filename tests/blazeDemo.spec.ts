import { test} from '@playwright/test';
import { formPage } from '../pages2/formPage';
import { BasePage } from '../pages/basePage'; 

test('test', async ({ page }) => {
  const basePage = new BasePage(page);
  const formPageInstance = new formPage(page);
  await basePage.loadWeb('https://siccaf.uabc.mx/');

  await formPageInstance.loginForm();
 
});

