import React from 'react';
import { NavLink } from "react-router-dom";

import * as classes from './main.module.scss';

const main = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
                <NavLink
                    to='/ex1'
                    exact={true}
                    activeClassName={classes.active}>
                    Exercise 1
                    {props.children}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/ex2'
                    exact={true}
                    activeClassName={classes.active}>
                    Exercise 2
                    {props.children}
                </NavLink>
            </li>
        </ul>
    )
};

export default main;
