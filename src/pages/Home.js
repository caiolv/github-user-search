import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import GithubLogo from '../images/github-logo.svg';
import searchIcon from '../images/search.svg';

export default function Home() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container fluid id="home" className="d-flex justify-content-center">
            <img id="logo" src={GithubLogo} alt="GitHub Logo" className="img-fluid" />
            <Row className="d-flex justify-content-center">
                <Col md="6" s="12" xs="10">
                    <Form.Control type="text" placeholder="Buscar por usuário" />
                </Col>
                <Col md="2" s="12" className="d-flex justify-content-center mt-x-3">
                    <button type="submit">Buscar <img src={searchIcon} alt="Search Icon" /></button>
                </Col>
            </Row>
        </Container >
    )
}
