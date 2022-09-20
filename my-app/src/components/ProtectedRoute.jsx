import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem("token");
  const google = JSON.parse(localStorage.getItem("google"))

  // console.log(token,google);
  const navigate = useNavigate();

  if(token || google == true ){
    return children
  }
  else{
   return <Navigate to="/loginpage" replace={true} />
  }
}

export default ProtectedRoute