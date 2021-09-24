import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const UserPreview = ({ user }) => {
    const { login, avatar_url } = user;

    return (
        <a
            href={`/${login}`}
            className="d-flex flex-column pt-3 pb-0 m-0 justify-content-center align-items-center btn btn-light"
            style={{ width: '12rem' }}
        >
            <Image
                className="mb-2"
                src={avatar_url}
                width="100"
                height="100"
                roundedCircle
            />
            <p>{login}</p>
        </a>
    )
}

UserPreview.defaultProps = {
    user: {
        login: 'User',
        avatar_url: 'URL',
    },
};

UserPreview.propTypes = {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
    }),
};

export default UserPreview;