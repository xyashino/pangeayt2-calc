import { SyntheticEvent } from 'react';
import { ItemDataResponse } from '../../../types/item-data';

interface Props {
  item: ItemDataResponse;
  tailwindStyles?: string;
  showItemModal?: (
    e: SyntheticEvent,
    showModal: boolean,
    obj: Omit<ItemDataResponse, 'price' | 'quantity'>
  ) => void;
}

export const ResultTableRow = ({
  item,
  tailwindStyles,
  showItemModal,
}: Props) => {
  const { name, quantity, src, price, url } = item;

  return (
    <>
      <tr>
        <th
          className="bg-black bg-opacity-70 p-5 flex items-center justify-center hover:bg-opacity-90 cursor-pointer"
          onClick={(e) => {
            if (showItemModal) {
              showItemModal(e, true, { src, url, name });
            }
          }}
        >
          {name}
          {src ? (
            <img src={src} alt={`shows ${name}`} draggable="false" />
          ) : null}
        </th>
        <td className={tailwindStyles}>
          {price === 0 ? 'Brak' : `${price} B`}
        </td>
        <td className={tailwindStyles}>{quantity}</td>
        <td className={tailwindStyles}>
          {price === 0
            ? 'Brak'
            : `${parseFloat((price * quantity).toFixed(2))} B`}
        </td>
      </tr>
    </>
  );
};
