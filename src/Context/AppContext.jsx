import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toast from '../Components/Toast';
import { useCookies } from 'react-cookie';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const [cookies] = useCookies(['access_token']);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  useEffect(() => {
    // Check if access_token cookie is present
    if (cookies.access_token) {
      console.log(cookies.access_token)
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies]);
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn, // Provide setter function to update isLoggedIn
        showToast
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {children}
    </AppContext.Provider >
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}
