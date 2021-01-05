import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const MenuCreateLivre = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem('access_token') ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/cnx', state: { from: props.location } }}
            />
          )
        }
      />
    );
  };
  export default MenuCreateLivre;