import 'tailwindcss/tailwind.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ItemProvider } from './context/ItemContext';

import './App.css';

const bgUrl = "bg-[url('~/assets/img.png')]";

export const App = () => (
  <div
    className={`w-screen min-h-screen  bg-cover bg-center bg-fixed flex flex-col items-center ${bgUrl} scroll`}
  >
    <ItemProvider>
      <Header title="PANGEA2YT-CALC" />
      <Main />
    </ItemProvider>
  </div>
);
