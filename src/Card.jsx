import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: '90%',
    background:'gray',
    height:'100%',
  },
  title: {
    fontSize: 14,
    fontWeight:'bold',
    color:'white',
    margin:'2px 2px',
  },
  pos: {
    marginBottom: 12,
    fontSize:11,
    fontWeight:'300',
    color:'#fafafa',
    padding:'2px 2px',
  },
  datas:{
    fontSize: 40,
    fontWeight:'bold',
    color:'white',
    margin:'5px 2px', 
  },
  btn:{
      fontSize:12,
      background:'#373737',
      color:'white',
      borderRadius:'7%',
      boxSizing:'border-box',
      marginBottom:'10px',
      display:'block',

  },
});

export default function OutlinedCard({data,head,update}) {
  const classes = useStyles();
  
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {head}
        </Typography>
        <Typography className={classes.datas} variant="h2" component="h2">
        <span className="hov">{data}</span>
        </Typography>
        <Typography variant="h4" className={classes.pos} color="textSecondary">
         <span style={{fontSize:'16'}}>Last Updated:</span> <br/><span style={{fontSize:'17'}} >🕥</span>{update}
        </Typography>
      </CardContent>
    </Card>
  );
}
