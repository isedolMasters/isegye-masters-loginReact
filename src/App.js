import logo from './logo.svg';
import './App.css';
import Callback from './pages/Callback';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path = '/' element = {<Main></Main>} />
          <Route exact path = '/loginClient/login' element = {<Login></Login>} />
          <Route path= '/loginClient/callback' element={<Callback></Callback>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
