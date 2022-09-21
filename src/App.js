
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Shared/Navbar';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import PrivateRoute from './components/Login/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/appointment" element={
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
