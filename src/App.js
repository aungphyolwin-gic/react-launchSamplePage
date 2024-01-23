import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar';
import Home from './Home';
import Features from './Features';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import Pricing from './Pricing';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features></Features>
      <Services/>
      <ServiceDetail/>
      <Pricing/>
    </div>
  );
}

export default App;
