import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
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


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>                
      <SellingService/>
      <Services/>             
      <ServiceDetail/>
      <Pricing/>
      <Advantageous/>
      <Testimonials/>
      <About/>
      <News />
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
