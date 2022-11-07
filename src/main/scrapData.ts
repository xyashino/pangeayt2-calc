import puppeteer, { Page } from 'puppeteer';
import { ItemData, ItemDataResponse } from '../types/item-data';

async function clear(page: Page, selector: string) {
  await page.evaluate((selector) => {
    (document.querySelector(selector) as HTMLInputElement).value = '';
  }, selector);
}
export const getPrice = async (
  arrayOfObject: ItemData[]
): Promise<ItemDataResponse[] | []> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://pangeayt2.eu/#exchange');
  await page.mouse.click(0, 0, { button: 'left' });
  const result = [];
  for await (const obj of arrayOfObject) {
    const firstUrl = page.url();
    await clear(page, '#autocomplete-ajax');
    await page.focus('#autocomplete-ajax');
    await page.type('#autocomplete-ajax', `${obj.name}`);
    await page.keyboard.press('Enter');
    const secondUrl = page.url();
    if (firstUrl === secondUrl) continue;
    const element = await page.waitForSelector(
      '#exchange-table > tbody > tr:nth-child(1) > td:nth-child(2)'
    );
    if (!element) continue;
    const value = await element.evaluate((el) => el.textContent);
    if (!value) {
      result.push({ itemName: obj.name, price: 0, quantity: obj.quantity });
      continue;
    }
    const price = +value
      .trim()
      .replace(',', '.')
      .replace('B', '')
      .replace(' ', '');
    result.push({
      name: obj.name,
      price,
      quantity: obj.quantity,
    });
  }
  await browser.close();
  return result;
};
