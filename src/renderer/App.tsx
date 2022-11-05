import 'tailwindcss/tailwind.css';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (
    <div className="bg-[url('~/assets/img.png')]">
      <Header title="Test" />
      <Main />
    </div>
  );
}
