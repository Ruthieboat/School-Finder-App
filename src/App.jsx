import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Landing from './pages';
import RootLayout from './layouts/rootLayout';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;

}

export default App;