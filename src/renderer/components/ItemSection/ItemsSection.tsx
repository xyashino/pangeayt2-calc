import { useContext } from 'react';
import AddItem from './AddItem';
import Item from './Item';
import { ItemContext } from '../../context/ItemContext';
import Btn from '../common/Btn';

export default function ItemsSection() {
  const { items, setItems } = useContext(ItemContext);
  const clearUl = (e) => {
    e.preventDefault();
    setItems([]);
  };
  return (
    <div className="p-5 w-1/2 flex flex-col items-center justify-center">
      <AddItem />
      {items.length !== 0 ? (
        <>
          <ul className="w-4/5 p-5 bg-red-500 bg-opacity-20 mt-10  ">
            {items.map((item) => (
              <Item
                name={item.name}
                quantity={item.quantity}
                key={`${item.name}${item.quantity}`}
              />
            ))}
          </ul>
          <Btn value="Wyczyść" clickMethod={clearUl} styles="m-10"/>
        </>
      ) : null}
    </div>
  );
}
