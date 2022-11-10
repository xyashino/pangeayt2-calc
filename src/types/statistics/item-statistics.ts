export interface GeneralItemStatistics {
  title: string;
  rows: string[][];
}

export interface ItemStatistics extends GeneralItemStatistics {
  rowsTitle: string[];
}
