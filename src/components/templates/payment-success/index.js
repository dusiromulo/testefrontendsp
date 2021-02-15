import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';

import Button from '../../atoms/button';
import Text from '../../atoms/text';
import Space from '../../atoms/space';

const propTypes = {
    /**
     * Content text of button
     */
    text: PropTypes.string,
    /**
     * Boolean to disable button (default false)
     */
    disable: PropTypes.bool,
};

const defaultProps = {
    onPress: () => { },
};

const PaymentSuccess = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <View style={{width: '50%', alignItems: 'center'}}>
                    <Text text='Sucesso!' size={24} centerText fullWidth/>
                    <Text text='Compra concluída' size={24} centerText fullWidth/>
                    <Space vertical={60} />
                    <Icon name='check' size={93} color='#7BBDF5' />
                    <Space vertical={41} />
                    <Text
                        text='Você receberá um email com os detalhes da sua compra.'
                        size={14}
                        centerText fullWidth />
                </View>
            </View>
            <View style={{
                paddingBottom: 40,
                paddingHorizontal: 24,
                justifyContent: 'flex-end',
            }}>
                <Button
                    text="Ok"
                    onPress={() => navigation.popToTop() }
                    style={{ width: '100%'}} />
            </View>
        </View> 
    );
}

PaymentSuccess.propTypes = propTypes;
PaymentSuccess.defaultProps = defaultProps;

export default PaymentSuccess;