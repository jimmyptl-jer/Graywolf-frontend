import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Register from './Pages/Register';
import PrivateRoute from './Components/PrivateRoute';


import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import AddProject from './Pages/AddProject';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* Use PrivateRoute for the Dashboard */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-post' element={<AddProject />} />
          <Route path='/add-project' element={<AddProject />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
