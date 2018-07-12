import React from 'react';
import ReactDom from 'react-dom';

class Home extends React.Component {

    state = { title: 'class component', count: 1};

    handleClick = () => {
        this.setState({title: 'clicked class component', count: count++})
    };

    render() {
        return (
            <div>
                <h2>{this.state.title + " " + this.state.count}</h2>
                <button id={'buttonOne'} onClick={this.handleClick}>
                    {this.props.label}
                </button>
            </div>
        );
    }
}

ReactDom.render(
    <Home label="Alter" />, document.getElementById('app')
);

module.hot.accept();