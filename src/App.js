
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Login/Register';

function App() {
  return (
    <div >
      <p className='text-5xl font-bold text-center'>hello </p>

      <LoginPage/>
  <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<Register/>}/>
  </Routes>
    </div>
  );
}

export default App;
