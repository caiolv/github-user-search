import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Repo = ({ repo, showUser }) => {
    const {
        owner,
        name,
        language,
        description,
        html_url,
    } = repo;

    return (
        <Card
            bg="dark"
            text="light"
            className="m-2"
            style={{ width: '18rem' }}
        >
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Text className="mb-2">{showUser ? `${owner.login}/${name}` : name}</Card.Text>
                    <Card.Subtitle className="mb-3 text-muted">{language}</Card.Subtitle>
                </div>
                <Card.Text>{description}</Card.Text>
                <Button
                    href={html_url}
                    className="btn btn-light"
                >
                    Abrir repositório
                </Button>
            </Card.Body>
        </Card>
    )
}

Repo.defaultProps = {
    repo: {
        name: 'Repository',
        language: 'Language',
        description: 'Description',
        html_url: 'URL',
    },
};

Repo.propTypes = {
    repo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        language: PropTypes.string,
        description: PropTypes.string,
        html_url: PropTypes.string.isRequired,
    }),
};

export default Repo;