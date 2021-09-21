import React from 'react';

import GithubLogo from '../images/github-logo.svg';

export default function Header() {
    return (
        <div id="header">
            <a href="/">
                <img src={GithubLogo} alt="GitHub logo" />
                <h1>GitHub User Search</h1>
            </a>
        </div>
    )
}
