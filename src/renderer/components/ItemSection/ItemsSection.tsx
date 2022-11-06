import { useContext } from 'react';
import AddItem from './AddItem';
import Item from './Item';
import { ItemContext } from '../../context/ItemContext';

export default function ItemsSection() {
  const { items } = useContext(ItemContext);

  return (
    <div className="p-5 w-1/2 flex flex-col items-center">
      <AddItem />
      <ul className="w-4/5 p-5 bg-red-500 bg-opacity-20 mt-10  ">
        {items.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            key={`${item.name}${item.quantity}`}
          />
        ))}
      </ul>
    </div>
  );
}
