import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/admin-view/Login';
import Registro from './pages/admin-view/Registro';
import Main from './pages/admin-view/Main';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
