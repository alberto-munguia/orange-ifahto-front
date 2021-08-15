import React from 'react'
import TimePicker from 'react-bootstrap-time-picker'
import { Col, Form, FloatingLabel, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'

const FormCliente = () => {
    const schema = yup.object().shape({
        idCliente      : yup.string().required(),
        idMarca        : yup.string().required(),
        idSocio        : yup.string().required(),
        idCes          : yup.string().required(),
        fechaSolicitud : yup.string().required(),
        horaSolicitud  : yup.string().required(),
        fechaRevision  : yup.string().required(),
        fechaEntrega   : yup.string().required(),
        horaEntrega    : yup.string().required(),
        fechaDesarrollo: yup.string().required(),
    })

    const initialValues = {
        idCliente      : 0,
        idMarca        : 0,
        idSocio        : 0,
        idCes          : 0,
        idProductor    : 0,
        fechaSolicitud : '',
        horaSolicitud  : 36000,
        fechaRevision  : '',
        fechaEntrega   : '',
        horaEntrega    : 36000,
        fechaDesarrollo: '',
    }

    return (
        <Formik validationSchema={ schema } initialValues={ initialValues }>
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
                    <Row xs={ 1 } md={ 3 } lg={ 4 }>
                        <Col className="mb-3">
                            <FloatingLabel controlId="idCliente">
                                <Form.Control
                                    type="text"
                                    placeholder="Cliente"
                                    value={ values.idCliente }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idCliente && !errors.idCliente }
                                    isInvalid={ touched.idCliente && !!errors.idCliente }
                                />
                                <Form.Label>
                                    Cliente <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idCliente }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="idMarca">
                                <Form.Control
                                    type="text"
                                    placeholder="Marca"
                                    value={ values.idMarca }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idMarca && !errors.idMarca }
                                    isInvalid={ touched.idMarca && !!errors.idMarca }
                                />
                                <Form.Label>
                                    Marca <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idMarca }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="idSocio">
                                <Form.Control
                                    type="text"
                                    placeholder="Socio"
                                    value={ values.idSocio }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idSocio && !errors.idSocio }
                                    isInvalid={ touched.idSocio && !!errors.idSocio }
                                />
                                <Form.Label>
                                    Socio <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idSocio }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="idCes">
                                <Form.Control
                                    type="text"
                                    placeholder="CES"
                                    value={ values.idCes }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idCes && !errors.idCes }
                                    isInvalid={ touched.idCes && !!errors.idCes }
                                />
                                <Form.Label>
                                    CES <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idCes }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="idProductor">
                                <Form.Control
                                    type="text"
                                    placeholder="Productor"
                                    value={ values.idProductor }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idProductor && !errors.idProductor }
                                />
                                <Form.Label>Productor</Form.Label>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="fechaSolicitud">
                                <Form.Control
                                    type="date"
                                    placeholder="Fecha de Solicitud"
                                    value={ values.fechaSolicitud }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.fechaSolicitud && !errors.fechaSolicitud }
                                    isInvalid={ touched.fechaSolicitud && !!errors.fechaSolicitud }
                                />
                                <Form.Label>
                                    Fecha de Solicitud <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.fechaSolicitud }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="horaSolicitud">
                                <TimePicker
                                    start="08:00"
                                    end="24:00"
                                    step={ 15 }
                                    value={ values.horaSolicitud }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.horaSolicitud && !errors.horaSolicitud }
                                    isInvalid={ touched.horaSolicitud && !!errors.horaSolicitud }
                                    placeholder="Hora de Solicitud"
                                    className="form-select"
                                />
                                <Form.Label>
                                    Hora de Solicitud <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.horaSolicitud }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="fechaRevision">
                                <Form.Control
                                    type="date"
                                    placeholder="Fecha de Revisión"
                                    value={ values.fechaRevision }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.fechaRevision && !errors.fechaRevision }
                                    isInvalid={ touched.fechaRevision && !!errors.fechaRevision }
                                />
                                <Form.Label>
                                    Fecha de Revisión <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.fechaRevision }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="fechaEntrega">
                                <Form.Control
                                    type="date"
                                    placeholder="Fecha de Entrega"
                                    value={ values.fechaEntrega }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.fechaEntrega && !errors.fechaEntrega }
                                    isInvalid={ touched.fechaEntrega && !!errors.fechaEntrega }
                                />
                                <Form.Label>
                                    Fecha de Entrega <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.fechaEntrega }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="horaEntrega">
                                <TimePicker
                                    start="08:00"
                                    end="24:00"
                                    step={ 15 }
                                    value={ values.horaEntrega }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.horaEntrega && !errors.horaEntrega }
                                    isInvalid={ touched.horaEntrega && !!errors.horaEntrega }
                                    placeholder="Hora de Entrega"
                                    className="form-select"
                                />
                                <Form.Label>
                                    Hora de Entrega <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.horaEntrega }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>

                        <Col className="mb-3">
                            <FloatingLabel controlId="fechaDesarrollo">
                                <Form.Control
                                    type="date"
                                    placeholder="Fecha de Desarrollo"
                                    value={ values.fechaDesarrollo }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.fechaDesarrollo && !errors.fechaDesarrollo }
                                    isInvalid={ touched.fechaDesarrollo && !!errors.fechaDesarrollo }
                                />
                                <Form.Label>
                                    Fecha de Desarrollo <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.fechaDesarrollo }
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default FormCliente
