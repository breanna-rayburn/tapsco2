import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import tapsLogo from '../../imgs/tapsco2-logo-w-glow.png';
import './Contact.css';

export default function Contact() {
    return (
        <div>
            <Grid item xs={12} className="contactHeader">
                <img src={tapsLogo} alt="tapsco2 logo" />
            </Grid>
            <NavBar />
            <p>contact</p>
        </div>
    );
}