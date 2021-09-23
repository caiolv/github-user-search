import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import api from '../services/api';

import Loader from '../components/Loader';

export default function Repos() {
    let location = useLocation();
    let { user: userParam } = useParams();
    let [loading, setLoading] = useState(false);
    let [repos, setRepos] = useState([]);

    let source = location.pathname.includes('starred') ? 'starred' : 'repos';

    useEffect(() => {
        async function getUserRepos() {
            setLoading(true);

            const { data } = await api.get(`/users/${userParam}/${source}`);

            console.log(data);

            setRepos(data);
            setLoading(false);
        }

        getUserRepos();
    }, []);

    console.log(location);

    return (
        <>
            {loading ? <Loader /> : repos &&
                <Container className="mt-4 mb-5">
                    <Breadcrumb>
                        <Breadcrumb.Item href={`/${userParam}`}>{userParam}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{source}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="justify-content-center">
                        {
                            repos.map(repo => (
                                <Card
                                    bg="dark"
                                    text="light"
                                    className="m-2"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Body>
                                        <Card.Title>{repo.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{repo.language}</Card.Subtitle>
                                        <Card.Text>{repo.description}</Card.Text>
                                        <Button
                                            href={repo.html_url}
                                            className="btn btn-light"
                                        >
                                            Abrir repositório
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </Row>
                </Container>
            }
        </>
    )
}
