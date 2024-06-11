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

/* SE BORRAN DESPUES */
import ScanQRA from './pages/admin-view/ScanQRAdmin';
import ListOfVisitsAdmin from './pages/admin-view/ListOfVisits';

import OwnerView from './pages/family-owner-view/OwnerMain'
import FamilyOwner from './pages/family-owner-view/Family';
import OwnerEditMembers from './pages/family-owner-view/Members';
import OwnerInv from './pages/family-owner-view/Invitation';
import OwnerSearch from './pages/family-owner-view/Search';

import MemberMain from './pages/family-member-view/MemberMain';
import MemberInv from './pages/family-member-view/Invitation';

import UserMain from './pages/user-view/UserMain';
import RequestVisit from './pages/user-view/RequestVisit';

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

          <Route path='/OwnerView' element={<OwnerView />}></Route>
          <Route path='/FamilyOwner' element={<FamilyOwner />}></Route>
          <Route path='/OwnerEditM' element={<OwnerEditMembers />}></Route>
          <Route path='/OwnerInv' element={<OwnerInv />}></Route>
          <Route path='/OwnerSearch' element={<OwnerSearch/>}></Route>

          <Route path='/MemberView' element={<MemberMain />}></Route>
          <Route path='/MemberInv' element={<MemberInv />}></Route>

          <Route path='/UserView' element={<UserMain />}></Route>
          <Route path='/RequestVisit' element={<RequestVisit />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
