import React from "react";
import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import customsoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileappsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme: any) => ({
  hero: {
    minHeight: "auto",
    paddingLeft: "1rem",
    margin: "0px",
    backgroundColor: theme.palette.common.blue,
    paddingTop: "2em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingTop: "3rem",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "20em",
    marginTop: "2em",
    marginLeft: "5%",
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 10,
    height: 45,
    width: 145,
    marginRight: 10,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  heroBtns: {
    marginTop: "1rem",
  },
  learnMoreHero: {
    borderColor: "#fff",
    color: "#fff",
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnMoreCustomSoftware: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    width: 135,
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  },
  buttonArrow: {
    marginLeft: "0.5rem",
  },
  heroContent: {
    minWidth: "23.2em",
    paddingBottom: '1rem',
  },
  customSoftwareWrapper: {
    margin: "1rem",

    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
    //   width: "90%",
      margin: "auto",
      textAlign: "center",
    },
  },
  homeWrapper: {
    marginTop: "3rem",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  customsoftwareSubtitle1: {
    marginTop: "1rem",
  },
  customSoftwareContent: {
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginBottom: "1rem",
      marginTop: "2rem",
    },
  },
  customSoftwareIcon: {
    marginRight: "2rem",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  mobileWrapper: {
      marginTop: '2rem'
  }
}));
const LandingPage = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.homeWrapper}>
      {/* ****Hero Section**** */}
      <Grid item className={classes.hero}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroContent}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> To The Midwest
            </Typography>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.heroBtns}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateBtn}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnMoreHero}>
                  Learn More{" "}
                  <ButtonArrow
                    height="15"
                    width="15"
                    fill="#fff"
                    classItem={classes.buttonArrow}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/* ****Service Section**** */}
      <Grid item>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.customSoftwareWrapper}
        >
          <Grid item className={classes.customSoftwareContent} >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnMoreCustomSoftware}
            >
              Learn More{" "}
              <ButtonArrow
                height="10"
                width="10"
                fill="#0B72B9"
                classItem={classes.buttonArrow}
              />
            </Button>
          </Grid>

          <Grid item className={classes.customSoftwareIcon} >
            <img src={customsoftwareIcon} alt="custom software icon" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.mobileWrapper}>
        <Grid container
          direction="row"
          justify="flex-end"
          
          className={classes.customSoftwareWrapper}>
          
          <Grid item className={classes.customSoftwareContent} >
            <Typography variant="h4">Mobile App Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Extend Funtionalty. Extend access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate Your web Experience Or Create a Standalone App
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnMoreCustomSoftware}
            >
              Learn More{" "}
              <ButtonArrow
                height="10"
                width="10"
                fill="#0B72B9"
                classItem={classes.buttonArrow}
              />
            </Button>
          </Grid>

          <Grid item className={classes.customSoftwareIcon} >
            <img src={mobileappsIcon} alt="moble app icon" />
          </Grid>
        </Grid>
      </Grid>

       <Grid item className={classes.mobileWrapper}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.customSoftwareWrapper}
        >
          <Grid item className={classes.customSoftwareContent} >
            <Typography variant="h4">Websites Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Reach More.Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized For Search Engines, Bult For Speed
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnMoreCustomSoftware}
            >
              Learn More{" "}
              <ButtonArrow
                height="10"
                width="10"
                fill="#0B72B9"
                classItem={classes.buttonArrow}
              />
            </Button>
          </Grid>

          <Grid item className={classes.customSoftwareIcon} >
            <img src={websitesIcon} alt="website icon" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
