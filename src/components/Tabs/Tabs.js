import React, {Component} from 'react';
import data from '../../assets/data/data.json';
import * as styles from "./Tabs.module.scss";
import {IMAGES} from "../../assets/images/images";

class Tabs extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        const list = [];
        data.map((item, index) => {
            if (index === 0) {
                list.push({
                    title: item.title,
                    content: item.content,
                    isOpen: true,
                    text: 'READ LESS',
                })
            } else {
                list.push({
                    title: item.title,
                    content: item.content,
                    isOpen: false,
                    text: 'READ MORE',
                })
            }
            return list;
        });
        this.setState({ list });
    }

    handleExpand = (items, text) => {
        const list = [];
        data.map((item, index) => {
           if (items === item.title && text !== 'READ LESS') {
               list.splice(index, 1, {
                    title: item.title,
                    content: item.content,
                    isOpen: true,
                    text: 'READ LESS',
               })
           } else {
               list.push({
                    title: item.title,
                    content: item.content,
                    isOpen: false,
                    text: 'READ MORE',
               })
           }
           return list;
        });
        this.setState({ list });
    };

    render() {
        return this.state.list.map((item, index) => {
            // eslint-disable-next-line
            if (index === 2) return;
            const text = item.text;
            return (
                <div key={index} className={styles.Frame}>
                    <div className={styles.ContentContainer}>
                        <img className={styles.Image} src={IMAGES.ContentImages} alt={IMAGES.ContentImages} />
                        {item.isOpen ?
                            <h4 className={styles.TitleTransition}>{item.title}</h4> :
                            <h4 className={styles.Title}>{item.title}</h4>
                        }

                        {item.isOpen ?
                            <div className={styles.ContentTransition} dangerouslySetInnerHTML={{__html: item.content}}></div> :
                            <div className={styles.Content} dangerouslySetInnerHTML={{__html: item.content}}></div>
                        }
                    </div>
                    <div className={styles.ButtonContainer}>
                        <button onClick={() => this.handleExpand(item.title, item.text)} className={([styles.Button, styles.ButtonWhite]).join(' ')}>{text}</button>
                    </div>
                </div>
            )
        })
    }
}

export default Tabs;
