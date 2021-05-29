import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "@material-ui/core/Icon";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import React, { useState, useEffect } from "react";

import clsx from "clsx";

import { compose } from "redux";

import { connect } from "react-redux";

import { withRouter, Link as RoutLink } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { _logout } from "../../store/reducer/auth.reducer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        LaundryApp Dashboard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = (props) => {
  //const {user} = useSelector(state => state.auth.user);
  //const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    //console.log({user})
  };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

  useEffect(() => {
    if (props.isAuthenticated === false) {
      props.history.push("/login");
    }
  }, [props.isAuthenticated,props.history]);

  const logout = () => {
    props._logout();
  };

  const menuItems = [
    //{ label: 'Provider', path: "/home", icon: "supervisor_account" },
    { label: "Services", path: ROUTES.SERVICES, icon: "store" },
    { label: "Services Categories", path: "/organizations", icon: "category" },
    { label: "Policy", path: "/home", icon: "policy" },
    { label: "User", path: "/home", icon: "person" },
    { label: "Roles", path: "/home", icon: "assignment_ind" },
    { label: "Orders", path: "/home", icon: "add_shopping_cart" },
    // { label: "Home", path: "/home", icon: "home" },
  ];

  const MenuItem = () => (
    <List>
      {menuItems.map(({ label, icon, path }) => (
        <ListItem button key={label} button component={RoutLink} to={path}>
          {!open && (
            <ListItemIcon aria_label={label}>
              <Tooltip
                arrow
                title={
                  <p
                    style={{
                      fontSize: "12px",
                      fontFamily: "Roboto",
                      letterSpacing: "0.01208em",
                    }}
                  >
                    {label}
                  </p>
                }
                placement="right"
              >
                <Icon>{icon}</Icon>
              </Tooltip>
            </ListItemIcon>
          )}
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={() => logout()}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List></List>
        <Divider />
        <List>{MenuItem()}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart 
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
              <Typography
               component="h3"
               variant="h6"
               color="inherit"
               noWrap
               className={classes.title}>
               <p>Charts</p>
           </Typography>
              </Paper>
            </Grid>*/}
            {/* Recent Deposits 
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                 <Typography
              component="h3"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}>
              <p>Recent Deposit</p>
               </Typography>
              
              </Paper>
            </Grid>*/}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.content}
                >
                  <p>Recent Orders</p>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { error, loaded, user, isAuthenticated } = state.auth;
  return {
    error,
    loaded,
    user,
    isAuthenticated,
  };
};
const mapStateToDispatch = {
  _logout,
};
export default compose(
  withRouter,
  connect(mapStateToProps, mapStateToDispatch)
)(Dashboard);
