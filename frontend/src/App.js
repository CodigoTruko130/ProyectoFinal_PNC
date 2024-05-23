import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
