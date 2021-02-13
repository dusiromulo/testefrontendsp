import React from 'react';
import { View } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

import FlexLayout from '../../atoms/flex-layout';
import TextInputMask from '../../atoms/textinput-mask';
import TextInput from '../../atoms/textinput';
import PropTypes from 'prop-types';
import Space from '../../atoms/space';

const propTypes = {
    /**
     * Callback for form changes
     */
    onChange: PropTypes.func,
};

const defaultProps = {
    onChange: (cartaoCreditoModel, error) => {},
};

class CreditCardForm extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { numero: '', nome: '', validade: '', cvv: '' };
        this.validarCampos = this.validarCampos.bind(this);
    }

    async validarCampos() {
        const valid = await new Promise((res) => {
            res(this.validate({
                numero: { numbers: true, minlength: 16, maxlength: 16, required: true },
                nome: { minlength: 1, required: true },
                validade: { date: 'MM/YY', minlength: 4, maxlength: 4, required: true },
                cvv: { minlength: 3, maxlength: 3, required: true },
            }));
        });
        this.props.onChange({
                numero: this.state.numero,
                nome: this.state.nome,
                validade: this.state.validade,
                cvv: this.state.cvv,
            },
            valid
        );
    }

    render() {
        return (
            <FlexLayout>
                <TextInputMask 
                    label='Número do cartão de crédito' 
                    mask='[0000] [0000] [0000] [0000]'
                    value={this.state.numero}
                    error={this.isFieldInError('numero')}
                    onChange={(numero) => { this.setState({ numero }); this.validarCampos(); }} />
                <Space vertical={12} />
                <TextInput
                    label='Nome'
                    value={this.state.nome}
                    error={this.isFieldInError('nome')}
                    onChange={(nome) => {
                        this.setState({ nome });
                        this.validarCampos();
                }} />
                <Space vertical={12} />
    
                <View style={{width: '100%'}}>
                    <FlexLayout direction='row'>
                        <View style={{width: '55%'}}>
                            <TextInputMask 
                                label='Validade'
                                mask='[00]/[00]'
                                value={this.state.validade}
                                error={this.isFieldInError('validade')}
                                onChange={(validade) => {
                                    this.setState({ validade }); 
                                    this.validarCampos();
                                }} />
                        </View>
                        <View style={{width: '5%'}} />
                        <View style={{width: '40%'}}>
                            <TextInputMask 
                                label='CVV' 
                                mask='[000]'
                                value={this.state.cvv}
                                error={this.isFieldInError('cvv')}
                                onChange={(cvv) => {
                                    this.setState({ cvv });
                                    this.validarCampos();
                                }} />
                        </View>
                    </FlexLayout>
                </View>
            </FlexLayout>
        );
    }
}

CreditCardForm.propTypes = propTypes;
CreditCardForm.defaultProps = defaultProps;

export default CreditCardForm;