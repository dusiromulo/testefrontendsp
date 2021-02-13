import React, { useState } from 'react';
import { TextInput as TextInputUI } from 'react-native-paper';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Content label of TextInput
     */
    label: PropTypes.string,
    /**
     * Size of text of TextInput
     */
    size: PropTypes.number,
    /**
     * Content value of TextInput
     */
    value: PropTypes.string,
    /**
     * Callback for button onPress
     */
    onChange: PropTypes.func,
    /**
     * If value of TextInput is bad
     */
    error: PropTypes.bool,
};

const defaultProps = {
    label: 'Teste TextInput',
    size: 16,
    value: '',
    onChange: (val) => { },
    error: false,
};

const TextInput = (props) => {
    const [val, setVal] = useState(props.value);
    return (
        <TextInputUI
            mode="outlined"
            label={props.label}
            value={val}
            onChangeText={(value) => {
                setVal(value);
                props.onChange(value);
            }}
            error={props.error}
            selectionColor='#B0D3FA'
            theme={{ ...props.theme, colors: { primary: '#707070' } }}
            style={{ width: '100%', fontSize: props.size }}
        />
    );
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;