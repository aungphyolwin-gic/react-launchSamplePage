import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import Pricing from './Pricing';
import Advantageous from './Advantageous';
import Testimonials from './Testimonials';
import About from './About';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import SellingService from './SellingService';
import Header from './Header';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header/><Home/> <Footer/></>,
  },
  {
    path: "/selling",
    element: <SellingService/>,
  },
  {
    path: "/service",
    element: <Services/>,
  },
  {
    path: "/feature",
    element: <><Header/><ServiceDetail/><Footer/></>,
  },
  {
    path: "/price",
    element:<><Header/><Pricing/> <Footer/></>,
  },
  {
    path: "/advantageous",
    element: <><Header/><Advantageous/> <Footer/></> ,
  },
  {
    path: "/testimonials",
    element: <><Header/><Testimonials/> <Footer/></> ,
  },
  {
    path: "/about",
    element: <><Header/><About/> <Footer/></> ,
  },
  {
    path: "/news",
    element: <><Header/><News/> <Footer/></> ,
  },
  {
    path: "/contact",
    element: <><Header/><Contact/> <Footer/></> 
  },  

]);


function App() {
  return (
    
    <>
      
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
      
    </> 
    
  );
}

export default App;
