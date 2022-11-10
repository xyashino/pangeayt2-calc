import { SyntheticEvent, useContext, useState } from 'react';
import { ItemData } from '../../../types/item-data';
import { Btn } from '../common/Btn';
import { ItemContext } from '../../context/ItemContext';

export const Item = ({ name: itemName, quantity }: ItemData) => {
  const { items, setItems } = useContext(ItemContext);
  const [toggleName, setToggleName] = useState(true);
  const [toggleQuantity, setToggleQuantity] = useState(true);

  const removeItem = (e: SyntheticEvent) => {
    e.preventDefault();
    const nameid = e.target.parentElement.getAttribute('nameid');
    setItems((prevState) => prevState.filter((item) => item.name !== nameid));
  };

  const changeRenderItem = (e: SyntheticEvent) => {
    e.preventDefault();

    const { value, name } = e.target as HTMLInputElement;

    if (name === 'name') {
      setToggleName(true);

      if (
        items.find((item) => item.name.toLowerCase() === value.toLowerCase()) ||
        value === ''
      )
        return;
      setItems((prevState) => {
        const foundItem = prevState.find((item) => item.name === itemName);
        if (!foundItem) return prevState;
        foundItem.name = value;
        return [...prevState];
      });
      return;
    }

    if (+value < 1) return;

    setItems((prevState) => {
      const foundItem = prevState.find((item) => item.name === itemName);
      if (!foundItem) return prevState;
      foundItem.quantity = +value;
      return [...prevState];
    });

    setToggleQuantity(true);
  };

  const checkEnterWasClicked = (e: KeyboardEvent) => {
    if (e.key === 'Enter') changeRenderItem(e);
  };

  return (
    <li
      className="flex items-center justify-around text-white font-bold mt-5 uppercase "
      nameid={itemName}
    >
      {toggleName ? (
        <p
          className="w-2/4 p-5 cursor-pointer"
          onDoubleClick={() => setToggleName(false)}
        >
          {itemName}
        </p>
      ) : (
        <input
          className="appearance-none bg-transparent border-none  mr-3 py-1 px-2 focus:border-b-2 border-red-900 outline-none w-2/4 font-bold text-center"
          type="text"
          name="name"
          defaultValue={itemName}
          autoFocus
          onBlur={(e) => changeRenderItem(e)}
          onKeyDown={(e) => checkEnterWasClicked(e)}
        />
      )}
      {toggleQuantity ? (
        <p
          className="w-1/8 p-5 cursor-pointer"
          onDoubleClick={() => setToggleQuantity(false)}
        >
          {quantity}
        </p>
      ) : (
        <input
          className="appearance-none bg-transparent border-none  mr-3 py-1 px-2 focus:border-b-2 border-red-900 outline-none w-2/4 font-bold text-center"
          type="number"
          name="quantity"
          autoFocus
          min="1"
          defaultValue={quantity}
          onBlur={(e) => changeRenderItem(e)}
          onKeyDown={(e) => checkEnterWasClicked(e)}
        />
      )}

      <Btn
        value="✕"
        offStyles
        styles="w-1/12 min-w-20px text-white text-2xl p-4 text-center hover:border-b-1"
        clickMethod={removeItem}
      />
    </li>
  );
};
