import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const UserPreview = ({ user }) => {
    const { login, avatar_url } = user;

    return (
        <a id="user-preview" href={`/${login}`} >
            <Image className="mb-2" src={avatar_url} roundedCircle />
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