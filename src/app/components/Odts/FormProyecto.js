import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import yup from '../../../plugins/yup'

const FormProyecto = () => {
    const schema = yup.object().shape({
        idCiudad         : yup.string().required(),
        idVenue          : yup.string().required(),
        objetivo         : yup.string().required(),
        objetivoPrincipal: yup.string().required(),
        fechaDesarrollo  : yup.string().required(),
    })

    const initialValues = {
        idCiudad         : 0,
        idVenue          : 0,
        objetivo         : '',
        objetivoPrincipal: '',
        fechaDesarrollo  : '',
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
                    <Row xs={ 1 } md={ 3 } lg={ 3 }>
                        <Col className="mb-3">
                            <Form.Group
                                controlId="idCiudad"
                                className="form-floating"
                            >
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
                                <Form.Label>
                                    Venue <span className="text-danger">*</span>
                                </Form.Label>
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

                        <Col className="mb-3">
                            <Form.Group controlId="fechaDesarrollo" className="form-floating">
                                <Form.Control
                                    type="text"
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
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default FormProyecto
