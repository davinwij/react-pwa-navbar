import './App.css';
import Navbar  from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
    </Router>
    </>
  );
}

export default App;
