import logo from './logo.svg';
import './App.css';
import './main.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import OurWork from './Pages/OurWork';
import ActiveProgramm from './Pages/ActiveProgramm';
import OrphanSupportProgramm from './Pages/OrphanSupportProgramm';
import WomenCommunity from './Pages/WomenCommunity';
import WidowsFund from './Pages/WidowsFund';
import OurImpact from './Pages/OurImpact';
import Donate from './Pages/Donate';
import DonateMonthely from './Pages/DonateMonthely';

// Create router
const router = createBrowserRouter([
  { path: "/", element: <Home />,},
  { path: "our-wrok", element: <OurWork />,},
  { path: "active-programm", element: <ActiveProgramm/>,},
  { path: "orphan-support-programm", element: <OrphanSupportProgramm/>,},
  { path: "women-community", element: <WomenCommunity/>,},
  { path: "widows-fund", element: <WidowsFund/>,},
  { path: "our-impact", element: <OurImpact/>,},
   { path: "donate", element: <Donate/>,},
    { path: "donate-monthley", element: <DonateMonthely/>,},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
