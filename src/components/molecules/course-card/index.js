import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from '../../atoms/text';
import FlexLayout from '../../atoms/flex-layout';
import Space from '../../atoms/space';
import Button from '../../atoms/button';

import { formatPrice } from '../../../utils';


const propTypes = {
    /**
     * Title of course
     */
    name: PropTypes.string,
    /**
     * Description of course
     */
    description: PropTypes.string,
    /**
     * Duration of course
     */
    duration: PropTypes.string,
    /**
     * Price of course
     */
    price: PropTypes.number,
};

const defaultProps = {
    name: 'Nome curso',
    description: 'Descrição curso',
    duration: 'Duração curso',
    price: 0,
};

const CourseCard = (props) => {
    return (
        <FlexLayout padding={{top: 8, left: 8, right: 8}}>
            <Text text={props.name} size={24} />
            <Space vertical={24}/>
            <Text text={props.description} size={14} />
            <Space vertical={24}/>

            <FlexLayout direction='row'>
                <Text text='Duração: ' weight='bold' size={14} />
                <Text text={props.duration} size={14} />
            </FlexLayout>

            <Space vertical={24}/>

            <FlexLayout alignItems='center' fullWidth>
                <View style={{width: '70%'}}>
                    <FlexLayout alignItems='center'>
                        <FlexLayout>
                            <Text text='Investimento:' weight='300' size={10} />
                            <FlexLayout direction='row'>
                                <Text text='R$ ' size={20} color='#7BBDF5' weight='bold' />
                                <Text text={formatPrice(props.price)} size={30} color='#7BBDF5' weight='bold' />
                            </FlexLayout>
                        </FlexLayout>
                    </FlexLayout>
                    <Space vertical={24}/>
                    <Button text="Comprar" onPress={() => { console.log('click on buy!!!', props) }} />
                </View>
            </FlexLayout>
        </FlexLayout>
    );
}

CourseCard.propTypes = propTypes;
CourseCard.defaultProps = defaultProps;

export default CourseCard;