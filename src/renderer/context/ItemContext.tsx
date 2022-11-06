import { createContext, Dispatch, ReactNode, useState } from 'react';
import { ItemData } from '../../types/item-data';

interface Props {
  children: ReactNode;
}
interface Item {
  items: [] | ItemData[];
  setItems: Dispatch<ItemData[] | []>;
}

const initialValue: Item = {
  items: [],
  setItems: (event: ItemData[]) => event,
};

export const ItemContext = createContext<Item>(initialValue);

export const ItemProvider = ({ children }: Props) => {
  const [items, setItems] = useState<[] | ItemData[]>([]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
