import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100vw",
  },
  footerAdornment: {
    width: "25em",
    verticalAlign: "bottom",

    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
    marginTop: "3rem",
    marginRight: "0px",
  },
  gridText: {
    fontFamily: "Arial",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "0.75rem",
  },
  socialIcons: {
    position: "relative",
    marginTop: "-2.8rem",
    paddingRight: "2rem",
    marginRight: "0px",
  },
  icons: {
    width: "3rem",
    paddingLeft: "1rem",
    paddingBottom: "0.5rem",
  },
  gridSpace: {
    paddingLeft: "3rem",
  },
}));

interface Props {
  children?: React.ReactElement;
  value: number;
  selectedIndex: number;
  setValue(el:number): void;
  setSelectedIndex(el:number): void;
}

const Footer = ({value, selectedIndex, setValue, setSelectedIndex, children}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Hidden mdDown>
        <div>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.gridContainer}
          >
            <Grid item className={classes.gridSpace}>
              <Grid container item spacing={2}>
                <Grid item className={classes.gridText} component={Link} to="/" onClick={() => {setValue(0)}}>
                  Home
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridSpace}>
              <Grid container item direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/services"
                  onClick={() => {setValue(0)}}
                >
                  Services
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/customsoftware"
                  onClick={() => {setValue(1); setSelectedIndex(0)}}
                >
                  Custom Software
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/mobileapps"
                  onClick={() => {setValue(1); setSelectedIndex(1)}}
                >
                  Mobile Development
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/websites"
                  onClick={() => {setValue(1); setSelectedIndex(2)}}
                >
                  Websites Development
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridSpace}>
              <Grid container item direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/revolution"
                  onClick={() => {setValue(2)}}
                >
                  Revolution
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/revolution"
                  onClick={() => {setValue(2)}}
                >
                  Vision
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/revolution"
                  onClick={() => {setValue(2)}}
                >
                  Technology
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/revolution"
                  onClick={() => {setValue(2)}}
                >
                  Process
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridSpace}>
              <Grid container item direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/about"
                  onClick={() => {setValue(3)}}
                >
                  About Us
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/about"
                  onClick={() => {setValue(3)}}
                >
                  History
                </Grid>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/about"
                  onClick={() => {setValue(3)}}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>

            <Grid item className={classes.gridSpace}>
              <Grid container item spacing={2}>
                <Grid
                  item
                  className={classes.gridText}
                  component={Link}
                  to="/contact"
                  onClick={() => {setValue(4)}}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Hidden>
      <img
        src={footerAdornment}
        alt="black background slash"
        className={classes.footerAdornment}
      />

      <Grid
        container
        className={classes.socialIcons}
        justify="flex-end"
        alignItems="center"
      >
        <Grid
          item
          className={classes.icons}
          component={"a"}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook logo" />
        </Grid>
        <Grid
          item
          className={classes.icons}
          component={"a"}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twiter logo" />
        </Grid>
        <Grid
          item
          className={classes.icons}
          component={"a"}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
