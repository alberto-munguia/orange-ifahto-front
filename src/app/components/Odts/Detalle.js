import React from 'react'
import { Row, Col } from 'react-bootstrap'

import DetalleProyecto from '../Proyectos/DetalleProyecto'
import MatrizCambios from './MatrizCambios'

const Detalle = () => {
    return (
        <>
            <div className="main-content">
                <div className="page-header no-gutters">
                    <div className="d-md-flex align-items-md-center justify-content-between">
                        <div className="media m-v-10 align-items-center">
                            <div className="media-body m-l-15">
                                <h4 className="m-b-0">
                                    REFRESCOS Y AGUAS MINERALES, S. DE R.L. DE C.V. : Dia de la FAmilia Foraneos
                                </h4>
                            </div>
                        </div>
                        <div className="d-md-flex align-items-center d-none"></div>
                    </div>
                </div>

                <Row>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <Row className="text-center text-uppercase" xs={ 1 } md={ 5 }>
                                    <Col>
                                        <h5 className="h5 font-weight-light">Solicitud</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="h5 font-weight-light">Revisión</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="h5 font-weight-light">Entrega</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="h5 font-weight-light">Progreso</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="h5 font-weight-light">Estatus</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={ 4 }>
                        <DetalleProyecto />

                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-uppercase card-title h4 font-weight-light">
                                    Usuarios
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-uppercase card-title h4 font-weight-light">
                                    Cargar Archivos
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-uppercase card-title h4 font-weight-light">
                                    Archivos
                                </h4>
                            </div>
                            <div className="card-body"></div>
                        </div>
                    </Col>

                    <Col md={ 8 }>
                        <MatrizCambios />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Detalle
