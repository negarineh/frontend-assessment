import React from 'react';
import { NavLink } from "react-router-dom";

import * as classes from './main.module.scss';
import Ax from './Exercise2/Ax';

const main = (props) => {
    return (
        <Ax>
            <h3 className={classes.H3}>Frontend Assessment</h3>
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
                <li className={classes.NavigationItem}>
                    <NavLink
                        to='/ex2'
                        exact={true}
                        activeClassName={classes.active}>
                        Exercise 2
                        {props.children}
                    </NavLink>
                </li>
            </ul>
        </Ax>
    )
};

export default main;
