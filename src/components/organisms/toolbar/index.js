import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();
    return (
        <Appbar.Header>
            {props.enableBack? <Appbar.BackAction color="white" onPress={() => navigation.goBack()} /> : null}
            <Appbar.Content color="white" title={props.text} />
            <Appbar.Action color="white" icon="cart-outline" />
        </Appbar.Header>
    );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;