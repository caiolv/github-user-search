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
            <Form>
                <Row className="d-flex justify-content-center">
                    <Col xs="10" sm="8" md="6" lg="6" xl="4" className="mb-0">
                        <Form.Control type="text" placeholder="Buscar por usuário" maxlength="255" />
                    </Col>
                    <Col xs="4" sm="3" md="2" lg="2" xl="2" className="d-flex justify-content-center mt-sm-0 mt-4">
                        <button type="submit" onClick={handleOnSubmit}>
                            Buscar
                            <img src={searchIcon} alt="Search Icon" />
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container >
    )
}
