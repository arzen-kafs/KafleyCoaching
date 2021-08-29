
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home' ;
import About from './About';
import ContactUs from './ContactUs'
import Services from './Services'
import Navbar from './Navbar'
import Footer from'./Footer'
import { BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={ContactUs}/>
      <Redirect to="/"></Redirect>
       
       </Switch>
       <Footer/>
  </BrowserRouter>
  
  );
}

export default App;
