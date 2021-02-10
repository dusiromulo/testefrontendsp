import React from 'react';
import { Text as TextUI, withTheme } from 'react-native-paper';
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
     * Font weight (can be bold, medium or light)
     */
    weight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
    /**
     * Font size
     */
    size: PropTypes.number,
};

const defaultProps = {
    text: 'Teste botão',
    color: '#707070',
    weight: 'normal',
    size: 14,
};

const Text = (props) => {
    return (
        <TextUI 
        weight=''
        style={{
            color: props.color,
            fontSize: props.size,
            fontWeight: props.weight,
            fontFamily: 'Helvetica Neue',
        }}>
            {props.text}
        </TextUI>
    );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default withTheme(Text);