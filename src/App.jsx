import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';

import Dashboard from './Pages/Dashboard';
import AddProject from './Pages/AddProject';

const App = () => {
  return (
    <>
      {/* You already have BrowserRouter in main.jsx, no need to wrap again */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Private route for Dashboard and Add Project */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-project" element={<AddProject />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
