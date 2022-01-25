import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Sidebar from './Sidebar';
import Posts from './Posts';


export function MainGrid(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                <Grid container spacing={8} >
                    <Posts/> 
                    <Sidebar title='Météo en Temps réel'/>                         
                </Grid>                
                </main>
            </Container>            
        </React.Fragment>
    )    
}