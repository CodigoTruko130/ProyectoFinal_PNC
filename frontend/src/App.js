import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/Main';
import GuardView from './pages/GuardView/GuardMain';
import ScanQR from './pages/GuardView/ScanQR';
import RegisterVisit from './pages/GuardView/RegisterVisit';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GuardView/>}></Route>
          <Route path='/ScanQR' element={<ScanQR />}></Route>
          <Route path='/RegisterVisit' element={<RegisterVisit />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
