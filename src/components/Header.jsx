import React from 'react';

export const Header = () => {
    return (
        <nav className='indigo darken-1'>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">React Vitrina</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}