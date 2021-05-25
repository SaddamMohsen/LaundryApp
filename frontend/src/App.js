import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import React,{useState,useEffect} from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import LOGIN from "./pages/login";
import Dashboard from "./pages/newPage";
import history from "./utils/history";

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

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
   return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from:"/" } }}
          />
        )
      }
    />
  );
};
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
	//const [loading,setLoading] = useState(false)

	  useEffect(()=>{
      if(props.isAuthenticated===true)
      setAuth(props.isAuthenticated)
    },[props.isAuthenticated])
    
  return (
    <div id="root">
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          
          <PrivateRoute exact path ="/" authenticated={authenticated} component={Dashboard}/>
          <Route path="/login" component={LOGIN}/>
        </Switch>
      </Router>
      </MuiThemeProvider>
      </div>
  );
};
const mapStateToProps=(state)=>{
  const isAuthenticated = state.auth;
  return isAuthenticated;
}
export default connect(mapStateToProps,null)(App);
