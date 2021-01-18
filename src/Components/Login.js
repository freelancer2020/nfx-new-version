import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/Logo/cal-logo30.png';
import background from '../Assets/login_background.jpg';
import { MiddleEntry } from './Entry';
import {
    Typography,
    withStyles,
    FormControl,
    TextField,
    FormHelperText,
    Select,
    MenuItem,
    InputLabel,
    Button,
    Grow,
    Box
    
} from '@material-ui/core';

// redux 
import { connect } from 'react-redux';
import { clientLog } from '../store/actions/actions';

//Material styles
const styles = theme => ({
    root: {
        color: '#fff',
        fontWeight: 'bold',
        userSelect: 'none',
        marginTop: '5vh'
    },

    textfield: {
        backgroundColor: '#fff',
        outline: '0',
        borderRadius: '4px',
        color: '#fff',
        marginTop: '20px'
    },

    helperTxt: {
        color: 'red'
    },

    menuItem: {
        backgroundColor: '#fff',
        height: '55px',
        borderRadius: '4px',
        marginTop: '20px'
        
        
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },

    btn: {
        marginTop: '50px',
        width: '100px',
        maxWidth: '100px',
        color: '#fff',
        height: '50px',
        backgroundColor: '#e50914',
        '&:hover': {
            backgroundColor: '#e50914'
        },

        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },

          selectEmpty: {
            marginTop: theme.spacing(2),
          },

        container: {
           width: '40vw',
           height: '60vh',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           borderRadius: '4px',
           background: 'rgba(0, 0, 0, 0.75)',
           
          
        }
    }
});






//..............

// page components..

//page background

export const Background = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${props => props.background});
background-size: 100%;
background-repeat: no-repeat;
background-position: fixed;
@media(max-width: 500px) {
    background-size: cover;
  }

`;

//Header with logo...

export const Logo = styled.img`
width: auto;
height: auto;
`;

const EntryHeader = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #221f1f;
background: linear-gradient(to bottom, #141414, transparent);
@media (max-width: 500px) {
    flex-direction: column;
    height: 20vh;
}
`;

const LogoEntryHolder = styled.div`
width: 15vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
z-index: 2;
`;

//..................
const LoginBody = styled.div`
width: 100vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
@media (max-width: 500px) {
    margin-top: 15vh;
    height: 75vh;
}

`;

const LoginFormBody = styled.div`
width: 40vw;
height: 60vh;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 4px;
background: rgba(0, 0, 0, 0.75);
@media(max-width: 500px) {
    width: 100vw;
    height: 90vh;
  }
 
`;

const LoginForm = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
`;





class Login extends Component {

    state = {
        serverRender: [],
        done: false
    }

    
    componentDidMount() {
        const route = 'https://raw.githubusercontent.com/freelancer2020/hexa/master/names.json';
        this.setState({done: true})
        fetch(route)
        .then(response => response.json())
        .then(data => this.setState({serverRender: data}))
    }

    dontSaveLogo = (e) => {
        e.preventDefault();
        return false;
    }


    render() {
        const val = this.state.txt;
        const { classes } = this.props;
        const UI = (
            <React.Fragment>
                <Background background={background} >
                  
                <EntryHeader>
                    
                        <LogoEntryHolder>
                          <Link to='/'>
                            <Logo src={logo} alt='cal compass logo' onContextMenu={this.dontSaveLogo} onDragStart={this.dontSaveLogo} />
                          </Link>
                        </LogoEntryHolder>
                
                </EntryHeader>
            <MiddleEntry>
                <LoginBody>

            <Grow 
            in={this.state.done}
            timeout={{
                enter: 1500,
                exit: 500
            }}
            >
                <Box className={classes.container}>
                    <LoginFormBody>
                        <LoginForm>
                            
                               <Typography variant='h4' children='Login' className={classes.root} />
                               <FormControl>
                                   <TextField variant='outlined' className={classes.textfield} label='Email' value={this.props.log} />
                                   <FormHelperText children='' className={classes.helperTxt} />
                                </FormControl>

                                <FormControl>
                                <InputLabel id="demo-simple-select-label">Select Email</InputLabel>
                                    <Select
                                    displayEmpty={true}
                                    className={classes.menuItem}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.props.log}
                                    onChange={(e) => this.props.onLog(e.target.value)}
                                    >
                                        {
                                            this.state.serverRender.map( (obj, index) => {
                                                return <MenuItem key={index.toString()} children={obj} value={obj} />
                                            })
                                        }

                                    </Select>

                                </FormControl>
                            <Link to='/selectClient' style={{width: '100px', height: '50px'}}>
                               <Button className={classes.btn} children='Login' />
                            </Link>
                                

                        </LoginForm>

                    </LoginFormBody>
                </Box>
                </Grow>

                </LoginBody>


                  </MiddleEntry>
                </Background>
            
            </React.Fragment>
        );

        return UI;
    }
}

const mapStateToProps = state => {
    return {
        log: state.logs.clientName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLog: (val) => dispatch( clientLog(val) )
    }
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Login));

