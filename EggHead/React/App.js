import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.txt}</h1>
            </div>
        );
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
};

ReactDOM.render(
    <App txt="Testing out props" />,
    document.getElementById('app')
);
