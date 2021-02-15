import React from 'react';
import { View } from 'react-native';

// Components imports
import Toolbar from '../../organisms/toolbar';
import CreditCardPayment from '../../templates/credit-card-payment';;

const CoursePayment = ({ route }) => {
    const { course, navigation } = route.params;
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Toolbar enableBack text='Pagamento com cartão'/>
            <CreditCardPayment course={ course } />
        </View>
    )
}

export default CoursePayment;