import { GeneralItemStatistics, ItemStatistics } from './item-statistics';

export interface StatisticsAboutItem {
  general: GeneralItemStatistics;
  sale: ItemStatistics;
  currentlyOnTheMarket: ItemStatistics;
}
