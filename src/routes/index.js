import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CoursesSelectList from '../components/pages/courses-select-list';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="CoursesSelectList" headerMode='none'>
            <Stack.Screen name="CoursesSelectList" component={CoursesSelectList} />
            {/* <Stack.Screen name="CoursePayment" component={DetailsScreen} />
            <Stack.Screen name="CoursePaymentSuccess" component={DetailsScreen} /> */}
        </Stack.Navigator>
    )
}

export default Routes;