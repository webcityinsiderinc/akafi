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
import WaysToGive from './Pages/WaysToGive';
import Partner from './Pages/Partner';
import Volunter from './Pages/Volunter';
import StoryMission from './Pages/StoryMission';

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
  { path: "way-to-give", element: <WaysToGive/>,},
  { path: "partner", element: <Partner/>,},
  { path: "volunter", element: <Volunter/>,},
  { path: "story-mission", element: <StoryMission/>,},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
