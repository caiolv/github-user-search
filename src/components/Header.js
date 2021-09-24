import React from 'react';

import GithubLogo from '../images/github-logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={GithubLogo}
                        width="50"
                        height="50"
                    />{' '}
                    GitHub User Search
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
