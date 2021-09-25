import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import api from '../services/api';

import Loader from '../components/Loader';



export default function User() {
    let history = useHistory();
    let { user: userParam } = useParams();
    let [loading, setLoading] = useState(false);
    let [user, setUser] = useState({});

    useEffect(() => {
        async function getUserData() {
            setLoading(true);
            const { data } = await api.get(`/users/${userParam}`);

            setUser(data);
            setLoading(false);
        }
        getUserData();
    }, []);

    const handleNavigate = (to) => {
        history.push(`/${userParam}/${to}`);
    };

    return (
        <>
            {loading ? <Loader /> : user &&
                <Container className="mt-5">

                    <Row className="d-flex justify-content-center">
                        <Col xs="12" md="4" lg="" className="d-flex justify-content-center">
                            <Image width={200} src={user.avatar_url} roundedCircle />
                        </Col>
                        <Col
                            xs="12"
                            md="8"
                            lg=""
                            className="d-flex flex-column justify-content-center align-items-md-start align-items-center

 mt-2"
                        >
                            <h1>{user.name || user.login}</h1>
                            <p>{user.bio}</p>
                        </Col>
                        <Col xs="6" sm="6" md="4" className="d-flex justify-content-center mt-3">
                            <Button variant="dark" onClick={() => handleNavigate("repos")}>
                                Visitar repositórios
                            </Button>
                        </Col>
                        <Col xs="6" sm="6" md="4" className="d-flex justify-content-center mt-3">
                            <Button variant="dark" onClick={() => handleNavigate("starred")}>
                                Visitar stareds
                            </Button>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}
