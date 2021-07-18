import MenuLink from 'components/custom/MenuLink/MenuLink';
import React from 'react';
import './Menu.scss';

function index() {
    return (
        <nav className="menu__header">
            <ul className="menu__header--ul">
                <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
                <MenuLink to="/product" label="Product" activeOnlyWhenExact={true} />
                <MenuLink to="/about" label="About" activeOnlyWhenExact={true} />
            </ul>
        </nav>
    );
}

export default index;