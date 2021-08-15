import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Button, Form, Row } from 'react-bootstrap'
import yup from '../../../plugins/yup'

const FormTareas = ({ setShowTask }) => {
    const schema = yup.object().shape({
        titulo     : yup.string().required(),
        descripcion: yup.string().required(),
    })

    const addTask = ({ titulo, descripcion }, { setSubmitting }) => {
        console.log({ titulo })
        console.log({ descripcion })
    }

    return (
        <Formik
            validationSchema={ schema }
            onSubmit={ addTask }
            initialValues={{ titulo: '', descripcion: '' }}
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
                    <Row xs={ 1 } md={ 1 }>
                        <Form.Group controlId="titulo" className="mb-3">
                            <div className="form-floating">
                                <Form.Control
                                    type="text"
                                    value={ values.titulo }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.titulo && !errors.titulo }
                                    isInvalid={ touched.titulo && !!errors.titulo }
                                    placeholder="Nombre del Cambio"
                                />
                                <Form.Label>
                                    Nombre del Cambio <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.titulo }
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="descripcion" className="mb-3">
                            <div className="form-floating">
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    value={ values.descripcion }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.descripcion && !errors.descripcion }
                                    isInvalid={ touched.descripcion && !!errors.descripcion }
                                    placeholder="Descripción"
                                />
                                <Form.Label>
                                    Descripción <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.descripcion }
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <div className="text-end">
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="btn-outline btn-bold me-2"
                                    onClick={ () => setShowTask(false) }
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="success"
                                    size="sm"
                                    className="btn-outline btn-bold"
                                    type="submit"
                                    disabled={ isSubmitting }
                                >
                                    Enviar
                                </Button>
                            </div>
                        </Form.Group>
                    </Row>

                    <hr className="bg-purple" style={{ opacity: 'inherit' }} />
                </Form>
            )}
        </Formik>
    )
}

FormTareas.propTypes = {
    setShowTask: PropTypes.func.isRequired
}

export default FormTareas
