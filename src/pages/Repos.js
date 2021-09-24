import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import api from '../services/api';

import Loader from '../components/Loader';
import Repo from '../components/Repo';

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

            setRepos(data);
            setLoading(false);
        }

        getUserRepos();
    }, []);

    return (
        <Container className="mt-4 mb-5">
            <Breadcrumb>
                <Breadcrumb.Item href={`/${userParam}`}>{userParam}</Breadcrumb.Item>
                <Breadcrumb.Item active>{source}</Breadcrumb.Item>
            </Breadcrumb>
            {loading ? <Loader /> : repos &&
                <Row className="justify-content-center">
                    {
                        repos.map(repo => (<Repo repo={repo} />))
                    }
                </Row>
            }
        </Container>
    )
}
