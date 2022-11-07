import { SyntheticEvent, useContext, useState } from 'react';
import Btn from '../common/Btn';
import { ItemData } from '../../../types/item-data';
import { ItemContext } from '../../context/ItemContext';

export default function AddItem() {
  const { items, setItems } = useContext(ItemContext);
  const [itemExist, setItemExist] = useState<boolean>(false);
  const [data, setData] = useState<ItemData>({
    name: '',
    quantity: 1,
  });

  const updateStateData = (key: string, value: string | number) => {
    setItemExist(false);
    setData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const addItemIntoGlobalContext = (e: SyntheticEvent) => {
    e.preventDefault();
    if (data.name === '' || data.quantity < 1) return;
    if (
      items.some((item) => item.name.toLowerCase() === data.name.toLowerCase())
    ) {
      setItemExist(true);
      return;
    }

    setItems((prev) => [...prev, data]);
    setData({
      name: '',
      quantity: 1,
    });
  };

  return (
    <form
      className="w-full "
      onSubmit={(e: SyntheticEvent) => addItemIntoGlobalContext(e)}
    >
      <h2 className="text-white font-bold text-2xl">Dodaj Przedmiot:</h2>
      <div className="flex items-center border-b border-red-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-slate-50 mr-3 py-1 px-2 leading-tight focus:outline-none w-2/4 font-bold"
          type="text"
          placeholder="Nazwa Przedmiotu"
          value={data.name}
          name="name"
          onChange={(e) => updateStateData(e.target.name, e.target.value)}
        />
        <input
          className="appearance-none bg-transparent border-none w-full text-red-50 mr-3 py-1 px-2 leading-tight focus:outline-none w-1/4 font-bold"
          type="number"
          placeholder="Szt"
          value={data.quantity}
          name="quantity"
          onChange={(e) => updateStateData(e.target.name, +e.target.value)}
        />
        <Btn value="dodaj" styles="w-1/4" />
      </div>
      {itemExist ? (
        <p className="uppercase italic font-bold text-red-500">
          Podany Przedmoit już istnieje !!!
        </p>
      ) : null}
    </form>
  );
}
