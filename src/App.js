
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import DayOne from './DayOne';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/dayOne" element={<DayOne />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
