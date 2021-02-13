import React from 'react';
import { View } from 'react-native';
import { Card as CardUI } from 'react-native-paper';
import Text from '../../atoms/text';
import PropTypes from 'prop-types';
import Space from '../../atoms/space';

const propTypes = {
    /**
     * Card data (numero, nome, validade, cvv)
     */
    dados: PropTypes.object,
};

const defaultProps = {
    dados: {
        numero: '',
        nome: '',
        validade: '',
        cvv: '',
    }
};

const CreditCard = (props) => {
    const formatNumero = () => {
        let numero = '';
        for (let i = 0; i < props.dados.numero.length; i++) {
            if (i < 12) {
                if ((i + 1) % 4 === 0) {
                    numero += '* ';
                } else {
                    numero += '*';
                }
            } else {
                numero += props.dados.numero[i];
            }
        }
        return numero;
    };
    const formatValidade = () => {
        let validade = '';
        for (let i = 0; i < props.dados.validade.length; i++) {
            if (i === 1) {
                validade += props.dados.validade[i] + '/';
            } else {
                validade += props.dados.validade[i];
            }
        }
        return validade;
    };

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

                <Text text={formatNumero(props.dados.numero)} size={20} color='white' weight='bold' />

                <Space vertical={24}/>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text text="Nome" size={8} color='white' weight='300' />
                        <Text text={props.dados.nome} size={12} color='white' />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 24}}>
                            <Text text="Validade" size={8} color='white' weight='300' />
                            <Text text={formatValidade(props.dados.validade)} size={12} color='white' weight='bold' />
                        </View>
                        <View>
                            <Text text="CVV" size={8} color='white' weight='300' />
                            <Text text={props.dados.cvv} size={12} color='white' weight='bold' />
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