import React from 'react';
import { Button as ButtonUI } from 'react-native-paper';
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

const Button = (props) => {
    return (
        <ButtonUI mode="contained" onPress={props.onPress} dark>
            {props.text}
        </ButtonUI>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;