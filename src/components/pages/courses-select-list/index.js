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
            <CoursesCarousel 
                coursesData={[
                    {name: 'Titulo', description: 'texto', duration: '45hs', price: 599.9},
                    {name: 'Titulo 2', description: 'texto2', duration: '45hs', price: 599.9},
                    {name: 'Titulo 3', description: 'texto3 ', duration: '45hs', price: 599.9},
                ]}
            />
        </View>
    )
}

export default CoursesSelectList;