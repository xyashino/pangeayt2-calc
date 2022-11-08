import { ItemDataResponse } from '../../../types/item-data';

interface Props {
  item: ItemDataResponse;
  tailwindStyles?: string;
}
export const ResultTableRow = ({ item, tailwindStyles }: Props) => {
  const {name,quantity,src,price}= item;
  return (
    <tr>
      <th className="bg-black bg-opacity-70 p-5 flex items-center" >{name}{src ? <img src={src} alt={`shows ${name}`} draggable="false"/>:null}</th>
      <td className={tailwindStyles}>
        {price === 0 ? 'Brak' : `${price}B`}
      </td>
      <td className={tailwindStyles}>{quantity}</td>
      <td className={tailwindStyles}>
        {price === 0
          ? 'Brak'
          : `${parseFloat((price * quantity).toString() , 2)}B`}
      </td>
    </tr>
  );
};
