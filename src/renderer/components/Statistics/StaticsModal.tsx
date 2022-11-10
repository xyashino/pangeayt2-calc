import { SyntheticEvent, useEffect, useState } from 'react';
import { Loader } from '../common/Loader/Loader';
import { Modal } from '../common/Modal';
import { ItemDataResponse } from '../../../types/item-data';
import { StatisticsAboutItem } from '../../../types/statistics/statistics-about-item';
import { StatisticsTable } from './StatisticsTable';

interface Props {
  url?: string;
  itemName?: string;
  src: string | null | undefined;
  showItemModal?: (
    e: SyntheticEvent,
    showModal: boolean,
    obj: Omit<ItemDataResponse, 'price' | 'quantity'> | null
  ) => void;
}

export const StaticsModal = ({ url, itemName, src, showItemModal }: Props) => {
  const [isLoading, setLoader] = useState(true);
  const [itemStatistics, setItemStatistics] =
    useState<StatisticsAboutItem | null>(null);

  const hideModal = (e: SyntheticEvent) => {
    if (showItemModal) {
      showItemModal(e, false, null);
    }
  };

  useEffect(() => {
    (async () => {
      if (!url) return;
      const stats = await window.electron.getStatistics(
        'request-get-statistics',
        url
      );
      setLoader(false);
      setItemStatistics(stats);
    })();
  }, []);

  return (
    <Modal click={hideModal}>
      <header className="flex items-center w-full justify-between border-b-2 p-5 text-white">
        <div className="flex items-center">
          <h2 className="text-2xl mr-5 uppercase font-bold">{itemName}</h2>
          {src ? (
            <img
              src={src}
              alt={`Shows ${itemName}`}
              draggable="false"
              className="scale-150"
            />
          ) : null}
        </div>
      </header>
      {isLoading ? <Loader text="Pobieranie danych ..." /> : null}
      {itemStatistics ? (
        <>
          <StatisticsTable statistics={itemStatistics?.general} />
          <StatisticsTable statistics={itemStatistics?.sale} />
          <StatisticsTable statistics={itemStatistics?.currentlyOnTheMarket} />
        </>
      ) : null}
    </Modal>
  );
};
