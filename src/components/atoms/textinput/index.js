import React from 'react';
import { TextInput as TextInputUI } from 'react-native-paper';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Content label of TextInput
     */
    label: PropTypes.string,
    /**
     * Content value of TextInput
     */
    value: PropTypes.string,
    /**
     * Callback for button onPress
     */
    onChange: PropTypes.func,
};

const defaultProps = {
    label: 'Teste TextInput',
    value: '',
    onChange: (val) => { },
};

const TextInput = (props) => {
    return (
        <TextInputUI
            mode="outlined"
            label={props.label}
            value={props.value}
            onChangeText={props.onChange}
            selectionColor='#B0D3FA'
            theme={{...props.theme, colors: {primary: '#707070'}}}
        />
    );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;