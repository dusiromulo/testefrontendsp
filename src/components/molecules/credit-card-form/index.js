import React, { useState } from 'react';
import { View } from 'react-native';

import validateCreditCard from '../../../services/form-validators';

import FlexLayout from '../../atoms/flex-layout';
import TextInputMask from '../../atoms/textinput-mask';
import TextInput from '../../atoms/textinput';
import PropTypes from 'prop-types';
import Space from '../../atoms/space';

const propTypes = {
    /**
     * Callback for form changes
     */
    onModelChange: PropTypes.func,
    /**
     * Callback for form changes
     */
    onValidChange: PropTypes.func,
};

const defaultProps = {
    onModelChange: (cartaoCreditoModel) => {},
    onValidChange: (error) => {},
};

const CreditCardForm = (props) =>  {
    const [dadosCartao, setDadosCartao] = useState({
        numero: '',
        nome: '',
        validade: '',
        cvv: '',
    });
    const [formValid, setFormValid] = useState({
        numero: false,
        nome: false,
        validade: false,
        cvv: false,
    });

    const validarCampos = (dados) => {
        const numeroError = validateCreditCard('numero', dados.numero);
        const nomeError = validateCreditCard('nome', dados.nome);
        const validadeError = validateCreditCard('validade', dados.validade);
        const cvvError = validateCreditCard('cvv', dados.cvv);
        props.onModelChange(dados);
        setDadosCartao(dados);
        setFormValid({
            numero: !!numeroError.length,
            nome: !!nomeError.length,
            validade: !!validadeError.length,
            cvv: !!cvvError.length,
        });
        props.onValidChange(
            !numeroError.length && !nomeError.length && !validadeError.length && !cvvError.length
        );
    };

    return (
        <FlexLayout>
            <TextInputMask 
                label='Número do cartão de crédito' 
                mask='[0000] [0000] [0000] [0000]'
                value={dadosCartao.numero}
                error={formValid.numero}
                onChange={(numero) => {
                    validarCampos({...dadosCartao, numero});
                }} />

            <Space vertical={12} />

            <TextInput
                label='Nome'
                value={dadosCartao.nome}
                error={formValid.nome}
                onChange={(nome) => {
                    validarCampos({...dadosCartao, nome});
                }} />

            <Space vertical={12} />

            <View style={{width: '100%'}}>
                <FlexLayout direction='row'>
                    <View style={{width: '55%'}}>
                        <TextInputMask 
                            label='Validade'
                            mask='[00]/[00]'
                            value={dadosCartao.validade}
                            error={formValid.validade}
                            onChange={(validade) => {
                                validarCampos({...dadosCartao, validade});
                            }} />
                    </View>
                    <View style={{width: '5%'}} />
                    <View style={{width: '40%'}}>
                        <TextInputMask 
                            label='CVV' 
                            mask='[000]'
                            value={dadosCartao.cvv}
                            error={formValid.cvv}
                            onChange={(cvv) => {
                                validarCampos({...dadosCartao, cvv});
                            }} />
                    </View>
                </FlexLayout>
            </View>
        </FlexLayout>
    );
}

CreditCardForm.propTypes = propTypes;
CreditCardForm.defaultProps = defaultProps;

export default CreditCardForm;