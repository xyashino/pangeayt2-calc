import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { ItemData } from '../../types/item-data';

interface Props {
  children: ReactNode;
}
interface Item {
  items: [] | ItemData[];
  setItems: Dispatch<SetStateAction<[] | ItemData[]>>;
}

const initialValue: Item = {
  items: [],
  setItems: () => {},
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
