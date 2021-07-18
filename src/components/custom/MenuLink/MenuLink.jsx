import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './MenuLink.scss';
import classNames from 'classnames';

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "active" : ""}>
            <Link className="menu-link" to={to}>{label}</Link>
        </li>
    );
}

export default MenuLink;