import { SyntheticEvent, useContext } from 'react';
import Btn from './common/Btn';
import { ItemContext } from '../context/ItemContext';

export default function ResultSection() {
  const { items } = useContext(ItemContext);
  const click = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(items);
  };
  return (
    <div className="w-1/2 col-span-1 py-5 px-10 ">
      <Btn value="Szukaj" styles="h-16 w-full" clickMethod={click} />
    </div>
  );
}
