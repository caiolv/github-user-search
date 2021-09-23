import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Repo({ repo }) {
    return (
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
    )
}
