import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/admin-view/Login';
import Registro from './pages/admin-view/Registro';
import Main from './pages/admin-view/Main';
import Invitation from './pages/admin-view/Invitation';
import Members from './pages/admin-view/Members';
import Search from './pages/admin-view/Search';
import Family from './pages/admin-view/Family';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/invitation' element={<Invitation/>}></Route>
          <Route path='/members' element={<Members/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/family' element={<Family/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
