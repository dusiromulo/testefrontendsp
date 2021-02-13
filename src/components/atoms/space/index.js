import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Space needed vertically
     */
    vertical: PropTypes.number,
    /**
     * Space needed horizontally
     */
    horizontal: PropTypes.number,
};

const defaultProps = {
    vertical: 0,
    horizontal: 0,
};

const Space = (props) => {
    return (
        <View style={{
            width: props.horizontal,
            height: props.vertical
        }}/>
    );
}

Space.propTypes = propTypes;
Space.defaultProps = defaultProps;

export default Space;