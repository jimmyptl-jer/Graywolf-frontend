import { Link } from 'react-router-dom'
import GrayWolf from '../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react';


const Login = () => {

  const { loginWithRedirect } = useAuth0()

  return (
    <div className="min-h-screen mt-10">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 items-center flex-col justify-center">
          <img
            src={GrayWolf}
            alt="Logo"
            className="w-50 h-50 object-contain justify-center"
          />
          <p className='text-white font-bold text-center mt-2'>
            Welcome to My Community!
            <span className='block text-white font-normal'>
              Let create, inspire, and build a supportive community where ideas thrive. Welcome aboard!
            </span>
          </p>
        </div>

        <div className="flex-1">
          <h2>Login</h2>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={() => loginWithRedirect()}>Log in with Auth0</button>
          <div className='flex gap-2 text-sm font-bold mt-5'>
            <span>Want to create account?</span>
            <Link to='/register' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { useAuth0 } from '@auth0/auth0-react';

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <button
//       className="btn btn-primary btn-block"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
// };

// export default LoginButton;


// import { Link } from 'react-router-dom';
// import GrayWolf from '../assets/logo.png';
// import { useAuth0 } from '@auth0/auth0-react';  // Import the useAuth0 hook

// const Login = () => {
//   // Destructure relevant methods from useAuth0 hook
//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();

//   if (isAuthenticated) {
//     // If the user is authenticated, you can display a welcome message or redirect them
//     return <div>Welcome, {user.name}!</div>;
//   }

//   return (
//     <div className="min-h-screen mt-10">
//       <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
//         <div className="flex-1 items-center flex-col justify-center">
//           <img
//             src={GrayWolf}
//             alt="Logo"
//             className="w-50 h-50 object-contain justify-center"
//           />
//           <p className="text-white font-bold text-center mt-2">
//             Welcome to My Community!
//             <span className="block text-white font-normal">
//               Let create, inspire, and build a supportive community where ideas thrive. Welcome aboard!
//             </span>
//           </p>
//         </div>

//         <div className="flex-1">
//           <button
//             onClick={() => loginWithRedirect()}  // Trigger login with Auth0
//             className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
//           >
//             Log In with Auth0
//           </button>

//           <div className="flex gap-2 text-sm font-bold mt-5">
//             <span>Want to create account?</span>
//             <Link to="/register" className="text-blue-500">
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
