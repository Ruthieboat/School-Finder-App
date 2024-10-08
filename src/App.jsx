import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Landing from './pages';
import RootLayout from './layouts/rootLayout';
import Contact from './pages/contact';
import PresentPage from './pages/presentPage';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import FullSchool from './pages/presentPage/components/fullSchool';
import { toast } from 'react-toastify';
import { Loader } from 'lucide-react';




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
        { path: "/schools", element: <PresentPage /> },
      ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/details", element: <FullSchool /> },
  ]);

  return <RouterProvider router={router} />;

}

export default App;