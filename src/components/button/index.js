import React, { Component } from 'react';
import { Button as ButtonUI } from 'react-native-material-ui';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Content text of button
     */
    text: PropTypes.string,
    /**
     * Callback for button onPress
     */
    onPress: PropTypes.func,
};

const defaultProps = {
    text: 'Teste botão',
    onPress: () => { },
};

class Button extends Component {
    render() {
        return (
            <ButtonUI raised primary text={this.props.text} onPress={this.props.onPress}/>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;