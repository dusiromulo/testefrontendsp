import React, { useEffect } from 'react';
import { View } from 'react-native';

// Components imports
import Toolbar from '../../organisms/toolbar';
import CoursesCarousel from '../../templates/courses-carousel';


const CoursesSelectList = () => {
    useEffect(() => {
        // TODO CALL API TO GET COURSES INFO
    }, []);

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Toolbar text='Loja virtual'/>
            <CoursesCarousel coursesData={[
                {title: 'Titulo', text: 'texto'},
                {title: 'Titulo 2', text: 'texto2'},
                {title: 'Titulo 3', text: 'texto3 '},
            ]}/>
        </View>
    )
}

export default CoursesSelectList;