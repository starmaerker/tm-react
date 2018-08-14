import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
}

class Loading extends React.Component {   
    state = {
        text: this.props.text
    }

    static PropTypes = {
        text: PropTypes.string.isRequired,
        speed: PropTypes.number.isRequired
    }

    static defaultProps = {
        text: 'Loading',
        speed: 300
    }

    componentDidMount() {
        const { text, speed } = this.props;
        const stopper = text + '...';

        this.intervall = window.setInterval(() => {
            this.state.text === stopper
                ? this.setState(() => ({ text: this.props.text }))
                : this.setState((prevState) => ({ text: prevState.text + '.' }))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.intervall);
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

export default Loading;