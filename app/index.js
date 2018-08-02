var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render () {
        return(
            <div>
                Hello Master
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);