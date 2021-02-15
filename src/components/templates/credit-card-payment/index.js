import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import CreditCard from '../../molecules/credit-card';
import CreditCardForm from '../../molecules/credit-card-form';
import Button from '../../atoms/button';
import Divider from '../../atoms/divider';
import Space from '../../atoms/space';
import Text from '../../atoms/text';
import FlexLayout from '../../atoms/flex-layout';
import { formatPrice } from '../../../utils';

const propTypes = {
    /**
     * Course selected to buy
     */
    course: PropTypes.object,
};

const defaultProps = {
    course: {
        name: '',
        price: 0,
    },
};

const CreditCardPayment = (props) => {
    const navigation = useNavigation();
    const [cartaoValido, setCartaoValido] = useState(false);
    const [dadosCartao, setDadosCartao] = useState({
        numero: '',
        nome: '',
        validade: '',
        cvv: '',
    });
    const { price } = props.course;
    const discount = Math.floor(price * 10) / 100;
    const finalPrice = ((price * 100) - Math.floor(price * 10)) / 100;

    return (
        <ScrollView style={{ paddingHorizontal: 24 }}>
            <Space vertical={24} />
            <FlexLayout alignItems='center'>
                <View style={{width: '90%'}}>
                    <CreditCard dados={dadosCartao} />
                </View>
            </FlexLayout>
            <Space vertical={16} />
            <CreditCardForm             
                onModelChange={(dados) => setDadosCartao(dados)}
                onValidChange={(valido) => setCartaoValido(valido)} />
            <Space vertical={24} />
            <Divider />
            <Space vertical={16}/>
            <FlexLayout direction='row' justifyContent='space-between'>
                <Text text={props.course.name} size={14} />
                <Text text={`R$ ${formatPrice(price)}`} size={14} />
            </FlexLayout>
            <FlexLayout direction='row' justifyContent='space-between'>
                <Text text='Desconto 10%' size={14} />
                <Text text={`- R$ ${formatPrice(discount)}`} color='#FF8686' size={14} />
            </FlexLayout>
            <Space vertical={16}/>
            <Divider />
            <Space vertical={24} />
            <FlexLayout direction='row' justifyContent='space-between'>
                <Text text='Total' size={20} weight='bold' />
                <Text text={`R$ ${formatPrice(finalPrice)}`}
                    size={20} weight='bold' />
            </FlexLayout>
            <Space vertical={24} />
            <View style={{
                justifyContent: 'flex-end',
                marginBottom: 40,
            }}>
                <Button
                    text="Pagar"
                    onPress={() => navigation.navigate('CoursesPaymentSuccess')}
                    style={{ width: '100%'}}
                    disable={!cartaoValido} />
            </View>
        </ScrollView>
    );
}

CreditCardPayment.propTypes = propTypes;
CreditCardPayment.defaultProps = defaultProps;

export default CreditCardPayment;