import { Outlet, Navigate } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'

const PrivateRoutes = () => {
  let { isLoggedIn } = useAppContext()
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRoutes