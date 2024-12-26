import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import AuthCallback from './Pages/AuthCallBack';
import Dashboard from './Pages/Dashboard';
import AddProject from './Pages/AddProject';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-callback" element={<AuthCallback />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-project" element={<AddProject />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
