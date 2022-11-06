import { ItemData } from '../../../types/item-data';
import Btn from '../common/Btn';

export default function Item({ name, quantity }: ItemData) {
  return (
    <li className="flex items-center justify-around text-white font-bold mt-5 uppercase">
      <p className="w-2/4">{name}</p>
      <p className="w-1/8">{quantity}</p>
      <Btn value="X" styles="w-1/12" />
    </li>
  );
}
