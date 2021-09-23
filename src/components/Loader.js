import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
        </Container>
    )
}
