import './App.css';
import './Styles/custom.css';
import { MainRoutes } from './Routes/MainRoutes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={MainRoutes} />;
}

export default App;
