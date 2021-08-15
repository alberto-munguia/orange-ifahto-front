import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Col, Button, Form, FloatingLabel, Modal, Row } from 'react-bootstrap'
import yup from '../../../plugins/yup'

const ModalFormAdd = ({ cliente }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow  = () => setShow(true)

    const schema = yup.object().shape({
        marca: yup.string().required(),
    })

    const handleCreateMarca = () => {}

    return (
        <>
            <Button variant="purple" className="btn-outline btn-bold" size="sm" onClick={ handleShow }>
                Nueva Marca
            </Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva Marca</Modal.Title>
                </Modal.Header>

                <Formik
                    validationSchema={ schema }
                    initialValues={{ marca: '' }}
                    onSubmit={ handleCreateMarca }
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
                                        <FloatingLabel controlId="marca">
                                            <Form.Control
                                                readOnly
                                                placeholder="Cliente"
                                                value="Cliente"
                                            />
                                            <Form.Label>Cliente</Form.Label>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="mb-3">
                                        <FloatingLabel controlId="marca">
                                            <Form.Control
                                                type="text"
                                                placeholder="Nombre de la Marca"
                                                value={ values.marca }
                                                onBlur={ handleBlur }
                                                onChange={ handleChange }
                                                isValid={ touched.marca && !errors.marca }
                                                isInvalid={ touched.marca && !!errors.marca }
                                            />
                                            <Form.Label>
                                                Nombre de la Marca{' '}
                                                <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control.Feedback type="invalid">
                                                { errors.marca }
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
    // cliente: PropTypes.object.isRequired,
}

export default ModalFormAdd
