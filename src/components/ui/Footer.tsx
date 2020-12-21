import React from 'react'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:any) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%"
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
          Example footer  
        </div>
    )
}

export default Footer
