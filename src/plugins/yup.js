import * as yup from 'yup'

yup.setLocale({
    mixed: {
        required: 'Este campo es requerido',
    },
    string: { max: 'Este campo no debe contener más de ${max} caracteres' },
})

export default yup
