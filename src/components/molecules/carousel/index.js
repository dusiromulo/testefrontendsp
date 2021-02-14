import React, { useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import StyleContants from '../../../styles/constants';
import FlexLayout from '../../atoms/flex-layout';

const propTypes = {
    /**
     * Data list to be rendered
     */
    data: PropTypes.array,
    /**
     * Function to render an element of data
     */
    renderItem: PropTypes.func,
};

const defaultProps = {
    data: [],
    renderItem: (el) => { },
};

const CarouselPagination = (props) => {
    const windowWidth = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View>
            <Carousel
                layout={'default'}
                data={props.data}
                sliderWidth={windowWidth}
                itemWidth={windowWidth * 0.7}
                inactiveSlideOpacity={1}
                renderItem={props.renderItem} 
                onSnapToItem={setActiveIndex} />
            <Pagination 
                dotsLength={props.data.length}
                activeDotIndex={activeIndex}
                containerStyle={styles.paginationContainer}
                dotColor={StyleContants.primaryColor}
                inactiveDotColor='transparent'
                dotStyle={styles.paginationActiveDot}
                inactiveDotScale={1}
                inactiveDotOpacity={1}
                inactiveDotStyle={styles.paginationInactiveDot} />
        </View>
    );
}

const styles = StyleSheet.create({
    parentCarouselPagination: {
        flexDirection: 'column', 
        justifyContent: 'center',
    },
    carouselContainer: {
        flexGrow: 1,
    },
    carouselSlide: {
        flexGrow: 1,
    },
    paginationContainer: {
        paddingVertical: 0,
        marginBottom: 24,
    },
    paginationActiveDot: {
        width: StyleContants.carouselDotSize,
        height: StyleContants.carouselDotSize,
        borderRadius: StyleContants.carouselDotSize/2,
        marginHorizontal: StyleContants.smallMargin/2
    },
    paginationInactiveDot: {
        width: StyleContants.carouselDotSize,
        height: StyleContants.carouselDotSize,
        borderRadius: StyleContants.carouselDotSize/2,
        borderWidth: StyleContants.carouselDotBorderWidth,
        marginHorizontal: StyleContants.smallMargin/2,
        borderColor: StyleContants.primaryColor
    }
});

CarouselPagination.propTypes = propTypes;
CarouselPagination.defaultProps = defaultProps;

export default CarouselPagination;