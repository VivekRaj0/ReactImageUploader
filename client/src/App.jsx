import { Routes, Route } from 'react-router-dom'
import './App.css'


import Header from './components/Header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import NoRoute from './pages/noRoute/NoRoute'


function App() {
 
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<NoRoute/>}/>
      </Routes>
    </>
  )
}

export default App
