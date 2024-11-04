import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Types from './Components/Types';
import Monitor from './Components/Monitor';
import About from './Components/About';
import LoginSignup from './Components/LoginSignup'
import { UserContext } from './Context/Context';
function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-700 App headings">
      <div className='max-w-[1380px] m-auto'>
        <BrowserRouter>
        <UserContext.Provider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/digital" element={<Types/>}></Route>
          <Route path="/access" element={<Monitor/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/identity" element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
        </UserContext.Provider>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
