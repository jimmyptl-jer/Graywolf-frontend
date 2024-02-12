import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Toast from '../Components/Toast';

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

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
