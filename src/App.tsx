import FilterProvider from './contexts/filter/FilterProvider';
import { RouterProvider } from 'react-router-dom';
import SearchProvider from './contexts/search/SearchProvider';
import TempleProvider from './contexts/temple/TempleProvider';
import { router } from './routes';

function App() {
  return (
    <TempleProvider>
      <FilterProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </FilterProvider>
    </TempleProvider>
  );
}

export default App;
