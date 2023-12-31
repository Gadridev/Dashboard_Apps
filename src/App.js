
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import '../src/style/mode.scss'

function App() {
  return (
    <div className='dark'>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index  element={<Home/>} />
        <Route path='login'  element={<Login/>} />
        <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New  />} />
        </Route>
        <Route path="product">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>

      
  

  );
}

export default App;
