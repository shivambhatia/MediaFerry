import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Sticky from 'react-stickynode';
import {
    Breadcrumb, BreadcrumbItem,  CardTitle,Input,Nav,
    NavItem,
    NavLink, Container
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT,
    EXPAND_RIGHT,
    EXPAND_UP,
    EXPAND_DOWN,
    CONTRACT,
    CONTRACT_OVERLAY,
    SLIDE_LEFT,
    SLIDE_RIGHT,
    SLIDE_UP,
    SLIDE_DOWN,
    ZOOM_IN,
    ZOOM_OUT
} from 'react-ladda';
import {
    faHome

} from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import {Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {DropdownList} from 'react-widgets'
import FormDatePicker2 from '../../../Components/DatePicker/Examples/example2'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {
    Card, CardBody, CardHeader, CardFooter, Col, Row,
    FormGroup, Label,  CustomInput,
    UncontrolledButtonDropdown, Button, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';
import TextareaAutosize from 'react-textarea-autosize';
import {
    faCog,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Ionicon from 'react-ionicons';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
      
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
   
    row:{
        marginTop:10,
        padding:10,
        
    },
    line:{
        marginLeft:0,

    }
  });
  
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
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
  
let colors = ['Orange', 'Red', 'Blue', 'Purple']
let ValueInput = ({ item }) => (
    <span style={{color:'#99A3A4',opacity:0.7,fontSize:12}}>
     {item}
    </span>
  );
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1,
           
        }}
    />
)
  

class FormStickyBasic extends React.Component {
    
   
    state = {
        expLeft: false,
        expRight: false,
        expUp: false,
        expDown: false,
        expContract: false,
        expOverlay: false,
        expSlideLeft: false,
        expSlideRight: false,
        expSlideUp: false,
        expSlideDown: false,
        expZoomIn: false,
        expZoomOut: false,
        value: [],
            people: colors,
    }

    constructor(props) {
        super(props);

        this.state = {
            cSelected: [],
            
                value: [],
                people: colors,
            
        };

        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }
    

    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5,
        })
    }

    onRadioBtnClick(rSelected) {
        this.setState({rSelected});
    }

    onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({cSelected: [...this.state.cSelected]});
    }
    handleCreate(name) {
        let {people, value} = this.state;

        let newOption = {
            name,
            id: people.length + 1
        }

        this.setState({
            value: [...value, newOption],  // select new option
            people: [...people, newOption] // add new option to our dataset
        })
    }


    render() {
        const {classes}=this.props;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Card className="main-card mb-3">
                        <div className="widget-content-left  ml-3 header-user-info">
                                
                               
                           


                            <Sticky enabled={true} top='.app-header' innerZ="15" activeClass="sticky-active-class">

                            <Grid md={12} sm={12} xs={12} container item style={{paddingBottom:"20px",display:"block"}}>
                    <h4>Projects</h4>
                    <Breadcrumbs  aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} style={{color:'orange'}}>
                        Projects
                    </Link>
                    
                    <Typography color="textPrimary" style={{fontWeight:700,color:'orange'}}>Work In Progress</Typography>
                    </Breadcrumbs>
                    <Typography variant="subtitle2" component="subtitle2">
                Henry KR | Owner
                </Typography>

                    </Grid>
                              
                              

{/*                                    
                                    <div className="btn-actions-pane-right">
                                        <Button size="lg" color="warning" className="mr-2"
                                                onClick={this.toggleCalendar}>
                                                <span className="mr-2 opacity-8">
                                                    <Ionicon color="#333333" fontSize="1.2rem"
                                                             icon="ios-analytics-outline" shake={true}/>
                                                </span>
                                            Dummy Button
                                        </Button> */}

                                        {/* <UncontrolledButtonDropdown>
                                            <Button size="lg" color="primary">
                                                <span className="mr-2 opacity-6">
                                                    <FontAwesomeIcon icon={faCog}/>
                                                </span>
                                                Actions
                                            </Button>
                                            <DropdownToggle className="dropdown-toggle-split" caret size="lg"
                                                            color="primary"/>
                                            <DropdownMenu right>
                                                <DropdownItem>Menus</DropdownItem>
                                                <DropdownItem>Settings</DropdownItem>
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>Actions</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>Dividers</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown> */}
                                    {/* </div> */}
                                {/* </CardHeader> */}


                            </Sticky>
                            </div>
                            <Row >

                            <Col md="7" className={classes.body}>
                            <div className="widget-subheading" style={{margin:10}}>
                                    <TextField
                                        id="standard-name"
                                        label="Please enter Campaign Project/Title"
                                        className={classes.textField}
                                        value=''
                                        
                                        
                                        />
                                        
                                    </div>
                            </Col>
                            <Col md="2" className={classes.sepa}>
                            <Divider style={{background:"#B6B6B4",height:40,width:0.3
}}/>
                            </Col>
                            </Row>

                            <Row className={classes.row}>
                            
                            
                            <Col md="2" className={classes.sepa}>
                            <div className="widget-subheading" style={{margin:5}}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Select Project Type:</h4>
                            
                            </div>
                            </Col>
                            <Col md="4" className={classes.sepa}>

                            <UncontrolledButtonDropdown>
                                            <DropdownToggle caret color="#fff" className="btn btn-outline-light" >
                                                Select Project Type
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-xl">
                                                <Nav vertical>
                                                    <Nav vertical>
                                                        
                                                        <NavItem>
                                                            <NavLink href="javascript:void(0);">
                                                                <i className="nav-link-icon pe-7s-chat"> </i>
                                                                <span>Print Project Type</span>
                                                                
                                                            </NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                            <NavLink href="javascript:void(0);">
                                                                <i className="nav-link-icon pe-7s-wallet"> </i>
                                                                <span>Digital Project Type</span>
                                                            </NavLink>
                                                        </NavItem>
                                                       
                                                        <NavItem>
                                                            <NavLink href="javascript:void(0);">
                                                                <i className="nav-link-icon pe-7s-config"> </i>
                                                                <span>Simple Creative Request</span>
                                                             
                                                            </NavLink>
                                                        </NavItem>
                                                     
                                                    </Nav>
                                                </Nav>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>  
                            </Col>
                         

                            
                            </Row>
                            <Col md="3">
                                        <LaddaButton className="btn-secondary disabled"
                                                    
                                                     loading={this.state.expSlideLeft}
                                                     onClick={() => this.toggle('expSlideLeft')}

                                                     data-style={SLIDE_LEFT}
                                        >
                                            PLACE ORDER
                                        </LaddaButton>
                                    </Col>

                                <Row className={classes.row}>
                                    <Col md="2" >
                                    <div className="widget-subheading" style={{margin:0 }}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Project Brief:</h4>
                            
                            </div>
                                    </Col>

                                    <Col md="6">
                                        
                                                
                                                <TextareaAutosize className="form-control"
                                                                minRows={3}
                                                                maxRows={6}
                                                                valueComponent={ValueInput}
                                                                defaultValue="Type your brief here..."
                                                />
                                            
                        </Col>
                        </Row>



                        <Row className={classes.row}>
                            
                            
                            <Col md="2" className={classes.sepa}>
                            <div className="widget-subheading" style={{margin:5}}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Select Required Sizes:</h4>
                            
                            </div>
                            </Col>
                            <Col md={6} className={classes.sepa}>

                            <Card className="main-card mb-3">
                                   
                                       
                                        <Row form>
                                            <Col md={12}>
                                            <DropdownList
                                            data={colors}
                                            class="btn btn-outline-info"
                                            valueComponent={ValueInput}
                                            defaultValue={["Select Required Sizes"]}
                                           
                                            
                                        />
                                            </Col>
                                        </Row>
                                   
                                </Card>
                            </Col>
                         

                            
                            </Row>


                            <Row className={classes.row}>
                            
                            
                            <Col md="2" className={classes.sepa}>
                            <div className="widget-subheading" style={{margin:5}}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Job Number:</h4>
                            
                            </div>
                            </Col>
                            <Col md={6} className={classes.sepa}>

                            <Card className="main-card mb-3">
                                   
                                       
                                        <Row form>
                                       
                                    <TextareaAutosize className="form-control"
                                                      maxRows={3}
                                    />
                               
                                        </Row>
                                   
                                </Card>
                            </Col>
                         

                            
                            </Row>
                            <Row className={classes.row}>
                            
                            
                            <Col md="2" className={classes.sepa}>
                            <div className="widget-subheading" style={{margin:5}}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Due Date:</h4>
                            
                            </div>
                            </Col>
                            <Col md={3} className={classes.sepa}>

                            <Card className="main-card mb-3">
                                   
                                       
                                        <Row form>
                                       
                                        <FormDatePicker2/>
                               
                                        </Row>
                                   
                                </Card>
                            </Col>
                         

                            
                            </Row>

                            <Row className={classes.row}>
                            
                            
                            <Col md="2" className={classes.sepa}>
                            <div className="widget-subheading" style={{margin:5}}>
                            <h4 class="display-4" style={{fontWeight:'bold',fontSize:12}}>Assets:</h4>
                            
                            </div>
                            </Col>
                            <Col md={3} className={classes.sepa}>
                                        <Row form>
                                       
                                        <Button className="mb-2 mr-2 btn-hover-shine" color="info">Upload Assets</Button>
                               
                                        </Row>
                                        
                            </Col>
                            </Row>
        
                            <Col>
                            <Col md={7} className={classes.line}>
                            <ColoredLine color="#99A3A4" />
                            </Col>
                          

                         
                            </Col>
                            <Col>
                            <Col md={7} className={classes.line}>
                            <span style={{color:'#99A3A4',opacity:0.7,fontSize:12}}>
     You will see your assets here once you upload them
    </span>
                            </Col>
                          

                         
                            </Col>
                            <Col md="3">
                                        <LaddaButton className="btn-secondary disabled"
                                                    
                                                     loading={this.state.expSlideLeft}
                                                     onClick={() => this.toggle('expSlideLeft')}

                                                     data-style={SLIDE_LEFT}
                                        >
                                            PLACE ORDER
                                        </LaddaButton>
                                    </Col>


</Card>

                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

export default (withStyles(styles)(FormStickyBasic))