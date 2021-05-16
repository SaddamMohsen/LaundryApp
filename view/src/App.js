import React,{useState,usEffect} from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import LOGIN from "./pages/login";

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Dashboard from "./pages/newPage";
import { auth } from './firebase';

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
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

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
};
const App = () => {
	const [authenticated,setAuth]=useState(false)
	const [loading,setLoading] = useState(false)
	  /*usEffect(()=>{
		  auth().onAuthStateChanged((user) => {
      if (user) {
       
          setAuth(true)
          setLoading(false)
    
      } else {
        setAuth(false)
          setLoading(false)
      }
    })
	  },[])*/
	  
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LOGIN}/>
          <PrivateRoute  path ='/newpage' authenticated={authenticated} component={Dashboard}/>
        </Switch>
      </Router>
      </MuiThemeProvider>
  );
};

export default App;
