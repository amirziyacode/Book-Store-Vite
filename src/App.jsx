import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './components/home.'
import NavBar from './components/Navbar'
import Login from './components/Login';
import SingUp from './components/SignUp';
import Bookdetails from './components/Bookdetails';
import Bookstore from './components/BookStore';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <Route path="/login" element={<Login/>} />
          <Route path='/singUp' element={<SingUp/>}/>
          <Route path="/bookDetails" element={<Bookdetails/>}/>
          <Route path='/bookstore' element={<Bookstore/>}/>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
