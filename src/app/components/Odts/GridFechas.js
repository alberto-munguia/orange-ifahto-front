import React from 'react'
import { Row, Col } from 'react-bootstrap'

const GridFechas = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">{' '}</h4>
                            <div className="card-header-actions pull-right">Cerrar ODT</div>
                        </header>
                        <div className="card-body">
                            <Row xs={ 1 } md={ 2 } lg={ 5 } className="justify-content-center">
                                {/* fecha solicitud */}
                                <Col className="text-center">
                                    <div className="center-v">
                                        <label className="col-form-label text-uppercase">
                                            Solicitud
                                        </label>
                                        <p className="lead">
                                            <strong>05/05/2021</strong>
                                        </p>
                                    </div>
                                </Col>

                                {/* fecha revisión */}
                                <Col className="text-center">
                                    <div className="center-v">
                                        <label className="col-form-label text-uppercase">
                                            Revisión
                                        </label>
                                        <p className="lead">
                                            <strong>05/05/2021</strong>
                                        </p>
                                    </div>
                                </Col>

                                {/* fecha entrega */}
                                <Col className="text-center">
                                    <div className="center-v">
                                        <label className="col-form-label text-uppercase">
                                            Entrega
                                        </label>
                                        <p className="lead">
                                            <strong>05/05/2021</strong>
                                        </p>
                                    </div>
                                </Col>

                                {/* progreso */}
                                <Col className="text-center">
                                    <div className="center-v">
                                        <label className="col-form-label text-uppercase">
                                            Progreso
                                        </label>
                                        <h4><strong>90%</strong></h4>
                                    </div>
                                </Col>

                                {/* estatus */}
                                <Col className="text-center">
                                    <div className="center-v hover-shadow-5 bg-yellow">
                                        <label className="col-form-label text-uppercase">
                                            Estatus
                                        </label>
                                        <h4 className="text-white"><strong>En Progreso</strong></h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default GridFechas
