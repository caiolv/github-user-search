import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import api from '../services/api';

import Loader from '../components/Loader';
import UserPreview from '../components/UserPreview';
import Repo from '../components/Repo';

export default function Search({ location }) {
    const { search } = location;
    let [loading, setLoading] = useState(false);
    let [usersData, setUsersData] = useState({ items: [] });
    let [reposData, setReposData] = useState({ items: [] });
    let [key, setKey] = useState();

    useEffect(() => {
        async function getUserRepos() {
            setLoading(true);

            const [{ data: resultUsers }, { data: resultRepositories }] = await Promise.all([
                api.get(`/search/users${search}`),
                api.get(`/search/repositories${search}`),
            ]);

            setUsersData(resultUsers);
            setReposData(resultRepositories);

            console.log(resultRepositories);

            setLoading(false);
        }

        getUserRepos();
    }, []);

    const handleSelect = (key) => {
        setKey(key);
    }

    return (
        <Container className="my-5">
            {loading ? <Loader /> : (
                <Tabs activeKey={key} onSelect={handleSelect}>
                    <Tab eventKey={1} title={`Usuários (${usersData.total_count})`}>
                        <div className="mt-3 d-flex flex-wrap justify-content-center">
                            {usersData.items.map(user => (
                                <UserPreview user={user} />
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey={2} title={`Repositórios (${reposData.total_count})`}>
                        <div className="mt-3 d-flex flex-wrap justify-content-center">
                            {reposData.items.map(repo => (
                                <Repo repo={repo} showUser />
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            )
            }
        </Container>
    )
}
