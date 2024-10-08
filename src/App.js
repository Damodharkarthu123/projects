import logo from './logo.svg';
import './App.css';
import Phone from './iphone/Phone';
import Home from './home/Home';
import { Route, Routes,route } from 'react-router-dom';
import Firstpage from './home/Firstpage';
import Secondpage from './home/Secondpage';
import Thirdpage from './home/Thirdpage';
import Fourthpage from './home/Fourthpage';
import Fifthpage from './home/Fifthpage';

function App() {
  return (
    <div className="App">
      {/*<Phone /> */}
      <Home />
      <Routes>
      <Route path='abcd' element = {<Firstpage />} />
      <Route path='abcde' element = {<Secondpage />} />
      <Route path='abcdef' element = {<Thirdpage />} />
      <Route path=',abcdefg' element ={<Fourthpage />} />
      <Route path=',abcdefgh' element ={<Fifthpage />} />

      </Routes>
     
     <Firstpage />
     <Secondpage />
     <Thirdpage />
     <Fourthpage />
     <Fifthpage />
    </div>
  );
}

export default App;
