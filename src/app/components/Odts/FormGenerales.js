import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'

const FormGenerales = () => {
    const schema = yup.object().shape({
        idTipoPropuesta  : yup.string().required(),
        idCategoria      : yup.string().required(),
        idCiudad         : yup.string().required(),
        idVenue          : yup.string().required(),
        proyecto         : yup.string().max(100).required(),
        presupuesto      : yup.string().required(),
        condicion        : yup.string().required(),
        objetivo         : yup.string().required(),
        objetivoPrincipal: yup.string().max(150).required(),
    })

    const initialValues = {
        idTipoPropuesta  : 0,
        idCategoria      : 0,
        idCiudad         : 0,
        idVenue          : 0,
        proyecto         : '',
        presupuesto      : '',
        condicion        : 0,
        objetivo         : '',
        objetivoPrincipal: '',
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
                    <Row xs={ 1 } md={ 2 } lg={ 2 }>
                        <Col className="mb-3">
                            <Form.Group
                                controlId="proyecto"
                                className="form-floating"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre del Proyecto"
                                    value={ values.proyecto }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.proyecto && !errors.proyecto }
                                    isInvalid={ touched.proyecto && !!errors.proyecto }
                                />
                                <Form.Label>
                                    Nombre del Proyecto <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.proyecto }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="objetivoPrincipal" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Objetivo Principal"
                                    value={ values.objetivoPrincipal }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.objetivoPrincipal && !errors.objetivoPrincipal }
                                    isInvalid={ touched.objetivoPrincipal && !!errors.objetivoPrincipal }
                                />
                                <Form.Label>
                                    Objetivo Principal <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.objetivoPrincipal }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 3 } lg={ 3 }>
                        <Col className="mb-3">
                            <Form.Group controlId="idCiudad" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Ciudad"
                                    value={ values.idCiudad }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idCiudad && !errors.idCiudad }
                                    isInvalid={ touched.idCiudad && !!errors.idCiudad }
                                />
                                <Form.Label>
                                    Ciudad <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idCiudad }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="idVenue" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Venue"
                                    value={ values.idVenue }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idVenue }
                                />
                                <Form.Label>Venue</Form.Label>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="objetivo" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Target"
                                    value={ values.objetivo }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.objetivo && !errors.objetivo }
                                    isInvalid={ touched.objetivo && !!errors.objetivo }
                                />
                                <Form.Label>
                                    Target <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.objetivo }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="idCategoria" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Categoría"
                                    value={ values.idCategoria }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idCategoria && !errors.idCategoria }
                                    isInvalid={ touched.idCategoria && !!errors.idCategoria }
                                />
                                <Form.Label>
                                    Categoría <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idCategoria }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="presupuesto" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Presupuesto"
                                    value={ values.presupuesto }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.presupuesto && !errors.presupuesto }
                                    isInvalid={ touched.presupuesto && !!errors.presupuesto }
                                />
                                <Form.Label>
                                    Presupuesto <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.presupuesto }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="idTipoPropuesta" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Tipo de Propuesta"
                                    value={ values.idTipoPropuesta }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.idTipoPropuesta && !errors.idTipoPropuesta }
                                    isInvalid={ touched.idTipoPropuesta && !!errors.idTipoPropuesta }
                                />
                                <Form.Label>
                                    Tipo de Propuesta <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.idTipoPropuesta }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col className="mb-3">
                            <Form.Group controlId="condicion" className="form-floating">
                                <Form.Control
                                    type="text"
                                    placeholder="Estatus Actual"
                                    value={ values.condicion }
                                    onBlur={ handleBlur }
                                    onChange={ handleChange }
                                    isValid={ touched.condicion && !errors.condicion }
                                    isInvalid={ touched.condicion && !!errors.condicion }
                                />
                                <Form.Label>
                                    Estatus Actual <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control.Feedback type="invalid">
                                    { errors.condicion }
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default FormGenerales
