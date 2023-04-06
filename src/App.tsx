import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import TempleProvider from '@/contexts/Temple/TempleProvider';
import SearchProvider from './contexts/Search/SearchProvider';
import FilterProvider from './contexts/Filter/FilterProvider';

function App() {
  return (
    <>
      {/* I don't know where to put this. 😢 */}
      <TempleProvider>
        <FilterProvider>
          <SearchProvider>
            <RouterProvider router={router} />
          </SearchProvider>
        </FilterProvider>
      </TempleProvider>
    </>
  );
}

export default App;
