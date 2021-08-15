import React from 'react'
import { Col, Button, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'

const FormBrief = () => {
    const schema = yup.object().shape({
        comentario: yup.string().required(),
    })

    return (
        <Formik validationSchema={ schema } initialValues={{ comentario: '' }}>
            {({
                values,
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
            }) => (
                <Form noValidate>
                    <Row xs={ 1 } md={ 1 }>
                        <Col className="mb-3">
                            <Form.Group controlId="comentario" className="form-floating">
                                <Form.Control
                                    as="textarea"
                                    value={ values.comentario }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.comentario && !errors.comentario }
                                    isInvalid={ touched.comentario && !!errors.comentario }
                                    style={{ height: '150px' }}
                                    placeholder="Información general del evento"
                                />
                                <Form.Label>
                                    Información general del evento{' '}
                                    <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.comentario }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group>
                                <div className="text-end">
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="btn-outline btn-bold me-2"
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
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default FormBrief
