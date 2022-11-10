import { launch, Page } from 'puppeteer';
import { load } from 'cheerio';
import { ItemData, ItemDataResponse } from '../types/item-data';
import {
  GeneralItemStatistics,
  ItemStatistics,
} from '../types/statistics/item-statistics';

async function clear(page: Page, selector: string) {
  await page.evaluate((selector) => {
    (document.querySelector(selector) as HTMLInputElement).value = '';
  }, selector);
}

export const getPrice = async (
  arrayOfObject: ItemData[]
): Promise<ItemDataResponse[] | []> => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://pangeayt2.eu/#exchange');
  await page.mouse.click(0, 0, { button: 'left' });
  const result = [];
  for await (const { name, quantity } of arrayOfObject) {
    const firstUrl = page.url();
    await clear(page, '#autocomplete-ajax');
    await page.focus('#autocomplete-ajax');
    await page.type('#autocomplete-ajax', `${name}`);
    const secondUrl = page.url();
    if (firstUrl === secondUrl) continue;
    const element = await page.waitForSelector(
      '#exchange-table > tbody > tr:nth-child(1) > td:nth-child(2)'
    );
    const img = await page.waitForSelector('#exchange-icon > img');

    if (!element) continue;
    const value = await element.evaluate((el) => el.textContent);
    const src = await img?.evaluate((el) => el.getAttribute('src'));

    if (!value) {
      result.push({ name, price: 0, quantity, src, url: secondUrl });
      continue;
    }
    const price = +value
      .trim()
      .replace(',', '.')
      .replace('B', '')
      .replace(' ', '');
    result.push({
      name,
      price,
      quantity,
      src,
      url: secondUrl,
    });
  }
  await browser.close();
  return result;
};

export const getMoreStatisticsAboutItem = async (url: string) => {
  // Scrap Html form url
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(url);
  const element = await page.waitForSelector('#exchnage_stats');
  if (!element) return [];
  const stats = await element.evaluate((el) => el.innerHTML);
  await browser.close();

  // Format scraped HTML
  const $ = load(stats);
  const tables = $('.table2');

  const generalRows: any = [];
  $(tables[0])
    .find('tbody tr')
    .each((i, el) => {
      const row = $(el).text().trim().split(`\n`);
      generalRows.push(row);
    });

  const general: GeneralItemStatistics = {
    title: $(tables[0]).find('thead').text().trim(),
    rows: generalRows,
  };

  const saleRows: any = [];

  $(tables[1])
    .find('tbody tr')
    .each((i, el) => {
      const row: string[] = [];
      $(el)
        .find('td')
        .each((i, el) => row.push($(el).text()));
      saleRows.push(row);
    });

  const sale: ItemStatistics = {
    title: $(tables[1]).find('thead tr:nth-child(1) th').text().trim(),
    rowsTitle: $(tables[1])
      .find('thead tr:nth-child(2)')
      .text()
      .trim()
      .split(`\n`),
    rows: saleRows,
  };

  const currentlyOnTheMarketRows: any = [];
  $(tables[2])
    .find('tbody tr')
    .each((i, el) => {
      const row: string[] = [];
      $(el)
        .find('td')
        .each((i, el) => row.push($(el).text()));
      currentlyOnTheMarketRows.push(row);
    });

  const currentlyOnTheMarket: ItemStatistics = {
    title: $(tables[2]).find('thead tr:nth-child(1) th').text().trim(),
    rowsTitle: $(tables[2])
      .find('thead tr:nth-child(2)')
      .text()
      .trim()
      .split(`\n`),
    rows: currentlyOnTheMarketRows,
  };

  return {
    general,
    sale,
    currentlyOnTheMarket,
  };
};
