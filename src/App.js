import logo from './logo.svg';
import './App.css';
import About from './Aboutlorem/About';
import Whatwe from './whatwedo/Whatwe';
import Webinar from './webinars/Webinar';
import Ourlatestnews from './latestnews/Ourlatestnews';


function App() {
  return (
    <div className="App">
      <About />
      <Whatwe />
      <Webinar />
      <Ourlatestnews />
    </div>
  );
}

export default App;
