import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/Logo/cal-logo30.png';
import Ava from '../../Assets/avatar.png';
import {
   Box,
   withStyles,
   Typography,
   Grow,
   Container

} from '@material-ui/core';
import AddClient from './AddClient';


const advStyle = theme =>({
    root: {
        color: '#fff'
    },
    box: {
        width: '100%',
        height: '40vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    ava: {
        width: '100%',
        height: '20vh'
    },
   typo: {
       textAlign: 'center',
       fontWeight: 'bold' 
   },
   conta: {
       width: '100vw',
       position: 'absolute',
       left: '0',
       right: '0',
       margin: 'auto',
       display: 'flex',
       justifyContent: 'center'
   },
     
        
    
})

//prefix
const Prifix = styled.div`
    width: 100vw;
    height: 60vh;
    margin-top: 10vh;
    position: relative;
    background-color: #221f1f;
    `;

const clientRowPrfix = {
    width: '100vw',
    height: '60vh',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto'
};


const PageLayout = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #221f1f;
`;

const PageHeader = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
background-color: #221f1f;
background: linear-gradient(to bottom, #141414, transparent);
`;
const PageSubHeader = styled.div`
width: 90%;
height: 100%;
display: flex;
align-item: center;
`;

const LogoHolder = styled.div`
width: auto;
height: 100%;
display: flex;
align-items: center;
cursor: pointer;
`;

const ClientLayout = styled.div`
width: 80vw;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media(max-width: 500px) {
    width: 100vw;
    height: auto;
}
`;

const ClientHeader = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`;

const ClientProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 10vw;
height: 30vh;
margin-right: 2vw;
background-color: #221f1f;
border-radius: 4px 4px 0px 0px;
z-index: 1;
cursor: pointer;
padding: 5px;
color: ${props => props.active ? '#fff': 'grey'};
@media(max-width: 500px) {
    width: 40vw;
}
`;

const Avatar = styled.div`
width: 100%;
height: 20vh;
display: flex;
border-radius: 4px;
background-image: url(${Ava});
background-size: 100% 100%;
z-index: 2;
background-repeat: no-repeat;
border: ${props => props.active ? '3px solid #fff': null};
`;

const TypoContainer = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
padding: 5px;
`;

const LayoutBottom = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`;
const AddClientButton = styled.div`
border: 1px solid grey;
width: 10vw;
height: 30px;
margin-top: 30px;
margin-bottom: 30px;
color: grey;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
font-size: 14px;
font-weight: bold;
&: hover {
    border: 1px solid #fff;
    color: #fff;
}
@media(max-width: 500px) {
    width: 80%;
}
`;

class ClientProfiles extends Component {

    state = {
        profileHover: false,
        moreClients: false,
        clientsRow: true  
    }


    activeProfile = () => {
        this.setState({profileHover: true});
    }

    deactiveProfile = () => {
        this.setState({profileHover: false});
    }

    addClientComponent = () => {
        this.setState({moreClients: true});
        this.setState({clientsRow: false});
    }



    render() {
        const UI = (
            <ClientProfile onMouseOver={this.activeProfile} onMouseOut={this.deactiveProfile} active={this.state.profileHover}>
                        <Avatar active={this.state.profileHover} />
                        <TypoContainer>
                                <Typography variant="h6" children={this.props.clientName} style={{textAlign: 'center', fontWeight: 'bold'}}  />
                        </TypoContainer>
            </ClientProfile>

        );
        return UI;
    }
}

const ClientRows = props => {

 
    const UI = (
        <ClientLayout {...props}>
                <ClientHeader>
                    <Typography variant='h3' children='Choose Client' style={{color: '#fff'}} />
                </ClientHeader>
                    <Box style={{
                        width: '100%',
                        height: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        
                    }}>

                            <ClientProfiles clientName='Mostafa' />
                            <ClientProfiles clientName='Mostafa' />
                            <ClientProfiles clientName='Mostafa' />
                                
                            
                        </Box>
                        <LayoutBottom>
                            <AddClientButton
                            onClick={props.addClientComponent}
                             children={<Typography variant='button' children='Add Client' />} />

                        </LayoutBottom>
        </ClientLayout>
    );

    return UI;
}



class Page extends Component {

    state = {
        moreClients: false,
        clientsRow: true  
    }

    aviodSaving = (e) => {
        e.preventDefault();
        return false;
    }

    
    addClientComponent = () => {
        this.setState({moreClients: true});
        this.setState({clientsRow: false});
    }

    selectClientComponent = () => {
        this.setState({moreClients: false});
        this.setState({clientsRow: true});
    }

    render() {
        const { classes } = this.props;
        const toAddClient = this.state.moreClients;
        const toSeeRowClients = this.state.clientsRow;
        const UI = (
            <div>
                <PageLayout>

                    <PageHeader>
                        <PageSubHeader>
                            <LogoHolder  onContextMenu={(e) => this.aviodSaving(e)} >
                                <img alt='cal logo' src={Logo} />
                            </LogoHolder>
                        </PageSubHeader>
                    </PageHeader>


                    <Prifix>

                        <Grow
                             timeout={{
                                 enter: 1000,
                                 exit: 1000
                             }}
                             in={toSeeRowClients}>
                            

                        
                           <Box  className={classes.conta}>
                            <ClientRows  {...this.props}
                            activeprofile={this.activeProfile}
                            deactiveprofile={this.deactiveProfile}
                            profilehover={this.state.profileHover}
                            addClientComponent={this.addClientComponent}
                            
                             />
                          </Box>
                        </Grow>
                        

                        <Grow
                             timeout={{
                                enter: 1000,
                                exit: 1000
                            }}
                             in={toAddClient} >
                          <Container style={clientRowPrfix}>
                            <AddClient 
                            cancelBtn={this.selectClientComponent}
                            />
                          </Container>
                        </Grow>
                        

                    </Prifix>   

                </PageLayout>
                
            </div>
        );
    
        return UI;
    }
}

export default withStyles(advStyle)(Page);