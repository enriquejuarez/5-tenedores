import React from 'react';
import t from 'tcomb-form-native'
import formValidation from '../utils/Validations'
import InputTemplate from './templates/Input'

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password
})

export const RegisterOptions = {
    fields: {
        name: {
            template: InputTemplate,
            config:{
                placeholder: 'Escribe nombre apellidos',
                iconType: 'material-community',
                iconName: 'account-outline'
            }
        },
        email: {
            template: InputTemplate,
            config:{
                placeholder: 'Escribe email',
                iconType: 'material-community',
                iconName: 'at'
            }
        },
        password: {
            template: InputTemplate,
            config:{
                placeholder: 'Escribe tu contraseña',
                password: true,
                secureTextEntry: true,
                iconType: 'material-community',
                iconName: 'lock-outline'
            }
        },
        passwordConfirmation: {
            template: InputTemplate,
            config:{
                placeholder: 'Repite tu contraseña',
                password: true,
                secureTextEntry: true,
                iconType: 'material-community',
                iconName: 'lock-reset'
            }
        }
    }
}