import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blazedemo.com/index.php');
  await page.locator('select[name="fromPort"]').selectOption('Mexico City'); // Esto es un locator que selecciona el select de origen y le da el valor de Mexico City
  await page.locator('select[name="toPort"]').selectOption('London'); 
  await page.locator('input[type="submit"]').click();
  await page.locator('div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > input]').click();
  await page.locator('input[name="inputName"]').fill('Kim');
  await page.locator('input[name="address"]').fill('123');

  await page.locator('input[name="city"]').fill('Ens');
  await page.locator('input[name="state"]').fill('BC12');
  await page.locator('input[name="zipCode"]').fill('323');
  await page.locator('input[name="state"]').click();
  await page.locator('select[name="cardType"]').selectOption('visa');

  await page.locator('input[name="creditCardNumber"]').fill('2133123123123');
  await page.locator('input[name="creditCardMonth"]').fill('12');
  await page.locator('input[name="creditCardYear"]').fill('2025');
  await page.locator('input[name="nameOnCard"]').fill('Kim Kim');
  await page.locator ('input[type="submit"]').click();

 
});

