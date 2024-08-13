import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Landing from './pages';
import RootLayout from './layouts/rootLayout';
import Contact from './pages/contact';
import PresentPage from './pages/presentPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        { path: "/contact", element: <Contact /> },
        { path: "/present", element: <PresentPage /> },
      ]
    }
  ]);
  return <RouterProvider router={router} />;

}

export default App;