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

import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
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
    backgroundColor:"white",
    background:"white",
    height:"100vh",
    flexWrap:"nowrap",
    alignItems:"center",
    // margin:20,
    overflowX:"hidden"
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

    backgroundPosition: 'center',
    
 
  },
  text:{fontSize:theme.typography.body1.fontSize},
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
    marginLeft:8
   
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
    
    <Grid md={12} xs={12} sm={12} container   direction="row" item  className={classes.root}>
      
      <Grid item xs={12} sm={4} md={4} style={{height:"100vh",alignItems:"flex-end",position:"relative"}}>
        <Grid xs={12} md={12} sm={12}  style={{position:"absolute",bottom:0}}>
        <img  src={StudyImage} style={{height:"auto",maxWidth:"100%",objectFit:"contain"}} alt="fireSpot"/>
        </Grid>
    </Grid>
        <Grid item xs={12} sm={12} md={4} component={Paper} container justify="center" style={{height:600,width:300,display:"block",padding:24,boxShadow:"box-shadow:inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255),0.3em 0.3em 1em rgba(0,0,0,0.3)"}}>
           <Grid  md={10} container justify="center" style={{maxWidth:"100%",padding:24}}>

          
                <img  src={AppLogo} style={{objectFit:"contain",width:200}} alt="fireSpot"/>
              <Grid md={12} sm={12} xs={12} item container justify="center">
                <Grid   style={{display:"block",paddingTop:24}}>
               <Typography>Login With</Typography>
                <Grid container spacing={2} style={{display:"flex",marginTop:10}}>
                <Avatar alt="Travis Howard" src={Microsoft} style={{marginRight:16}}/>
                
                <Avatar alt="Cindy Baker" src={Google} />
                </Grid> 
                </Grid>
                </Grid>
                <div className={classes.margin}>
                    <Grid container >
                        
                        <Grid item md={true} sm={true} xs={true}>
                              <TextField
                                  id="outlined-with-placeholder"
                                  label="UserName"
                                  placeholder="UserName"
                                  className={classes.textField}
                                  margin="normal"
                                  variant="outlined"
                                 fullWidth
                                  />

                         </Grid>
                    </Grid>
                    <Grid container >
                        
                        <Grid item md={true} sm={true} xs={true}>
                        <TextField
                            id="outlined-with-placeholder"
                            label="Password"
                            placeholder="Password"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            />
                        </Grid>
                    </Grid>
                   
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="contained" color="primary"  fullWidth style={{ textTransform: "none",background:"orange" ,padding:16}}>Login</Button>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item style={{margin:0,display:"flex"}}>
                            <Checkbox
                                    color="primary"
                                />
                           <Typography style={{marginTop:10,marginRight:20}}>Remember me </Typography>
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" ,padding:0}} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid md={12} sm={12} xs={12} container item style={{padding:24,display:"flex"}}>
                      <PermContactCalendarOutlinedIcon fontSize="small" style={{marginRight:8}}/>
                      <Typography className={classes.text}>Don't have Account? Create Now!</Typography>
                    </Grid>

                </div>
                
                </Grid>
              </Grid>
             
             
      <Grid item xs={12} sm={4} md={4} container justify="flex-end"  item style={{height:"100vh",alignItems:"flex-end",position:"relative"}}>
        {/* <Grid xs={12} md={12} sm={12} item container justfiy="flex-end"   style={{position:"absolute",bottom:0,right:0}}> */}
            <img  src={StudyImage} style={{height:"auto",maxWidth:"100%",objectFit:"contain"}} alt="fireSpot"/>
      {/* </Grid> */}
      </Grid>
      </Grid>
    
  );
}