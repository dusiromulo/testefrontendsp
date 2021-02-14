import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Text from '../../atoms/text';
import FlexLayout from '../../atoms/flex-layout';
import Space from '../../atoms/space';
import Button from '../../atoms/button';

import { formatPrice } from '../../../utils';


const propTypes = {
    /**
     * Course data
     */
    course: PropTypes.object,
};

const defaultProps = {
    course: {
        name: 'Nome curso',
        description: 'Descrição curso',
        duration: 'Duração curso',
        price: 0,
    }
};

const CourseCard = (props) => {
    const navigation = useNavigation();
    const { course } = props;
    return (
        <FlexLayout padding={{top: 8, left: 8, right: 8}}>
            <Text text={course.name} size={24} />
            <Space vertical={24} />
            <Text text={course.description} size={14} />
            <Space vertical={24} />

            <FlexLayout direction='row'>
                <Text text='Duração: ' weight='bold' size={14} />
                <Text text={course.duration} size={14} />
            </FlexLayout>

            <Space vertical={24} />

            <FlexLayout alignItems='center' fullWidth>
                <View style={{width: '70%'}}>
                    <FlexLayout alignItems='center'>
                        <FlexLayout>
                            <Text text='Investimento:' weight='300' size={10} />
                            <FlexLayout direction='row'>
                                <Text text='R$ ' size={20} color='#7BBDF5' weight='bold' />
                                <Text text={formatPrice(course.price)} size={30} color='#7BBDF5' weight='bold' />
                            </FlexLayout>
                        </FlexLayout>
                    </FlexLayout>
                    <Space vertical={24} />
                    <Button
                        text="Comprar"
                        onPress={() => 
                            navigation.navigate('CoursePayment', {
                                course: {
                                    name: course.name,
                                    price: course.price
                                }
                            })
                        } 
                    />
                </View>
            </FlexLayout>
        </FlexLayout>
    );
}

CourseCard.propTypes = propTypes;
CourseCard.defaultProps = defaultProps;

export default CourseCard;