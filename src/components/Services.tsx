import React from 'react'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ButtonArrow from "./ui/ButtonArrow";
import customsoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileappsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles((theme:any) => ({
 serviceWrapper: {
   marginLeft: '2rem',
   marginRight: '2rem',
   marginTop: '9rem',
   marginBottom: '2rem',
   [theme.breakpoints.down('sm')]: {
       marginTop: "7rem",
        marginLeft: '1rem',
   marginRight: '1rem',
   }
 },
 servicesHeader: {
   [theme.breakpoints.down('md')]: {
       textAlign: 'center'
   }
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
  customSoftwareWrapper: {
    margin: "1rem",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      textAlign: "center",
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
    marginTop: "6rem",
    [theme.breakpoints.down('sm')]: {
       marginTop: "2rem",
   }
  },
  subtitle2: {
      paddingTop: '1rem'
  }
}))

const Services = () => {
    const classes = useStyles();

    return (
        <Grid direction="column" className={classes.serviceWrapper}>
        <Grid item><Typography variant="h3" className={classes.servicesHeader} >Services</Typography></Grid>
       <Grid item >
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.customSoftwareWrapper}
        >
          <Grid item className={classes.customSoftwareContent}>
            <Typography variant="h6">Custom Software Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Save Energy. Save Time. Save Money
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle2}>
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

          <Grid item className={classes.customSoftwareIcon}>
            <img src={customsoftwareIcon} alt="custom software icon" width="250em"/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.mobileWrapper}>
        <Grid
          container
          direction="row"
          className={classes.customSoftwareWrapper}
        >
          <Grid item className={classes.customSoftwareContent}>
            <Typography variant="h6">Mobile App Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Extend Funtionalty. Extend access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle2}>
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

          <Grid item className={classes.customSoftwareIcon}>
            <img src={mobileappsIcon} alt="moble app icon" width="250em"/>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.mobileWrapper}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          className={classes.customSoftwareWrapper}
        >
          <Grid item className={classes.customSoftwareContent}>
            <Typography variant="h6">Websites Development</Typography>
            <Typography
              variant="subtitle1"
              className={classes.customsoftwareSubtitle1}
            >
              Reach More.Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle2}>
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

          <Grid item className={classes.customSoftwareIcon}>
            <img src={websitesIcon} alt="website icon" width="250em"/>
          </Grid>
        </Grid>
      </Grid>
        </Grid>
    )
}

export default Services
