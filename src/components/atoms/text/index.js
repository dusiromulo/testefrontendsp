import React from 'react';
import { Text as TextUI } from 'react-native-paper';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Content text
     */
    text: PropTypes.string,
    /**
     * Font color
     */
    color: PropTypes.string,
    /**
     * Font weight ('normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900')
     */
    weight: PropTypes.string,
    /**
     * Font size
     */
    size: PropTypes.number,
    /**
     * Fill all width avaiable
     */
    fullWidth: PropTypes.bool,
    /**
     * Center text align
     */
    centerText: PropTypes.bool,
};

const defaultProps = {
    text: 'Teste botão',
    color: '#707070',
    weight: 'normal',
    size: 14,
    fullWidth: false,
    centerText: false,
};

const Text = (props) => {
    return (
        <TextUI 
            style={{
                width: props.fullWidth? '100%': 'auto',
                color: props.color,
                fontSize: props.size,
                fontWeight: props.weight,
                fontFamily: 'Helvetica Neue',
                letterSpacing: 0,
                textAlign: props.centerText? 'center': 'left',
            }
        }>
            {props.text}
        </TextUI>
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;