import { ItemDataResponse } from '../../types/item-data';
import { ResultRow } from './ResultRow';

interface Props {
  items: ItemDataResponse[];
}

export const ResultTable = ({ items }: Props) => {
  return (
    <table className=" mt-2  p-20 text-white uppercase">
      <thead className="p-3 bg-black bg-opacity-90 text-center border-1">
        <tr>
          <th className="p-5">Nazwa Przedmiotu</th>
          <th className="p-5">Cena za sztuke</th>
          <th className="p-5">Ilosc Sztuk</th>
          <th className="p-5">Razem</th>
        </tr>
      </thead>
      <tbody className="text-center font-bold">
        {items.length === 0 ? (
          <h2>Brak Wyników</h2>
        ) : (
          items.map((item) => <ResultRow item={item} key={item.name}  tailwindStyles="p-5 bg-opacity-70 bg-red-600 border-solid border-2 border-red-700"/>)
        )}
      </tbody>
    </table>
  );
};
