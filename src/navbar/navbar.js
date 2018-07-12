import React, {Component} from 'react';
import {string, array} from 'prop-types';

import styles from './navbar.css';

export default class NavBar extends Component {
    state = {expanded: true};

    static propTypes = {
        title: string,
        sections: array,
    };

    static defaultProps = {
        title: 'Test React App',
        sections: [
            {link: '#', name:'home'},
            {link: '#', name:'contact'},
            {link: '#', name:'about'}
        ]
    };

    handleExpand = (e) => {
        e.preventDefault();
        this.setState(prevState => ({expanded: !prevState.expanded}))
    }

    render() {
        const {title, sections} = this.props;

        return (
            <div className="topNav" id="topNavContainer">
                <a href="#" className="listItemStyles">{title}</a>
                {sections.map((section) => {
                    return <a href={section.link}>{section.name}</a>
                })}
            </div>
        )
    }
}