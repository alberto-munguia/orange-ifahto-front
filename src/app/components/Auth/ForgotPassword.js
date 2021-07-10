import React, { useEffect } from 'react'
import {Link } from 'react-router-dom'
import { Col, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'

import { InputEffect } from '../helpers/FormMaterial'

const ForgotPassword = () => {
    useEffect(() => {
        InputEffect()
    }, [])

    yup.setLocale({
        mixed : { required: 'Este campo es requerido' },
        string: {
            email: 'Ingresa un correo electrónico válido',
        }
    })

    const schema = yup.object().shape({
        email: yup.string().required().email(),
    })

    const passwordRecovery = (values, { setSubmitting }) => {
        console.log(values)
    }

    return (
        <>
            <div
                className="card card-shadowed px-50 py-30 w-400px mx-auto"
                style={{ maxWidth: '100%', borderTop: '0' }}
            >
                <h5 className="text-uppercase">Recuperar Contraseña</h5>
                <br />

                <Formik
                    validationSchema={ schema }
                    onSubmit={ passwordRecovery }
                    initialValues={{ email: '' }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <Form className="form-type-material" noValidate onSubmit={ handleSubmit }>
                            {/* email */}
                            <Form.Group controlId="email">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={ values.email }
                                    onChange={ handleChange }
                                    isInvalid={ !!errors.email }
                                />
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                                    { errors.email }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={ Col } className="text-center">
                                    <Link
                                        to="/login"
                                        className="btn btn-info btn-outline btn-bold"
                                    >
                                        <i className="fas fa-arrow-left"></i>{' '}Regresar
                                    </Link>
                                </Form.Group>

                                <Form.Group as={ Col } className="text-center">
                                    <Button
                                        variant="danger"
                                        type="submit"
                                        className="btn-outline btn-bold"
                                        disabled={ isSubmitting }
                                    >
                                        <i className="fas fa-arrow-right"></i>{' '}
                                        Enviar
                                    </Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ForgotPassword
