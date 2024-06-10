import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/auth-view/Login';
import Main from './pages/admin-view/Main';
import Invitation from './pages/admin-view/Invitation';
import Members from './pages/admin-view/Members';
import Search from './pages/admin-view/Search';
import Family from './pages/admin-view/Family';
import GuardView from './pages/GuardView/GuardMain';
import ScanQR from './pages/GuardView/ScanQR';
import RegisterVisit from './pages/GuardView/RegisterVisit';
import ListOfVisits from './pages/GuardView/ListOfVisits';
import GenerateQR from './pages/QR/GenerateQR';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import ScanQRA from './pages/admin-view/ScanQRAdmin';

import ListOfVisitsAdmin from './pages/admin-view/ListOfVisits';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
          <Route path='/Invitation' element={<Invitation/>}></Route>
          <Route path='/Members' element={<Members/>}></Route>
          <Route path='/Search' element={<Search/>}></Route>
          <Route path='/Family' element={<Family/>}></Route>
          <Route path='/GuardView' element={<GuardView/>}></Route>
          <Route path='/ScanQR' element={<ScanQR />}></Route>
          <Route path='/RegisterVisit' element={<RegisterVisit />}></Route>
          <Route path='/ListOfVisits' element={<ListOfVisits />}></Route>
          <Route path='/GenerateQR' element={<GenerateQR />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/EditProfile' element={<EditProfile />}></Route>

          {/* DESPUES SE BORRA */}
          <Route path='/ScanQRA' element={<ScanQRA />}></Route>
          <Route path='/ListOfVisitsA' element={<ListOfVisitsAdmin />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
