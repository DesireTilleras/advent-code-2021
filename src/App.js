
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import DayOne from './DayOne';
import Home from './Home';
import DayTwo from './DayTwo';
import DayThree from './DayThree';

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
          <Routes>
            <Route path="/dayTwo" element={<DayTwo />} />
          </Routes>
          <Routes>
            <Route path="/dayThree" element={<DayThree />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
