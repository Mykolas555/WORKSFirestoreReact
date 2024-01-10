import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Works from '../works/Works';
import AddWork from '../addWork/AddWork';
import Register from '../register/Register';
import Login from '../login/Login';
import Reset from '../reset/Reset';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../home/Home';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/addWork" element={<AddWork />} />
          <Route path="/update-work/:id" element={<AddWork />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
