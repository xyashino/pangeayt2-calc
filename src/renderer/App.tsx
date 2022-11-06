import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const bgUrl = "bg-[url('~/assets/img.png')]";

export default function App() {
  return (
    <div
      className={`w-screen h-screen bg-cover bg-center bg-fixed flex flex-col items-center ${bgUrl}`}
    >
      <Header title="PANGEA2YT-CALC" />
      <Main />
    </div>
  );
}
