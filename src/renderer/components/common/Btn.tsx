import { SyntheticEvent } from 'react';

interface Props {
  value: string;
  styles?: string;
  clickMethod?: (event: SyntheticEvent) => void;
  offStyles?: boolean;
}

export const Btn = ({ value, styles, clickMethod, offStyles }: Props) => (
  <button
    className={
      offStyles
        ? styles
        : ` flex-shrink-0 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700  font-bold uppercase border-4 text-white py-1 px-2 rounded ${
            styles ?? ''
          }`
    }
    onClick={(e) => (clickMethod ? clickMethod(e) : null)}
  >
    {value}
  </button>
);
