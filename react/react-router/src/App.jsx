
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
function App() {

  return (
    <>


      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
    

      </Routes>



    </>
  )
}

export default App
