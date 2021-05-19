import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper} from  '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme)=>({
    grid:{
        width: '100%',
        margin: '0',
        background:'#373737',
    },
    paper:{
        textAlign:'center',
        height:'100',   
        display:'flex',
        margin: '0',
        justifyContent:'center',
        alignItems:'center',
        background:'#373737'
    },
    // footerleft:{
    //     fontSize:14,
    //     fontWeight:'500',
    //     color:'#fafafa',
    //     height:'100%'
    // },
    fleft:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'10px 10px',
        height:'100%',
        fontSize:17,
        fontWeight:'500',
        color:'#fafafa',
        margin:'0'
        
    },
    fright:{
        display:'flex',
        justifyContent:'spaceEvenly',
        alignItems:'center',
        padding:'10px 10px',
    }

}));

  
{/* <Typography className={classes.footerleft} variant="h3"> */}
export default function Footer() {
    const classes = useStyles();
 
  
    return (
        <React.Fragment>
        <Grid container spacing={2} className={classes.grid}>
        <Grid item   xs="12" md="6">
            <Paper className={classes.paper}>
            <div style={{border:'none'}} className={classes.fleft}>
                &copy; Arya Sah
            </div>
            </Paper>
        </Grid>
        <Grid item  xs="12" md="6">
            <Paper className={classes.paper}>
                <div className={classes.fright}>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </Paper>
        </Grid>      
        </Grid>
            
        </React.Fragment>
    )
}
