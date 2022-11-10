import { Channels } from 'main/preload';
import { ItemData, ItemDataResponse } from '../types/item-data';
import { StatisticsAboutItem } from '../types/statistics/statistics-about-item';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: Channels,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: Channels, func: (...args: unknown[]) => void): void;
      };
      getPrices(
        channel: string,
        items: ItemData[]
      ): Promise<ItemDataResponse[]>;
      getStatistics(channel: string, url: string): Promise<StatisticsAboutItem>;
    };
  }
}

export {};
