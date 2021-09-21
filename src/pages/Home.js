import React from 'react';

import GithubLogo from '../images/github-logo.svg';
import searchIcon from '../images/search.svg';

export default function Home() {
    return (
        <div id="home">
            <img src={GithubLogo} alt="GitHub Logo" />
            <form>
                <input placeholder="Buscar por usuário" />
                <button type="submit">Buscar <img src={searchIcon} alt="Search Icon" /></button>
            </form>
        </div>
    )
}
