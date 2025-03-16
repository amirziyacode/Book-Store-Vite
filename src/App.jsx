import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './components/home.'
import NavBar from './components/Navbar'
import Login from './components/Login';
import SingUp from './components/SignUp';
import Bookdetails from './components/Bookdetails';
import Bookstore from './components/BookStore';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Profile from './components/myAccount/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <Route path="/login" element={<Login/>} />
          <Route path='/singUp' element={<SingUp/>}/>
          <Route path="/Bookdetails" element={<Bookdetails/>}/>
          <Route path='/BookStroes' element={<Bookstore/>}/>
          <Route path='/About Us' element={<Aboutus/>}/>
          <Route path="/Contact us" element={<Contactus/>}/>
          <Route path='/Account' element={<Profile/>}/>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
