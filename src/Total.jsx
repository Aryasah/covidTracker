import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,Paper} from  '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Home from './Home';
import {useState ,useEffect} from 'react';


const useStyles = makeStyles((theme)=>({
    grid:{
        width: '100%',
        margin: '0'
    },
    paper:{
        padding:theme.spacing(.2),
        textAlign:'center',
        height:'200px',
        border:'none'
    },
    heading:{
        textAlign:'center',
        color:'purple',
        fontSize:'3em',
        fontWeight:'bold',
        padding:theme.spacing(2),
        margin:'10px 10px'
    },
    subheading:{
        textAlign:'center',
        color:'purple',
        fontSize:'1em',
        fontWeight:'normal',
        padding:theme.spacing(1),
        margin:'5px 5px'
    },
    item:{
        border:'none',
        padding:'5px 5px'
    },
    heading1:{
        textAlign:'center',
        color:'blue',
        fontSize:'1.5em',
        fontWeight:'bold',
        padding:theme.spacing(2),
        margin:'10px 10px'
    },
    image:{
        borderRadius:'50%',
        width:'50px',
        height:'50px',
        left:'50%'
    },
    sub:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
 
    }
}));

export default function Total() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [state,setState] = useState([]);
  const [states,setStates] = useState([]);
  const getCovidData = async ()=>{

    try {
    const response = await fetch("https://api.covid19india.org/data.json");
    const actualData = await response.json();
    console.log(actualData);
    setData(actualData.statewise[0]);
    setState(actualData.statewise[37]);
    setStates(actualData.statewise[5]);
      
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getCovidData();
  }, [])
    return (
        <div>
        <Typography variant="h2" noWrap className={classes.heading}>
            Covid19 Cases
            <br/>
               <div className={classes.sub}><img className={classes.image} src="https://th.bing.com/th/id/OIP.YyYB8DbTNqOurjz9m12F-wHaHa?pid=ImgDet&rs=1" alt="Stay Home Stay Safe" />
               <span className={classes.subheading} style={{fontSize:'.3em',marginTop:'0',padding:'0',}}><i>Stay Home Stay Safe</i></span></div>
                
               
            
        </Typography>
        <Typography variant="h6" className={classes.subheading}>
        <Typography variant="h6" style={{fontSize:'1.2em'}} className={classes.subheading1}>India</Typography>
        🔴 Live Updates
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
        <Grid item  className={classes.item} xs="12" md="3">
            <Paper className={classes.paper}><Home data={data.confirmed} update={data.lastupdatedtime} head="Total Cases" /></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={data.active} update={data.lastupdatedtime} head="Active Cases"/></Paper>
        </Grid>      
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={data.recovered} update={data.lastupdatedtime} head="Total Recovered"/></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={data.deaths} update={data.lastupdatedtime} head="Total Deaths"/></Paper>
        </Grid>
        </Grid>
        <Typography variant="h3" noWrap className={classes.heading1}>
            West Bengal
            <br/>
            <span style={{fontSize:'0.7em',fontWeight:'500'}}>Covid19 Cases</span>
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
        <Grid item  className={classes.item} xs="12" md="3">
            <Paper className={classes.paper}><Home data={state.confirmed} update={state.lastupdatedtime} head="Total Cases" /></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={state.active} update={state.lastupdatedtime} head="Active Cases"/></Paper>
        </Grid>      
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={state.recovered} update={state.lastupdatedtime} head="Total Recovered"/></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={state.deaths} update={state.lastupdatedtime} head="Total Deaths"/></Paper>
        </Grid>
        </Grid>
        <Typography variant="h3" noWrap className={classes.heading1}>
            Bihar
            <br/>
            <span style={{fontSize:'0.7em',fontWeight:'500'}}>Covid19 Cases</span>
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
        <Grid item  className={classes.item} xs="12" md="3">
            <Paper className={classes.paper}><Home data={states.confirmed} update={state.lastupdatedtime} head="Total Cases" /></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={states.active} update={state.lastupdatedtime} head="Active Cases"/></Paper>
        </Grid>      
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={states.recovered} update={state.lastupdatedtime} head="Total Recovered"/></Paper>
        </Grid>
        <Grid item  xs="12" md="3">
            <Paper className={classes.paper}><Home data={states.deaths} update={state.lastupdatedtime} head="Total Deaths"/></Paper>
        </Grid>
        </Grid>
        </div>
    );
}
