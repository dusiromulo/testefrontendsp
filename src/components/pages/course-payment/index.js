import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Components imports
import Toolbar from '../../organisms/toolbar';
import CreditCardPayment from '../../templates/credit-card-payment';;

const propTypes = {
    /**
     * Course selected to buy
     */
    course: PropTypes.object,
};

const defaultProps = {
    course: {
        name: '',
        price: 0,
    },
};

const CoursePayment = (props) => {
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Toolbar enableBack text='Pagamento com cartão'/>
            <CreditCardPayment course={ props.course } />
        </View>
    )
}

CoursePayment.propTypes = propTypes;
CoursePayment.defaultProps = defaultProps;

export default CoursePayment;