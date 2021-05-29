import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

import React,{useState,useEffect} from "react";

import {
  Route,
   Router,
  Switch,
} from "react-router-dom";

import { connect } from "react-redux";

import LOGIN from "./pages/login";
import history from "./utils/history";
import Routes  from "./components/protectedRoute/config";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#FF5722',
			dark: '#d50000',
			contrastText: '#fff'
		}
	}
});


/*
const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};*/
const App = (props) => {
	const [authenticated,setAuth]=useState(props.isAuthenticated)
	

	  useEffect(()=>{
      if(props.isAuthenticated===true)
      setAuth(props.isAuthenticated)
    },[props.isAuthenticated])
    
  return (
   
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={LOGIN}/>
          {Routes.map(route => (
            <ProtectedRoute
              key={route.path}
              exact={route.exact}
              path={route.path}
              authenticated={authenticated}
              component={route.component()}
            />))
          }
          
         
        </Switch>
      </Router>
      </MuiThemeProvider>
      
  );
};
const mapStateToProps=(state)=>{
  const isAuthenticated = state.auth;
  return isAuthenticated;
}
export default connect(mapStateToProps,null)(App);
