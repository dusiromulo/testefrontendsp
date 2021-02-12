import React from 'react';
import { Card as CardUI } from 'react-native-paper';
import PropTypes from 'prop-types';
import StyleContants from '../../../styles/constants';

const propTypes = {
    /**
     * Margin measures
     */
    margin: PropTypes.object,
    /**
     * Padding measures
     */
    padding: PropTypes.object,
};

const defaultProps = {
    margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
};

const Card = (props) => {
    return (
        <CardUI 
            elevation={10}
            style={{
                marginTop: props.margin.top,
                marginBottom: props.margin.bottom,
                marginLeft: props.margin.left,
                marginRight: props.margin.right,
                paddingTop: props.padding.top,
                paddingBottom: props.padding.bottom,
                paddingLeft: props.padding.left,
                paddingRight: props.padding.right,
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