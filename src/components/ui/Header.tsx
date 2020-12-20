import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme: any) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "27px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "40px",
  },
  buttonContainer:{
   padding: 0,
   "&:hover": {
     backgroundColor: "transparent"
   }
  }
}));

interface Props {
  children?: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  //@ts-ignore
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);

  return (
    <div>
      <CssBaseline>
        <ElevationScroll {...props}>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
              <Button component={Link} to="/" disableRipple className={classes.buttonContainer} onClick={() => setValue(0)}>
                <img src={logo} alt="company logo" className={classes.logo} />
              </Button>
              <Tabs
                className={classes.tabContainer}
                value={value}
                onChange={handleChange}
                aria-label="navigation"
                indicatorColor="primary"
              >
                <Tab
                  className={classes.tab}
                  label="Home"
                  component={Link}
                  to="/"
                />
                <Tab
                  className={classes.tab}
                  label="Services"
                  component={Link}
                  to="/services"
                />
                <Tab
                  className={classes.tab}
                  label="Revolution"
                  component={Link}
                  to="/revolution"
                />
                <Tab
                  className={classes.tab}
                  label="About Us"
                  component={Link}
                  to="/about"
                />
                <Tab
                  className={classes.tab}
                  label="Contact Us"
                  component={Link}
                  to="/contact"
                />
              </Tabs>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Free Estimate
              </Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </CssBaseline>
      <div className={classes.toolbarMargin}></div>
    </div>
  );
};

export default Header;
