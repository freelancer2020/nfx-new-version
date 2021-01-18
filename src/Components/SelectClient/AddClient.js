import React, { Component } from 'react';
import styled from 'styled-components';
import { 
    Typography,
    withStyles,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem
   

} from '@material-ui/core';
import Ava2 from '../../Assets/avatar2.png';

const styles = {
    header: {
        color: '#fff'
    },
    subtitle: {
        color: 'grey',
        marginTop: '10px'
    },
    box: {
        width: '100%',
        height: '25vh',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid #333',
        borderBottom: '1px solid #333',
        marginTop: '10px'
    },
    boxBottom: {
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center'
    },
  
    root: {
        border: 'none',
        width: '30vw',
        marginLeft: '20px',
        '&$focused': {
            color: 'green'
        }
        
    },
    outlined: {
        border: 'none',
        backgroundColor: '#333',
        outline: '0',
        color: 'royalblue',
        '&::after': {
            left: '0',
            right: '0',
            bottom: '0',
            content: '',
            position: 'absolute',
            transform: 'scaleX(0)',
            borderBottom: 'none'

        }

    }
    
}
const ContinueBtn = styled.div`
padding-top: 1em;
padding-bottom:1em;
padding-left: 2em;
padding-right: 2em;
width: auto;
height: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
color: #212121;
border-radius: 2px;
cursor: pointer;
font-weight: bold;
&:hover {
    background-color: #e50914;
    color: #ffff;
}
`;

const CancelBtn = styled.div`
padding-top: 1em;
padding-bottom: 1em;
padding-left: 2em;
padding-right: 2em;
width: auto;
height: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
color: #212121;
border-radius: 2px;
border: 1px solid grey;
color: grey;
cursor: pointer;
font-weight: bold;
margin-left: 20px;
&:hover {
    border: 1px solid #fff;
    color: #ffff;
}
`;

const AddClientLayout = styled.div`
width: 50vw;
height: 60vh;
display: flex;
flex-direction: column;
background-color: #221f1f;
position: absolute;
left: 0;
right: 0;
margin: auto;

`;

const Avatar = styled.div`
width: 10vw;
height: 20vh;
display: flex;
border-radius: 4px;
background-image: url(${Ava2});
background-size: 100% 100%;
z-index: 2;
background-repeat: no-repeat;
`;


const CancelButton = props => {

    const UI = (
        <div onClick={props.cancel}>
            <CancelBtn>
               <Typography style={{fontWeight: 'bold'}} variant='button' children='CANCEL' />
            </CancelBtn>
        </div>
    );

    return UI;
}





class AddClient extends Component {

    state = {
        inpVal: ''
    }

    test = () => {
        alert("Dss")
    }

    handlChange = (e) => {
        this.setState({inpVal: e.target.value})
    }

    render() {
        const { classes } = this.props;
        const UI = (
            <AddClientLayout>
                <Typography variant='h3' component='h3' children='Add Client' className={classes.header} />
                <Typography variant='subtitle1' children='Add Another Client to your list.' className={classes.subtitle} />
                <Box className={classes.box}>
                    <Avatar />
                    <FormControl variant='filled' className={classes.root}>
                      <InputLabel id="demo-simple-select-outlined-label" style={{color: '#fff'}}>select client</InputLabel>
                        <Select
                        className={classes.outlined}
                        labelId='demo-simple-select-outlined-label'
                        value={this.state.inpVal}
                        label='Add Client'
                        onChange={(e) => this.handlChange(e)}
                        >
                            <MenuItem value='client_1'>
                                <em>Client_1</em>
                            </MenuItem>
                            <MenuItem value='client_2'>
                                <em>Client_2</em>
                            </MenuItem>
                            <MenuItem value='client_3'>
                                <em>Client_3</em>
                            </MenuItem>
                            <MenuItem value='client_4'>
                                <em>Client_4</em>
                            </MenuItem>
                        </Select>

                    </FormControl>
                </Box>
                <Box className={classes.boxBottom}>
                   <ContinueBtn>
                       <Typography style={{fontWeight: 'bold'}} variant='button' children='CONTINUE' />
                   </ContinueBtn>
                   <CancelButton cancel={this.props.cancelBtn}/>
                       
                   
                </Box>

            </AddClientLayout>
        );

        return UI
    }
}

export default withStyles(styles)(AddClient);