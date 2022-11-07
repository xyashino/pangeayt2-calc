import { ItemDataResponse } from '../../types/item-data';

interface Props {
  item: ItemDataResponse;
  tailwindStyles?: string;
}
export const ResultRow = ({ item, tailwindStyles }: Props) => {
  return (
    <tr>
      <th className={`bg-black bg-opacity-70 p-5`}>{item.name}</th>
      <td className={tailwindStyles}>
        {item.price === 0 ? 'Brak' : `${item.price}B`}
      </td>
      <td className={tailwindStyles}>{item.quantity}</td>
      <td className={tailwindStyles}>
        {item.price === 0
          ? 'Brak'
          : `${(item.price * item.quantity).toFixed(2)}B`}
      </td>
    </tr>
  );
};
