import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Button, Form, Row } from 'react-bootstrap'
import yup from '../../../plugins/yup'

const FormComentarios = ({ setShowComment }) => {
    const schema = yup.object().shape({
        comentario: yup.string().required(),
    })

    const addComment = ({ comentario }, { setSubmitting }) => {
        console.log({ comentario })
    }

    return (
        <Formik
            validationSchema={ schema }
            onSubmit={ addComment }
            initialValues={{ comentario: '' }}
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
                        <Form.Group controlId="comentario" className="mb-3">
                            <div className="form-floating">
                                <Form.Control
                                    as="textarea"
                                    style={{ height: '100px' }}
                                    value={ values.comentario }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.comentario && !errors.comentario }
                                    isInvalid={ touched.comentario && !!errors.comentario }
                                    placeholder="Comentario"
                                />
                                <Form.Label>
                                    Comentario <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.comentario }
                                </Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <div className="text-end">
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="btn-outline btn-bold me-2"
                                    onClick={ () => setShowComment(false) }
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="success"
                                    size="sm"
                                    type="submit"
                                    className="btn-outline btn-bold"
                                    disabled={ isSubmitting }
                                >
                                    Enviar
                                </Button>
                            </div>
                        </Form.Group>
                    </Row>

                    <hr className="bg-dark" style={{ opacity: 'inherit' }} />
                </Form>
            )}
        </Formik>
    )
}

FormComentarios.propTypes = {
    setShowComment: PropTypes.func.isRequired,
}

export default FormComentarios