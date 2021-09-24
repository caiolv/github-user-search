import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({ page, handlePage }) {
    return (
        <Container>
            <button
                type="button"
                disabled={page < 2}
                onClick={() => handlePage('back')}
            >
                <MdArrowBack size={15} color="#0076f7" />
                <span>Anterior</span>
            </button>
            <span>Página {page}</span>
            <button
                type="button"
                onClick={() => handlePage('next')}
            >
                <span>Próximo</span>
                <MdArrowForward size={15} color="#0076f7" />
            </button>
        </Container>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    handlePage: PropTypes.func.isRequired,
};
