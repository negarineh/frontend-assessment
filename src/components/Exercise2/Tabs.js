import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../../assets/data/data';
import Ax from './Ax';

class DropdownMenu extends Component {
    state = {
        hideNav: false,
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        let currentHideNav = (window.innerWidth >= 600);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hideNav: currentHideNav});
        }
        console.log(this.state.hideNav, window.innerWidth)
    };

    render = () => {
        const tabs = (
            <Tabs defaultActiveKey="Section 1" id="uncontrolled-tab-example">
                {data.map((item, index) => {
                    return (
                        <Tab key={index} eventKey={item.title} title={item.title} dangerouslySetInnerHTML={{__html: item.content}}></Tab>
                    )
                })
                }
            </Tabs>
        );
        const accordion = (
            <Accordion defaultActiveKey={0}>
                {data.map((item, index) => {
                    return (
                        <Card key={index}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                    {item.title}
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Body dangerouslySetInnerHTML={{__html: item.content}}></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        );

        return (
            <Ax>
                {this.state.hideNav ? tabs : accordion}
            </Ax>
        )
    };
}

export default DropdownMenu;

