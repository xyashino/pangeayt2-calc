import { ReactNode, SyntheticEvent } from 'react';
import { Btn } from './Btn';

interface Props {
  children: ReactNode;
  click: (event: SyntheticEvent) => void;
}

export const Modal = ({ children, click }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-80"
    >
      <div className="relative flex flex-col items-center bg-red-600 bg-opacity-80 w-3/5 h-4/5 rounded-3xl p-10 xs:w-4/5 overflow-y-scroll">
        <Btn
          value="✕"
          offStyles
          styles="absolute top-12 right-20 border- border-black text-4xl font-bold "
          clickMethod={(e) => click(e)}
        />
        {children}
      </div>
    </div>
  );
};
