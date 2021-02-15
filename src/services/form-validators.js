import validation from 'validate.js'

export default function validateCreditCard(fieldName, value) {
    var constraints = {
        numero: {
            presence: true,
            length: { is: 16 },
        },
        nome: {
            presence: true,
            length: {
                minimum: 4,
            }
        },
        validade: {
            presence: true,
            length: { is: 4 },
        },
        cvv: {
            presence: true,
            length: { is: 3 },
        },
    };

    var formValues = {};
    formValues[fieldName] = value;

    var formFields = {};
    formFields[fieldName] = constraints[fieldName];


    const result = validation(formValues, formFields);

    if (result) {
	    return result[fieldName][0];
    }
    return '';
}