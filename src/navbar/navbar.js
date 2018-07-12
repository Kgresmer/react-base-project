import React, {Component} from 'react';
import {string, array, number} from 'prop-types';

import styles from './navbar.css';

export default class NavBar extends Component {
    state = {expanded: true};

    static propTypes = {
        title: string,
        sections: array,
        collapseWidth: number
    };

    static defaultProps = {
        title: 'Test React App',
        sections: [
            {link: '#', name: 'home'},
            {link: '#', name: 'contact'},
            {link: '#', name: 'about'}
        ],
        collapseWidth: 600
    };

    constructor(props) {
        super(props);

    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.setNavbarExpanded();
        NavBar.defaultProps.sections.forEach(section => this.props.sections.splice(0, 0, section));
        window.addEventListener("resize", this.setNavbarExpanded.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.setNavbarExpanded.bind(this));
    }

    setNavbarExpanded() {
        if (window.innerWidth < this.props.collapseWidth) {
            this.setState({expanded: false});
        } else {
            this.setState({expanded: true});
        }
        console.log(this.state)
    }

    handleExpand = (e) => {
        e.preventDefault();
        this.setState(prevState => ({expanded: !prevState.expanded}))
    }

    showCollapsedMenu = () => {
        if (this.state.expanded) {
            return (
                this.props.sections.map((section) => {
                    return <a key={section.name} href={section.link}>{section.name}</a>
                })
            )
        } else {
            return (
                <div>
                    <a href="#" id="showCollapsedButton" onClick={this.onShowCollapsedMenu} style={{float: 'right'}}>+</a>
                    <div id="collapsedMenu">
                        {this.props.sections.map((section) => {
                            return <a key={section.name} href={section.link}>{section.name}</a>
                        })}
                    </div>
                </div>
            )
        }
    };

    onShowCollapsedMenu() {
        const menuDiv = document.getElementById("collapsedMenu");
        const showMenuButton = document.getElementById("showCollapsedButton");
        if (menuDiv.style.display === "block") {
            menuDiv.style.display = "none";
            showMenuButton.innerText = '+';
        } else {
            menuDiv.style.display = "block";
            showMenuButton.innerText = '—';
        }
    }

    render() {
        const {title, sections} = this.props;

        return (
            <div className="topNav" id="topNavContainer">
                <a href="#" className="listItemStyles">{title}</a>
                {this.showCollapsedMenu()}
            </div>
        )
    }

}