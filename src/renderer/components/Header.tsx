import { SyntheticEvent, useContext } from 'react';
import logo from '../../../assets/icon.png';
import Btn from './common/Btn';
import { ItemContext } from '../context/ItemContext';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  const { setItems } = useContext(ItemContext);

  const changeContext = (e: SyntheticEvent) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('items') as string);
    setItems(items);
  };
  return (
    <header className="w-screen bg-red-500  p-2 flex justify-between">
      <div className="flex items-center pl-10">
        <img
          src={`${logo}`}
          alt="app logo"
          draggable="false"
          className="h-20"
        />
        <h1 className="font-bold uppercase text-3xl text-white block">
          {title}
        </h1>
      </div>
      <Btn
        value="Ostatnie wyszukiwanie"
        styles="mr-20"
        clickMethod={changeContext}
      />
    </header>
  );
}
