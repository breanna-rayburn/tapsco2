import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import tapsLogo from '../../imgs/tapsco2-logo-w-glow.png';
import './Home.css';

export default function Home() {
    return (
        <div>
            <Grid item xs={12} className="homeHeader">
                <img src={tapsLogo} alt="tapsco2 logo" />
            </Grid>
            <NavBar />
            <Container>
                <Grid item xs={12} className="homeCTA">
                    <Typography variant="h2">For the Perfect Blend</Typography>
                    <Typography variant="h4">We are your local source for Bulk CO2, Nitrogen Generators, Gas Blenders, Brew Gas and more!</Typography>
                </Grid>
            </Container>
        </div>
    );
}