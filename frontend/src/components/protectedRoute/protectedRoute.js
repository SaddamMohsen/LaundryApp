import React from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";
import {LOG_IN }from '../../constants/routes'
const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  
    return (
     <Route
       {...rest}
       render={(props) =>
         authenticated === true ? (
           <Component {...props} />
         ) : (
           <Redirect
             to={LOG_IN}
           />
         )
       }
     />
   );
  };
  export default ProtectedRoute;