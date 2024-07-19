
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import AboutPage from './Pages/AboutPage/AboutPage'
import PackagesPage from './Pages/PackagesPage/PackagesPage'
import ServicePage from './Pages/ServicePage/ServicePage'





function App() {

  return (
    <>

      <NavBar menu={[{ title: "home", path: "/" }, { title: "about", path: "/about" }, { title: "Packages", path: "/packages" }, { title: "services", path: "/services" }]} />
      <Routes>
        <Route path='/' element={< HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/packages' element={<PackagesPage />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
