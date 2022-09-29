
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Login/Register';

function App() {
  return (
    <div className="App">
  <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<Register/>}/>
  </Routes>
    </div>
  );
}

export default App;
