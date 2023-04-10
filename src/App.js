import './App.css';
import Calculator from './calc';
import { BrowserRouter as Router, Routes, Link,Route } from 'react-router-dom';
import Home from './home';
import Axios from './axios';
import { type } from '@testing-library/user-event/dist/type';
function App() {
  return (
  <Router>
    <div className='naxc'>
    <ul className="header">
              <li>
                <Link to="/" style={{color:"black"}}>Home</Link>
              </li>
              <li>
                <Link to="/calc" style={{color:"black"}}>Calculator</Link>
              </li>
              <li>
                <Link to="/axios" style={{color:"black"}}>Axios</Link>
              </li>
            </ul>
    
  <Routes>
 
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/calc' element={< Calculator />}></Route>
    <Route exact path='/axios' element={< Axios />}></Route>
    </Routes>
    </div>
    </Router>
  );
    
}

export default App;