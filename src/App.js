
import './App.css';
import Header from './Header/Header';
//import About from './Aboutlorem/About';
//import Whatwe from './whatwedo/Whatwe';
//import Webinar from './webinars/Webinar';
//import Ourlatestnews from './latestnews/Ourlatestnews';
import Footer from './footer/Footer';
import { Routes,Route } from "react-router-dom";
import Home from './Header/Home'
import Aboutus from './Header/Aboutus'
import Services from './Header/Services'
import News from './Header/News'
import Web from './Web/Web';


function App() {
  return (
    
    <div className="App">
 <Header />
      {/* <About />
      <Whatwe />
      <Webinar />
      <Ourlatestnews />*/}
    <Footer />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
      <Web />
      
    </div>
    
  );
}

export default App;
