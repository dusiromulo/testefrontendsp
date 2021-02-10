import React from 'react';
import { Appbar } from 'react-native-paper';

import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Boolean to show back button
     */
    enableBack: PropTypes.bool,
    /**
     * Content text in center of toolbar
     */
    text: PropTypes.string,
};

const defaultProps = {
    enableBack: false,
    text: '',
};

const Toolbar = (props) => {
    return (
        <Appbar.Header>
            {props.enableBack? <Appbar.BackAction color="white" onPress={() => {}} /> : null}
            <Appbar.Content color="white" title={props.text} />
            <Appbar.Action
                color="white"
                icon="cart-outline"
            />
        </Appbar.Header>
    );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;