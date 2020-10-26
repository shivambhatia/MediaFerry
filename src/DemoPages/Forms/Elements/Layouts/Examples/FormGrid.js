import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText, Container
} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { TextField,Divider } from '@material-ui/core';
import bg3 from '../../../../../assets/utils/images/originals/cloudfile.png';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

  }));

class FormGrid extends React.Component {
    render() {
        
        const {classes}=this.props;
        return (
            <React.Fragment>
                    <Grid md={12} sm={12} xs={12} container item style={{padding:"20px 0px 10px 20px",display:"block"}}>
                    <h5>Home</h5>
                    <Breadcrumbs  aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} style={{color:'orange'}}>
                        Home
                    </Link>
                    
                    <Typography color="textPrimary" style={{fontWeight:700,color:'orange'}}>User Profile</Typography>
                    </Breadcrumbs>
                  
                    </Grid>
                    <Grid  md={12} sm={12} xs={12} container item style={{padding:"20px 0px 10px 20px",display:"block"}} >

                <Typography variant="h5" component="h2">
                Welcome Henry K. Raj
                </Typography>
                <Typography variant="subtitle1" component="h2">
                You Can Edit Your Profile Information Here
                </Typography>
                </Grid>
               
 <Grid md={12} sm={12} xs={12} container item style={{padding:"20px 0px 10px 20px"}}>
    <Grid md={2} item style={{padding:"20px",display:"grid"}} borderRadius="50%">
    <img src={bg3} alt="website logo" style={{height:120,width:'80%'}} borderRadius={60}/>
    <Typography variant="subtitle2" component="sutitle2">
  Upload images
</Typography>

    </Grid>
    <Grid md={1} item style={{display:"grid"}}>
    <Divider style={{background:"#000",height:200,width:1
}}/>

    </Grid>
  
<Grid md={6} xs={12} sm={12} item style={{display:"grid",position:"relative"}}>
<TextField id="outlined-basic" label="Username" variant="outlined"  style={{marginTop:10}}/>
<TextField id="outlined-basic" label="Email" variant="outlined"  style={{marginTop:10}}/>
<Grid md={12} item   direction="column" justify="flex-end" container style={{display:"flex",height:20}}>
    <Button variant="contained" color="primary" style={{padding:5,width:100,position:"absolute",right:0,bottom:0,background:"#CC3399",border:"#CC3399"}}>
        SAVE
      </Button>
</Grid>

    {/* <TextField variant="contained" name="name">
        name
    </TextField>
    <TextField>
        email
    </TextField> */}
</Grid>



</Grid> 


        
           
         </React.Fragment>


            );
    }
}

export default (withStyles(useStyles)(FormGrid))