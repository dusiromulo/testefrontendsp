import React from 'react';
import { Card as CardUI } from 'react-native-paper';
import PropTypes from 'prop-types';
import StyleContants from '../../../styles/constants';

const propTypes = {
    /**
     * Children elements to be rendered
     */
    children: PropTypes.node,
};

const defaultProps = {
    text: 'Teste botão',
    onPress: () => { },
};

const Card = (props) => {
    return (
        <CardUI 
            elevation={10}
            style={{
                height: 250,
                paddingVertical: 50,
                paddingHorizontal: 25,
                marginTop: 24,
                marginBottom: 48,
                marginHorizontal: 10,
                borderRadius: 24,
            }}
        >
            <CardUI.Content>
                {props.children}
            </CardUI.Content>
        </CardUI>
    );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;