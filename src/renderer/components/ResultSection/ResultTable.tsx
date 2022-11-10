import { SyntheticEvent, useState } from 'react';
import { ItemDataResponse } from '../../../types/item-data';
import { ResultTableRow } from './ResultTableRow';
import { StaticsModal } from '../Statistics/StaticsModal';

interface Props {
  items: ItemDataResponse[];
}
interface ModalState {
  showModal: boolean;
  data: null | Omit<ItemDataResponse, 'price' | 'quantity'>;
}

export const ResultTable = ({ items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    showModal: false,
    data: null,
  });

  const toggleModal = (
    e: SyntheticEvent,
    showModal: boolean,
    obj: Omit<ItemDataResponse, 'price' | 'quantity'> | null
  ) => {
    e.preventDefault();
    setModal((prevState) => {
      prevState.showModal = showModal;
      prevState.data = obj;
      return { ...prevState };
    });
  };

  return (
    <>
      <table className=" mt-2  p-20 text-white uppercase">
        <thead className="p-3 bg-black bg-opacity-90 text-center border-1">
          <tr>
            <th className="p-5">Nazwa Przedmiotu</th>
            <th className="p-5">Cena kupna za sztuke</th>
            <th className="p-5">Ilosc Sztuk</th>
            <th className="p-5">Razem</th>
          </tr>
        </thead>
        <tbody className="text-center font-bold ">
          {items.map((item) => (
            <ResultTableRow
              item={item}
              key={item.name}
              tailwindStyles="p-5 bg-opacity-70 bg-red-600 border-solid border-2 border-red-600 hover:bg-opacity-50"
              showItemModal={toggleModal}
            />
          ))}
        </tbody>
      </table>
      {modal.showModal ? (
        <StaticsModal
          url={modal.data?.url}
          itemName={modal.data?.name}
          src={modal.data?.src}
          showItemModal={toggleModal}
        />
      ) : null}
    </>
  );
};
