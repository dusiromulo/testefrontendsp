import React, { useState } from 'react';
import { TextInput as TextInputUI } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
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
     * Mask for value of TextInput
     */
    mask: PropTypes.string,
    /**
     * Content value of TextInput
     */
    value: PropTypes.string,
    /**
     * Callback for button onPress
     */
    onChange: PropTypes.func,
    /**
     * Error on value
     */
    error: PropTypes.bool,
};

const defaultProps = {
    label: 'Teste TextInput',
    size: 16,
    mask: '',
    value: '',
    onChange: (val) => { },
    error: false,
};

const TextInputM = (props) => {
    const [val, setVal] = useState(props.value);
    const { mask, size } = props;
    return (
        <TextInputUI
            mode="outlined"
            label={props.label}
            value={val}
            onChangeText={props.onChange}
            selectionColor='#B0D3FA'
            error={props.error}
            theme={{...props.theme, colors: {primary: '#707070'}}}
            style={{ width: '100%', backgroundColor: 'white' }}
            render={props =>
                <TextInputMask
                    {...props}
                    style={ { width: '100%', maxWidth: '100%', color: '#707070', fontSize: size, paddingHorizontal: 14 } }
                    mask={ mask }
                    value={ props.value }
                    onChangeText={(formatted, extracted) => {
                        setVal(extracted);
                        props.onChangeText(extracted);
                    }}
                />
            }
        />
    );
}

TextInputM.propTypes = propTypes;
TextInputM.defaultProps = defaultProps;

export default TextInputM;