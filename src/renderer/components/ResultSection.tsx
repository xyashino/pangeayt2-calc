import { SyntheticEvent, useContext, useState } from 'react';
import Btn from './common/Btn';
import { ItemContext } from '../context/ItemContext';
import { Loader } from './common/Loader/Loader';
import { ItemData, ItemDataResponse } from '../../types/item-data';
import { ResultTable } from './ResultTable';

export default function ResultSection() {
  const [isLoading, setLoader] = useState(false);
  const [resultItems, setResultItems] = useState<
    ItemDataResponse[] | [] | null
  >(null);

  const { items } = useContext(ItemContext);

  const click = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setResultItems(null);
    setLoader(true);
    const test = await window.electron.blenderVersion(
      'request-get-prices',
      items
    );
    console.log(test);
    setResultItems(test);
    setLoader(false);
  };
  return (
    <div className="w-1/2 col-span-1 py-5 px-10 ">
      <Btn value="Szukaj" styles="h-16 w-full" clickMethod={click} />
      {isLoading ? <Loader text="Pobieranie danych..." /> : null}
      {resultItems ? (
        <h2 className="font-bold text-white text-center p-5 uppercase text-3xl">
          Łącznie:
          {` ${resultItems
            .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
            .toFixed(2)}B`}
        </h2>
      ) : null}
      {resultItems ? <ResultTable items={resultItems} /> : null}
    </div>
  );
}
