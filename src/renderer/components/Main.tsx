import { ResultSection } from './ResultSection/ResultSection';
import { ItemsSection } from './ItemSection/ItemsSection';
import { TitleSection } from './TitleSection';

export const Main = () => (
  <div className="w-full h-auto bg-black bg-opacity-80  flex  flex-wrap px-20 flex-col lg:flex-row ">
    <TitleSection />
    <ItemsSection />
    <ResultSection />
  </div>
);
