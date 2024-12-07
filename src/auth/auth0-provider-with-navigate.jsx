import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || "grwaywolf.us.auth0.com";
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || "xnEv6vArDWq8DqrWRYMvC0yrOEmEo3xS";
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI;

  const navigate = useNavigate();

  const onRedirectCallback = (appState, user) => {
    console.log("User", user)
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
