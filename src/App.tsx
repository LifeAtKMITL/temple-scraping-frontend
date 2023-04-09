import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import SpeedDial from './components/SpeedDial';
import FilterProvider from './contexts/filter/FilterProvider';
import SearchProvider from './contexts/search/SearchProvider';
import TempleProvider from './contexts/temple/TempleProvider';

function App() {
  return (
    <BrowserRouter>
      <TempleProvider>
        <FilterProvider>
          <SearchProvider>
            <Routes />
            <SpeedDial />
          </SearchProvider>
        </FilterProvider>
      </TempleProvider>
    </BrowserRouter>
  );
}

export default App;
