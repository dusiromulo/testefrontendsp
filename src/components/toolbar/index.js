import React, { Component } from 'react';
import {Text} from 'react-native';
import { Toolbar as ToolbarUI } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/Ionicons';

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
    text: '',
};

class Toolbar extends Component {
    render() {
        return (
            <ToolbarUI
                style={styles.toolbar}
                leftElement={this.props.enableBack? <Icon name="chevron-back-outline" style={styles.icon}/>: null}
                centerElement={<Text style={styles.text}>{this.props.text}</Text>}
                rightElement={<Icon name="cart-outline" style={{...styles.icon, marginLeft: this.props.enableBack? 32: -20}}/>} 
                // There is a hidden space between leftElement and centerElement
                // when leftElement is showing, and to fix used these ugly values
            />
        );
    }
}

const styles = {
    toolbar: {
        centerElementContainer: {
            alignItems: 'center', 
            justifyContent: 'center',
        }
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    icon: {
        color: 'white',
        margin: 12, 
        fontSize: 25
    }
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;