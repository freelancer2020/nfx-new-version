import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {
    withStyles,
    Button,
    Typography,
    Box, 
    Grow

} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import logo from '../Assets/Logo/cal-logo30.png';
import background from '../Assets/login_background.jpg';
import { Background, Logo } from './Login';


const styles = theme =>({
    btn: {
        userSelect: 'none',
        zIndex: '2',
        color: '#fff',
        backgroundColor: '#e50914',
        '&:hover': {
            backgroundColor: '#e50914'
    },
    [theme.breakpoints.down('sm')]: {
        width: '80vw'
     },
},
fonta: {
    userSelect: 'none',
    color: '#fff',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    }
}
});


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
`;

const SigninHolder = styled.div`
width: 10vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
@media (max-width: 500px) {
    width: 100vw;
}
`;

export const MiddleEntry = styled.div`
z-index: 1;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: absolute;
background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75),  rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75), transparent, transparent);
`;


class EntryPage extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        this.setState({loaded: true});
    }

    preventSavingLogo = e => {
        e.preventDefault();
        return false;
    }

    


    render() {
        const { classes } = this.props;

        const UI = (
            <Background background={background}>
                <EntryHeader>
                    <LogoEntryHolder>
                        <Logo src={logo} alt='cal compass logo' onContextMenu={this.preventSavingLogo} onDragStart={this.preventSavingLogo} />
                    </LogoEntryHolder>
                    <SigninHolder>
                        <Link to='/Login'>
                           <Button 
                           onDragStart={this.preventSavingLogo}
                           className={classes.btn}
                           children='Sign in'
                           endIcon={<ArrowRightAltIcon />}
                           />
                        </Link>
                    </SigninHolder>
                </EntryHeader>
                <MiddleEntry>
               <Grow in={this.state.loaded}
                timeout = {{
                        enter: 3500,
                        exit: 500
                    }}
                    >
                    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '90%'}}>
                       <Typography variant='h2' children='Something new is coming' className={classes.fonta} />
                       <Typography variant='h4' children='Cal Compass page cover' className={classes.fonta} />
                    </Box>
                    </Grow>
                </MiddleEntry>
            </Background>


        );

        return UI;
    }
}

export default withStyles(styles)(EntryPage);