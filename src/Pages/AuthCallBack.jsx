import { useCreateMyUser } from "../http";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { user, isLoading, isAuthenticated } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
      navigate("/dashboard"); // Navigate to a protected page after successful login
    } else if (!isAuthenticated && !isLoading) {
      navigate("/login"); // Redirect to login if the user is not authenticated
    }
  }, [createUser, navigate, user, isAuthenticated, isLoading]);

  return <div>Loading...</div>; // Simple fallback UI while loading
};

export default AuthCallback;
