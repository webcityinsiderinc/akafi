import logo from './logo.svg';
import './App.css';
import './main.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';

// Create router
const router = createBrowserRouter([
  { path: "/", element: <Home />,},
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
