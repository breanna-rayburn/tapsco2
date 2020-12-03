import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import tapsLogo from '../../imgs/tapsco2-logo-w-glow.png';
import './Services.css';

export default function Services() {
    return (
        <div>
            <Grid item xs={12} className="servicesHeader">
                <img src={tapsLogo} alt="tapsco2 logo" />
            </Grid>
            <NavBar />
            <p>test3</p>
        </div>
    );
}