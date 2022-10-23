
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login_local_storage/Login';
import Register from './pages/Login_local_storage/Register';

function App() {
  return (
    <div >
  <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
  </Routes>
    </div>
  );
}

export default App;
