import React from 'react';
import { Button as ButtonUI } from 'react-native-paper';
import Text from '../text';
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
    /**
     * Boolean to disable button (default false)
     */
    disable: PropTypes.bool,
    /**
     * Style of button
     */
    style: PropTypes.object,
};

const defaultProps = {
    text: 'Teste botão',
    onPress: () => { },
    disable: false,
    style: {}
};

const Button = (props) => {
    return (
        <ButtonUI
            mode="contained"
            onPress={props.onPress}
            uppercase={false}
            compact
            disabled={props.disable}
            style={props.style}>
            <Text text={props.text} color='white' />
        </ButtonUI>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;