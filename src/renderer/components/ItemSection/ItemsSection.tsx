import { SyntheticEvent, useContext } from 'react';
import { AddItem } from './AddItem';
import { Item } from './Item';
import { ItemContext } from '../../context/ItemContext';
import { Btn } from '../common/Btn';

export const ItemsSection = () => {
  const { items, setItems } = useContext(ItemContext);
  const clearUl = (e: SyntheticEvent) => {
    e.preventDefault();
    setItems([]);
  };
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center lg:w-2/5">
      <AddItem />
      {items.length !== 0 ? (
        <>
          <ul className="w-full p-5 bg-red-600 bg-opacity-20 mt-10  ">
            {items.map((item) => (
              <Item
                name={item.name}
                quantity={item.quantity}
                key={`${item.name}${item.quantity}`}
              />
            ))}
          </ul>
          <Btn value="Wyczyść" clickMethod={clearUl} styles="m-10" />
        </>
      ) : null}
    </div>
  );
};
