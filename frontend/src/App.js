import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginPage from './pages/login';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';



function App() {
  return (
    <>
      <OwnerDashboard />
    </>
  );
}

export default App;
