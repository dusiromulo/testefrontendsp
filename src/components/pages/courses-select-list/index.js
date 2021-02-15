import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

// Import action to dispatch events
import { action } from '../../../sagas/store';

// Components imports
import Loading from '../../atoms/loading';
import Toolbar from '../../organisms/toolbar';
import CoursesCarousel from '../../templates/courses-carousel';

const CoursesSelectList = ({ coursesList }) => {
    useEffect(() => {
        if (coursesList.length === 0) {
            action('GET_COURSES');
        }
    }, []);
    if (coursesList.length === 0) {
        return (
            <View style={{backgroundColor: 'white', flex: 1}}>
                <Toolbar text='Loja virtual'/>
                <Loading />
            </View>
        );
    }
    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Toolbar text='Loja virtual'/>
            <CoursesCarousel coursesData={coursesList} />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        coursesList: state,
    }
}
export default connect(mapStateToProps, {})(CoursesSelectList);
