import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';
import Login from './components/Login/Login';
import Registration from './components/Registration/OwnerRegistration';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Login/Profile';
import { cheackAuthLoader, idLoader, logout as logoutAction } from './util/auth';
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
        
      },
      {
        path: 'oprofile',
        element: <Profile />,
        loader: cheackAuthLoader,
      }
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
