
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Shared/Navbar';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
      </Routes>
    </div>
  );
}

export default App;
