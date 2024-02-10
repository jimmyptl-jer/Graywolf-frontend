import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing the Home, About, SignIn, SignUp, Dashboard components
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Project from './Pages/Project'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* Using the Routes component to define the different routes for the application */}
      <Routes>
        {/* Defining the root route that displays the Home component */}
        <Route path='/' element={<Home />} />
        {/* Defining the about route that displays the About component */}
        <Route path='/about' element={<About />} />
        {/* Defining the dashboard route that displays the Dashboard component */}
        <Route path='/contact' element={<Contact />} />

        <Route path='/project' element={<Project />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

// Exporting the App component for use in other parts of the application
export default App