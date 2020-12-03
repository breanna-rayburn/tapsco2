import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import tapsLogo from '../../imgs/tapsco2-logo-w-glow.png';
import './Equipment.css';

export default function Equipment() {
    return (
        <div>
            <Grid item xs={12} className="equipmentHeader">
                <img src={tapsLogo} alt="tapsco2 logo" />
            </Grid>
            <NavBar />
            <p>test2</p>
        </div>
    );
}