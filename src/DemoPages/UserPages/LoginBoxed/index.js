import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppLogo from '../../../assets/utils/images/login/MediaFerry-logo.png';

import StudyImage from '../../../assets/utils/images/login/study.jpg';
import BoyStudy from '../../../assets/utils/images/login/boystudy.jpg';
import Microsoft from '../../../assets/utils/images/login/microsoft.png';
import Google from '../../../assets/utils/images/login/googleplus.png';
import { shadows } from '@material-ui/system';
import { Face, Fingerprint } from '@material-ui/icons';
import ReactDOM from 'react-dom';

const responseFacebook = (response) => {
  console.log(response);
}
 


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor:"white"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

    backgroundPosition: 'center',
    
   
  },
  row:{
    alignContent:"space-between",
    backgroundColor:"red"
  
  },

  paper: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
    
   

  },
  textField: {
    justifyContent:"center",
    height:"60px",
    width:"60%"
  },
  imagePlace: {
    margin: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    


  },
  imageData: {
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"flex-end",
    alignSelf:"flex-end"
    
    


  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height:500,
    width:500
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    justifyContent:"center",
   
    

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
   
},
padding: {
    
}
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid md={12} xs={12} sm={12} container  direction="row" item style={{background:"white",height:"100vh",flexWrap:"nowrap",alignItems:"center",margin:20}} className={classes.root}>
      
      <Grid item xs={12} sm={4} md={4} style={{height:"100vh",alignItems:"flex-end",position:"relative"}}>
        <Grid xs={12} md={12} sm={12}  style={{height:200,width:"100%",position:"absolute",bottom:0}}>
        

      <img  src={StudyImage} style={{height:"100%",width:"100%"}} alt="fireSpot"/>
      </Grid>

</Grid>
   
      <Grid item xs={12} sm={8} md={3} component={Paper} container justify="center" style={{height:"400px",background:"lightblue",display:"flex"}}>

                <Grid md={12} xs={12}  sm={12} item className={classes.paper} 
 >
                           <img  src={AppLogo} style={{height:"60%",width:'90%'}} alt="fireSpot"/>
                          
                </Grid>
                <Avatar alt="Travis Howard" src={Microsoft} />
                
                <Avatar alt="Cindy Baker" src={Google} /> 

                <div className={classes.margin}>
                    <Grid container style={{}}>
                        
                        <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                  id="outlined-with-placeholder"
                                  label="With placeholder"
                                  placeholder="Placeholder"
                                  className={classes.textField}
                                  margin="normal"
                                  variant="outlined"
                
                                  />

                         </Grid>
                    </Grid>
                    <Grid container >
                        
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="With placeholder"
                            placeholder="Placeholder"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
          
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
                
             
              </Grid>
             
             
      <Grid item xs={12} sm={4} md={5} style={{height:"100vh",alignItems:"flex-end",position:"relative"}}>
        <Grid xs={12} md={12} sm={12}  style={{height:200,width:"100%",position:"absolute",bottom:0}}>
        

      <img  src={BoyStudy} style={{height:"100%",width:"100%"}} alt="fireSpot"/>
      </Grid>
         </Grid>
         </Grid>
    
  );
}