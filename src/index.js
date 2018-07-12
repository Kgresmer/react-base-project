import React from 'react';
import ReactDom from 'react-dom';
import NavBar from "./navbar/navbar";

class Home extends React.Component {

    state = {title: 'class component', count: 1, dateTime: new Date()};

    handleClick = (event) => {
        this.setState({
            title: 'clicked class component',
            count: this.state.count += 1,
            dateTime: new Date()
        });
        console.log(event)
    };

    render() {
        return (
            <div>
                <NavBar sections={[{link: "#", name: "Kevin"}]} title={this.state.title}/>
                <div style={{display: 'block'}}>
                    <h2>{this.state.title + " " + this.state.count}</h2>
                    <h4>{this.state.dateTime.toISOString()}</h4>
                    <button id={'buttonOne'} onClick={this.handleClick}>
                        {this.props.label}
                    </button>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <Home label="Alter"/>, document.getElementById('app')
);

module.hot.accept();