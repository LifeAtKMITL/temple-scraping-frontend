import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import TempleProvider from './contexts/TempleProvider';

function App() {
  return (
    <>
      {/* I don't know where to put this. 😢 */}
      <TempleProvider>
        <RouterProvider router={router} />
      </TempleProvider>
    </>
  );
}

export default App;
