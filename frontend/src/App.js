import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/Main';
import GuardView from './pages/GuardView/GuardMain';
import ScanQR from './pages/GuardView/ScanQR';
import RegisterVisit from './pages/GuardView/RegisterVisit';
import ListOfVisits from './pages/GuardView/ListOfVisits';
import GenerateQR from './pages/QR/GenerateQR';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GuardView/>}></Route>
          <Route path='/ScanQR' element={<ScanQR />}></Route>
          <Route path='/RegisterVisit' element={<RegisterVisit />}></Route>
          <Route path='/ListOfVisits' element={<ListOfVisits />}></Route>
          <Route path='/GenerateQR' element={<GenerateQR />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
