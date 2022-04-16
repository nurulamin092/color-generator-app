import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import Generator from './components/Generator/Generator';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Auth/Login/Login'
function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/generator' element={
          <RequireAuth>
            <Generator></Generator>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
