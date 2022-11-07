import { useContext } from 'react';
import { ItemData } from '../../../types/item-data';
import Btn from '../common/Btn';
import { ItemContext } from '../../context/ItemContext';

export default function Item({ name, quantity }: ItemData) {
  const { setItems } = useContext(ItemContext);
  const removeItem = (e) => {
    e.preventDefault();
    const nameid = e.target.parentElement.getAttribute('nameid');
    setItems((prevState) => prevState.filter((item) => item.name !== nameid));
  };

  return (
    <li
      className="flex items-center justify-around text-white font-bold mt-5 uppercase"
      nameid={name}
    >
      <p className="w-2/4">{name}</p>

      <p className="w-1/8">{quantity}</p>
      <Btn value="X" styles="w-1/12 min-w-20px" clickMethod={removeItem} />
    </li>
  );
}
