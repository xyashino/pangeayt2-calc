import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Btn } from '../common/Btn';
import { ItemContext } from '../../context/ItemContext';
import { Loader } from '../common/Loader/Loader';
import { ItemDataResponse } from '../../../types/item-data';
import { ResultTable } from './ResultTable';

export const ResultSection = () => {
  const [isLoading, setLoader] = useState(false);
  const [resultItems, setResultItems] = useState<
    ItemDataResponse[] | [] | null
  >(null);

  const { items } = useContext(ItemContext);

  useEffect(() => {
    if (items.length === 0) setResultItems(null);
  }, [items]);

  const click = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    localStorage.setItem('items', JSON.stringify(items));
    setResultItems(null);
    setLoader(true);
    const test =await window.electron.getPrices('request-get-prices', items);
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
        .toFixed(2)
    );
    return sumPrice === 0 ? (
      <h2 className={styles}>Brak wyników</h2>
    ) : (
      <h2 className={styles}> Łącznie: {parseFloat(sumPrice)} B</h2>
    );
  };
  return (
    <div className="w-full col-span-1 py-5 px-10 flex flex-col items-center lg:w-3/5 ">
      <Btn value="Szukaj" styles="h-16 w-4/5" clickMethod={click} />
      {isLoading ? <Loader text="Pobieranie danych..." /> : null}
      {renderTitle(resultItems)}
      {resultItems && resultItems.length !== 0 ? (
        <ResultTable items={resultItems} />
      ) : null}
    </div>
  );
};
