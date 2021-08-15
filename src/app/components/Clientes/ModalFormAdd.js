import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Col, Button, Form, FloatingLabel, Modal, Row } from 'react-bootstrap'
import yup from '../../../plugins/yup'

const ModalFormAdd = () => {
    const [show, setShow] = useState(false)

    const schema = yup.object().shape({
        cliente: yup.string().required(),
    })

    const handleClose = () => setShow(false)
    const handleShow  = () => setShow(true)

    const handleCreateClient = ({ cliente }, { setSubmitting }) => {}

    return (
        <>
            <Button variant="info" className="btn-outline btn-bold" size="sm" onClick={ handleShow }>
                Nuevo Cliente
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Cliente</Modal.Title>
                </Modal.Header>

                <Formik
                    validationSchema={ schema }
                    initialValues={{ cliente: '' }}
                    onSubmit={ handleCreateClient }
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
                            <Modal.Body>
                                <Row>
                                    <Col className="mb-3">
                                        <FloatingLabel controlId="cliente">
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombre del Cliente"
                                                value={ values.cliente }
                                                onBlur={ handleBlur }
                                                onChange={ handleChange }
                                                isValid={ touched.cliente && !errors.cliente }
                                                isInvalid={ touched.cliente && !!errors.cliente }
                                            />
                                            <Form.Label>
                                                Nombre del Cliente{' '}
                                                <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control.Feedback type="invalid">
                                                { errors.cliente }
                                            </Form.Control.Feedback>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="danger" className="btn-outline btn-bold">
                                    Cancelar
                                </Button>

                                <Button
                                    variant="success"
                                    className="btn-outline btn-bold"
                                    disabled={ isSubmitting }
                                    type="submit"
                                >
                                    Guardar
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

ModalFormAdd.propTypes = {
}

export default ModalFormAdd
