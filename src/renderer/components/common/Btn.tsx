import { SyntheticEvent } from 'react';

interface Props {
  value: string;
  styles?: string;
  clickMethod?: (event: SyntheticEvent) => void;
}

export default function Btn({ value, styles, clickMethod }: Props) {
  return (
    <button
      className={` flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm  font-bold uppercase border-4 text-white py-1 px-2 rounded ${
        styles ?? ''
      }`}
      onClick={(e) => (clickMethod ? clickMethod(e) : null)}
    >
      {value}
    </button>
  );
}
