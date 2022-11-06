import ResultSection from './ResultSection';
import ItemsSection from './ItemSection/ItemsSection';
import TitleSection from './TitleSection';
import { ItemProvider } from '../context/ItemContext';

export default function Main() {
  return (
    <div className="w-4/5 h-screen bg-black bg-opacity-70  flex  flex-wrap">
      <TitleSection />
      <ItemProvider>
        <ItemsSection />
        <ResultSection />
      </ItemProvider>
    </div>
  );
}
