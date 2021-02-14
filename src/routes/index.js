import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CoursesSelectList from '../components/pages/courses-select-list';
import CoursePayment from '../components/pages/course-payment';
import CoursePaymentSuccess from '../components/pages/course-payment-success';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="CoursePayment" headerMode='none'>
            <Stack.Screen name="CoursesSelectList" component={CoursesSelectList} />
            <Stack.Screen name="CoursePayment" component={CoursePayment} />
            <Stack.Screen name="CoursesPaymentSuccess" component={CoursePaymentSuccess} />
        </Stack.Navigator>
    )
}

export default Routes;