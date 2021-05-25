// Material UI components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

//import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
//import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import React, { useState,useEffect } from "react";

import { compose } from 'redux';

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

//import history from "../utils/history";
import {  validateLoginData } from "../utils/validators";
import { login } from "../store/reducer/auth.reducer";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    marginTop: 10,
  },
  progess: {
    position: "absolute",
  },
});

const LOGIN = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = styles;
  
  
  
    const redirect=()=>{
       props.history.push('/');
        }
    
 useEffect(()=>{
    if (props.isAuthenticated === true) {
         redirect()
    } 
   
  },[props.isAuthenticated])
  useEffect(()=>{
    setLoading(false)
  },[props.error])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors([]);
    const data = {
      email: email,
      password: password,
    };
    
    const { valid, errors } = validateLoginData(data);
    if (!valid) 
    {  
      setErrors(errors);
      setLoading(false);
      return 
    }
    
     await props.login(email, password)
   
    
  };
  


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={error.email}
            error={error.email ? true : false}
            onChange={({ target }) => setEmail(target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={error.password}
            error={error.password ? true : false}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={loading || !email || !password}
          >
            Sign In
            {loading && (
              <CircularProgress size={30} className={classes.progess} />
            )}
          </Button>

          {error.notEmail && (
            <Typography variant="body2" className={classes.customError}>
              {error.notEmail}
            </Typography>
          )}
            {props.error && (
            <Typography variant="body2" className={classes.customError}>
              {props.error}
            </Typography>
          )}
         
        </form>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  const { error, loaded, user,isAuthenticated } = state.auth;
  return {
    error,
    loaded,
    user,
    isAuthenticated,
  };
};
const mapStateToDispatch = {
  login,
};
export default withStyles(styles)(compose(withRouter,
  connect(mapStateToProps, mapStateToDispatch))(LOGIN)
);
