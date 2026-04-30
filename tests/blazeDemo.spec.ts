import { test} from '@playwright/test';
import { formPage } from '../pages2/formPage';
import { BasePage } from '../pages/basePage'; 
import { navbarPage } from '../pages2/navbarPage';  

test('test', async ({ page }) => {
  const basePage = new BasePage(page);
  const formPageInstance = new formPage(page);
  const navbarPageInstance = new navbarPage(page);
  await basePage.loadWeb('http://eservicios.clouddds.ens.uabc.mx/eServicios-web/app/');

  await formPageInstance.loginForm();
  await formPageInstance.changeRole();
   await navbarPageInstance.navigateToMenuSolicitudes();

});

