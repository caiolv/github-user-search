import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import SearchSource from '../components/SearchSource';

export default function Search({ location }) {
    const { search } = location;
    let [usersData, setUsersData] = useState({ items: [] });
    let [reposData, setReposData] = useState({ items: [] });
    let [tabKey, setTabKey] = useState();

    const handleSelect = (key) => {
        setTabKey(key);
    }

    return (
        <Container className="my-5">
            <Tabs activeKey={tabKey} onSelect={handleSelect}
                id="controlled-tab-example">
                <Tab eventKey={1} title={`Usuários (${usersData.total_count})`}>
                    <SearchSource search={search} source="users" setFunc={setUsersData} />
                </Tab>
                <Tab eventKey={2} title={`Repositórios (${reposData.total_count})`}>
                    <SearchSource search={search} source="repositories" setFunc={setReposData} />
                </Tab>
            </Tabs>
        </Container>
    )
}
