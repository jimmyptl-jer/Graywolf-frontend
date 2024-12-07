import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithNavigate = ({ children }) => {
  const domain = "grwaywolf.us.auth0.com";
  const clientId = "xnEv6vArDWq8DqrWRYMvC0yrOEmEo3xS";
  const redirectUri = "https://jimmypatel.tech";

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
