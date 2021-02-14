import React from 'react';
import { View } from 'react-native';

// Components imports
import Toolbar from '../../organisms/toolbar';
import PaymentSuccess from '../../templates/payment-success';


const CoursePaymentSuccess = () => {
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Toolbar enableBack text='Pagamento com cartão'/>
            <PaymentSuccess />
        </View>
    )
}

export default CoursePaymentSuccess;