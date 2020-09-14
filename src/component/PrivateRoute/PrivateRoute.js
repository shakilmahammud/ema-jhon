import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [logeedInUser,setLoggedInUser]=useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logeedInUser.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;