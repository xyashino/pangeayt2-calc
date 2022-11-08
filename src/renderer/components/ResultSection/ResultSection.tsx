import { SyntheticEvent, useContext, useState } from 'react';
import Btn from '../common/Btn';
import { ItemContext } from '../../context/ItemContext';
import { Loader } from '../common/Loader/Loader';
import {ItemDataResponse } from '../../../types/item-data';
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
    localStorage.setItem('items', JSON.stringify(items));
    setResultItems(null);
    setLoader(true);
    const test = await window.electron.blenderVersion(
      'request-get-prices',
      items
    );
    localStorage.setItem('item', JSON.stringify(items));
    setResultItems(test);
    setLoader(false);
  };
  const renderTitle = (responseItems: ItemDataResponse[] | null) => {
    const styles = 'font-bold text-white text-center p-5 uppercase text-3xl';
    if (responseItems === null) return null;

    const sumPrice: number = parseFloat(
      responseItems
        .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
        .toString()
    );
    return sumPrice === 0 ? (
      <h2 className={styles}>Brak wyników</h2>) : (<h2 className={styles}> Łącznie: {sumPrice} B</h2>);
  };
  return (
    <div className="w-1/2 col-span-1 py-5 px-10 ">
      <Btn value="Szukaj" styles="h-16 w-full" clickMethod={click}/>
      {isLoading ? <Loader text="Pobieranie danych..." /> : null}
      {renderTitle(resultItems)}
      {resultItems && resultItems.length !== 0 ? <ResultTable items={resultItems} /> : null}
    </div>
  );
}
