import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
      }
    
      return children;
};

export default PrivateRoute;