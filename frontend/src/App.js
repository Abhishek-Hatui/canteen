import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage/Home';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';
import Login from './components/Login/Login';
import Registration from './components/Registration/OwnerRegistration';
import Navigation from './components/Navigation/Navigation';
import { action as logoutAction } from './components/Login/Logout';
import { cheackAuthLoader, idLoader } from './util/auth';
import AddItem from './components/AddItemPage/AddItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    id: 'root',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'odashboard',
        element: <OwnerDashboard />,
        loader: cheackAuthLoader,
      },
      {
        path: 'additem',
        element: <AddItem />
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
    action: logoutAction
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
