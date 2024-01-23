import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';
import Login from './components/Login/Login';
import Registration from './components/Registration/OwnerRegistration';
import Navigation from './components/Navigation/Navigation';
import { action as logoutAction } from './components/Login/Logout';
import { cheackAuthLoader, idLoader } from './util/auth';
import AddItem from './components/Item/AddItem';
import Items from './components/Item/Items';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    id: 'root',
    children: [
      {
        index: true,
        element: <Items />,
      },
      {
        path: 'odashboard',
        element: <OwnerDashboard />,
        loader: cheackAuthLoader,
      },
      {
        path: 'additem',
        element: <AddItem />,
        loader: cheackAuthLoader,
      },
    ],
  },
  {
    path: 'ologin',
    element: <Login />,
    loader: idLoader,
  },
  {
    path: 'oregister',
    element: <Registration />,
  },
  {
    path: 'logout',
    action: logoutAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
