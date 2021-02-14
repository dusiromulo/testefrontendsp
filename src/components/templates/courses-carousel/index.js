import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../atoms/card';
import Text from '../../atoms/text';
import FlexLayout from '../../atoms/flex-layout';
import Carousel from '../../molecules/carousel';
import CourseCard from '../../molecules/course-card';

const propTypes = {
    /**
     * Courses list to be rendered on carousel
     */
    coursesData: PropTypes.array,
};

const defaultProps = {
    coursesData: [],
};

const CoursesCarousel = (props) => {
    const _renderItem = ({item, index}) => {
        return (
            <Card margin={{top: 24, bottom: 24, left: 12, right: 12}}>
                <CourseCard course={item} />
            </Card>
        )
    };
    return (
        <ScrollView>
            <FlexLayout margin={{top: 24, left: 24, right: 24}}>
                <Text text='Conheça nossos cursos:' color='#FF8686' size={32}/>
            </FlexLayout>
            <Carousel 
                data={props.coursesData}
                renderItem={_renderItem}
            />
        </ScrollView>
    );
}

CoursesCarousel.propTypes = propTypes;
CoursesCarousel.defaultProps = defaultProps;

export default CoursesCarousel;