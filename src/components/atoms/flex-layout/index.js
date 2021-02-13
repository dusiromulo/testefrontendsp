import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Direction of child elements ('column' | 'row')
     */
    direction: PropTypes.string,
    /**
     * Align content flex behaviour ('flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around')
     */
    alignItems: PropTypes.string,
    /**
     * Justify content flex behaviour ('flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly')
     */
    justifyContent: PropTypes.string,
    /**
     * Fill all width avaiable
     */
    fullWidth: PropTypes.bool,
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
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fullWidth: false,
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

const FlexLayout = (props) => {
    return (
        <View style={{
            marginTop: props.margin.top,
            marginBottom: props.margin.bottom,
            marginLeft: props.margin.left,
            marginRight: props.margin.right,
            paddingTop: props.padding.top,
            paddingBottom: props.padding.bottom,
            paddingLeft: props.padding.left,
            paddingRight: props.padding.right,
            width: props.fullWidth? '100%': 'auto',
            flexDirection: props.direction, 
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
        }}>
            { props.children }
        </View>
    );
}

FlexLayout.propTypes = propTypes;
FlexLayout.defaultProps = defaultProps;

export default FlexLayout;