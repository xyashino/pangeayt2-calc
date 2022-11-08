import ResultSection from './ResultSection/ResultSection';
import ItemsSection from './ItemSection/ItemsSection';
import TitleSection from './TitleSection';
import { ItemProvider } from '../context/ItemContext';

export default function Main() {
  return (
    <div className="w-4/5 h-auto bg-black bg-opacity-80  flex  flex-wrap">
      <TitleSection />
      <ItemsSection />
      <ResultSection />
    </div>
  );
}
