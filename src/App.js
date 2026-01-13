import logo from './logo.svg';
import './App.css';
import './main.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import OurWork from './Pages/OurWork';
import ActiveProgramm from './Pages/ActiveProgramm';

// Create router
const router = createBrowserRouter([
  { path: "/", element: <Home />,},
  { path: "our-wrok", element: <OurWork />,},
   { path: "active-programm", element: <ActiveProgramm/>,},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
