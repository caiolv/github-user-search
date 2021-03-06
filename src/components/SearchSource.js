import React, { useEffect, useState } from 'react';

import TabContainer from 'react-bootstrap/TabContainer';

import api from '../services/api';

import Loader from './Loader';
import UserPreview from './UserPreview';
import Pagination from './Pagination';
import Repo from './Repo';

export default function SearchSource({ search, source, setFunc }) {
    let [responseData, setResponseData] = useState({ items: [] });
    let [loading, setLoading] = useState(false);
    let [hasNextPage, setHasNextPage] = useState(false);
    const [page, setPage] = useState(1);

    let title = source === "users" ? "Usuários" : "Repositórios";

    async function loadFromSource() {
        setLoading(true);

        const { data: resultResponse, headers } = await api.get(`/search/${source}${search}`, {
            params: {
                page,
            },
        });

        setHasNextPage(headers.link && Boolean(headers.link.includes("next")));

        setResponseData(resultResponse);
        setFunc(resultResponse)
        setLoading(false);
    }

    useEffect(() => {
        loadFromSource();
    }, [page]);

    async function handlePage(action) {
        setResponseData({ items: [] });
        setPage(action === 'back' ? page - 1 : page + 1);
    }

    return (
        <>
            {loading ? <Loader /> : (
                <TabContainer eventKey={1} title={`${title} (${responseData.total_count})`}>
                    <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
                        {
                            responseData.items.map(resp => (
                                source === "users" ?
                                    <UserPreview key={resp.id} user={resp} />
                                    :
                                    <Repo key={resp.id} repo={resp} showUser />
                            ))
                        }
                    </div>
                    <Pagination
                        page={page}
                        handlePage={handlePage}
                        next={hasNextPage}
                    />
                </TabContainer>
            )
            }
        </>
    )
}
