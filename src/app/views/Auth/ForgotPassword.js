import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Form, Button, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'
import axios from '../../../plugins/axios'

// import { InputEffect } from '../../helpers/FormMaterial'

const ForgotPassword = () => {
    useEffect(() => {
        // InputEffect()
    }, [])

    yup.setLocale({
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
                <h5 className="text-uppercase mb-3">Recuperar Contraseña</h5>
                <br className="clearfix" />

                <Formik
                    validationSchema={ schema }
                    onSubmit={ passwordRecovery }
                    initialValues={{ email: '' }}
                >
                    {({
                        values,
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                    }) => (
                        <Form className="" noValidate onSubmit={ handleSubmit }>
                            {/* email */}
                            <Form.Group controlId="email" className="form-floating mb-3">
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={ values.email }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.email && !errors.email }
                                    isInvalid={ touched.email && !!errors.email }
                                    placeholder="Correo Electrónico"
                                />
                                <Form.Label>
                                    Correo Electrónico <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.email }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-grid gap-2 d-md-flex justify-content-evenly">
                                <Link
                                    to="/login"
                                    className="btn btn-info btn-outline btn-bold btn-w-md"
                                >
                                    <i className="fas fa-arrow-left"></i> Regresar
                                </Link>
                                
                                <Button
                                    variant="danger"
                                    type="submit"
                                    className="btn-outline btn-bold btn-w-md"
                                    disabled={ isSubmitting }
                                >
                                    <i className="fas fa-arrow-right"></i> Enviar
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default ForgotPassword
