import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";

const options = [
  { name: "Services", link: "/services" },
  { name: "Custom Softwares", link: "/customsoftware" },
  { name: "Mobile App Development", link: "/mobileapps" },
  { name: "Website Development", link: "/websites" },
];
const menuOptions = [
  { name: "Home", link: "/home" },
  { name: "Revolution", link: "/revolution" },
];

const restMenu = [
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Free Estimate", link: "/estimate" },
];

const useStyles = makeStyles((theme: any) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  buttonContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContaner: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar:{
    zIndex: theme.zIndex.modal + 1
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
  const [value, setValue] = useState(0);
  //@ts-ignore
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
 

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value !== 3) {
          setValue(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  const TabsContent: any = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        aria-label="navigation"
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services"
          aria-haspopup={anchorEl ? true : undefined}
          aria-label="simple-menu"
          aria-controls="simple-menu"
          onMouseOver={handleClickListItem}
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
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>

      {/* menu */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{zIndex: 1302}}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.name}
            selected={index === selectedIndex && value === 1}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              handleMenuItemClick(event, index);
              setValue(1);
            }}
            component={Link}
            to={`${option.link}`}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
      <div className={classes.toolbarMargin} />
        <List component="nav" aria-label="side navigation" disablePadding>
          {[...menuOptions, ...options, ...restMenu].map((option, index) => (
            <ListItem
              key={option.name}
              button
              divider
              selected={index === selectedIndex}
              onClick={(event: any) => {
                handleListItemClick(event, index);
                setOpenDrawer(false);
              }}
              component={Link}
              to={`${option.link}`}
              //@ts-ignore
              className={
                option.name === "Free Estimate"
                  ? classes.drawerItemEstimate
                  : ""
                  }
            >
              <ListItemText disableTypography className={classes.drawerItem}>{option.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContaner}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <div >
      <CssBaseline>
        <ElevationScroll {...props}>
          <AppBar position="fixed" color="primary" className={classes.appbar}>
            <Toolbar disableGutters>
              <Button
                component={Link}
                to="/"
                disableRipple
                className={classes.buttonContainer}
                onClick={() => setValue(0)}
              >
                <img src={logo} alt="company logo" className={classes.logo} />
              </Button>
             
              {matches ? drawer : TabsContent}
              
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </CssBaseline>
      <div className={classes.toolbarMargin}></div>
    </div>
  );
};

export default Header;
