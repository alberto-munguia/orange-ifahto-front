import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'
import axios from '../../../plugins/axios'

import { InputEffect } from '../../helpers/FormMaterial'

const SignIn = () => {
    useEffect(() => {
        // InputEffect()
    }, [])

    let history = useHistory()

    const schema = yup.object().shape({
        nickname: yup.string().required(),
        password: yup.string().required(),
    })

    const login = ({ nickname, password }, { setSubmitting }) => {
        history.push('/dashboard')
        // const formData = new FormData()

        // formData.append('username', nickname)
        // formData.append('password', password)

        // axios.post('/usuarios/login', formData, {
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(({ data }) => {
        //     console.log({data})
        //     history.push('/dashboard')
        // }).finally(() => setSubmitting(false))
    }

    return (
        <>
            <div
                className="card card-shadowed px-50 py-30 w-400px mx-auto"
                style={{ maxWidth: '100%', borderTop: '0' }}
            >
                <h5 className="text-uppercase mb-3">Iniciar Sesión</h5>
                <br className="clearfix" />

                <Formik
                    validationSchema={ schema }
                    onSubmit={ login }
                    initialValues={{ nickname: '', password: '' }}
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
                        <Form noValidate onSubmit={ handleSubmit }>
                            {/* nickname */}
                            <Form.Group controlId="nickname" className="form-floating mb-3">
                                <Form.Control
                                    type="text"
                                    name="nickname"
                                    value={ values.nickname }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                   isValid={ touched.nickname && !errors.nickname }
                                    isInvalid={ touched.nickname && !!errors.nickname }
                                    placeholder="Usuario"
                                />
                                <Form.Label>Usuario <span className="text-danger">*</span></Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.nickname }
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* password */}
                            <Form.Group controlId="password" className="form-floating mb-3">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={ values.password }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.password && !errors.password }
                                    isInvalid={ touched.password && !!errors.password }
                                    placeholder="Contraseña"
                                />
                                <Form.Label>
                                    Contraseña <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.password }
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="flexbox flex-column flex-md-row">
                                <span className="text-muted fs-13 mt-2 mt-md-0">
                                    ¿Olvidaste tu contraseña? Solicita tu acceso{' '}
                                    <Link to="/password-recovery">aquí</Link>
                                </span>
                            </Form.Group>

                            <Form.Group className="mt-3 d-grid">
                                <Button
                                    variant="danger"
                                    type="submit"
                                    className="btn-outline btn-bold"
                                    disabled={ isSubmitting }
                                >
                                    <i className="fas fa-sign-in-alt"></i>{' '}
                                    Ingresar
                                </Button>
                            </Form.Group>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default SignIn
