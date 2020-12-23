import React from "react";
import Lottie from "react-lottie";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";

const useStyles = makeStyles((theme: any) => ({
  hero: {
    maxHeight: "auto",
    paddingLeft: "1rem",
    margin: '0px',
    backgroundColor:theme.palette.common.blue,
    paddingTop: '2em' ,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: "0px",
        paddingTop: '3em'
    }
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
    }
  },
  heroBtns: {
    marginTop: "1rem",
  },
  learnMoreHero: {
      borderColor: "#fff",
      color: "#fff",
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 10,
      fontWeight: 'bold',
      fontSize: '0.9rem',
      height: 45,
      width: 145,
  },
  buttonArrow: {
      marginLeft: '0.5rem'
  },
  heroContent: {
      minWidth: '23.2em'
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
    <Grid container direction="column" >
    {/* ****Hero Section**** */}
      <Grid item className={classes.hero}> 
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroContent}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> To The Westwest
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
                  Learn More <ButtonArrow height="15" width="15" fill="#fff" classItem={classes.buttonArrow}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
