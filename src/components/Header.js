import React from 'react';

import GithubLogo from '../images/github-logo.svg';

export default function Header() {
    return (
        <div id="header">
            <a href="/">
                <img src={GithubLogo} alt="GitHub logo" />
                <strong>GitHub User Search</strong>
            </a>
        </div>
    )
}
