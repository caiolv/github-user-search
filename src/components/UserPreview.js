import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

const UserPreview = ({ user }) => {
    return (
        <a
            href={`/${user.login}`}
            className="d-flex flex-column p-3 m-0 justify-content-center align-items-center btn"
            style={{ width: '12rem' }}
        >
            <Image
                className="mb-2"
                src={user.avatar_url}
                width="100"
                height="100"
                roundedCircle
            />
            <p>{user.login}</p>
        </a>
    )
}

UserPreview.defaultProps = {
    user: {
        login: 'User',
        language: 'Language',
        description: 'Description',
        html_url: 'URL',
    },
};

UserPreview.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
    }),
};

export default UserPreview;