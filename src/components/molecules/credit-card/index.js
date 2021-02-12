import React from 'react';
import { View } from 'react-native';
import { Card as CardUI } from 'react-native-paper';
import Text from '../../atoms/text';
import PropTypes from 'prop-types';
import Space from '../../atoms/space';

const propTypes = {
    /**
     * Card number
     */
    cardNumber: PropTypes.string,
    // /**
    //  * Content text
    //  */
    // text: PropTypes.string,
    // /**
    //  * Content text
    //  */
    // text: PropTypes.string,
};

const defaultProps = {
};

const CreditCard = (props) => {
    return (
        <CardUI 
            elevation={4}
            style={{
                padding: 20,
                borderRadius: 8,
                backgroundColor: '#7BBDF5',
            }}
        >
            <CardUI.Content style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{width: 31, height: 22, backgroundColor: '#FFDC7E', borderRadius: 4}}></View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#FF8686'}}></View>
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#FFDC7E', marginLeft: -10}}></View>
                    </View>
                </View>
                
                <Space vertical={24} horizontal={1}/>

                <Text text="**** **** **** 1234" size={20} color='white' weight='bold' />

                <Space vertical={24}/>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text text="Nome" size={8} color='white' weight='300' />
                        <Text text="Maria teresa" size={12} color='white' />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 24}}>
                            <Text text="Validade" size={8} color='white' weight='300' />
                            <Text text="05/22" size={12} color='white' weight='bold' />
                        </View>
                        <View>
                            <Text text="CVC" size={8} color='white' weight='300' />
                            <Text text="123" size={12} color='white' weight='bold' />
                        </View>
                    </View>
                </View>
            </CardUI.Content>
        </CardUI>
    );
}

CreditCard.propTypes = propTypes;
CreditCard.defaultProps = defaultProps;

export default CreditCard;