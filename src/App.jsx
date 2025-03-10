import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './components/home.'
import NavBar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
