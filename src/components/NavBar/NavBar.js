import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, AppBar, Button } from '@material-ui/core';
import './NavBar.css';

export default function NavBar() {
    const navLinks = [
        { 'title': 'Home', 'link': '/' },
        { 'title': 'Services', 'link': '/services' },
        { 'title': 'Equipment', 'link': '/equipment' },
        { 'title': 'Contact Us', 'link': '/contact' }
    ]

    return (
        <div>
            <AppBar className="navRoot">
                <Container className="navContainer">
                    {navLinks.map((e, index) => (
                        <NavLink exact className="navLink" activeClassName="navActive" to={e.link}>
                            <Button className="navButton">{e.title}</Button>
                        </NavLink>
                    ))}
                </Container>
            </AppBar>
        </div>
    );
}