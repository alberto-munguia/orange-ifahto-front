import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import FormCliente from '../../components/Odts/FormCliente'
import FormGenerales from '../../components/Odts/FormGenerales'
import FormBrief from '../../components/Odts/FormBrief'
import AddCliente from '../../components/Clientes/ModalFormAdd'
import AddMarca from '../../components/Marcas/ModalFormAdd'

const Agregar = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">
                                Cliente / Avances / Entrega
                            </h4>
                            <div className="card-header-actions">
                                <AddCliente />
                                <AddMarca />
                            </div>
                        </header>
                        <div className="card-body">
                            <FormCliente />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">
                                Generales
                            </h4>
                        </header>
                        <div className="card-body">
                            <FormGenerales />
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={ 4 }>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">
                                Cargar Archivos
                            </h4>
                        </header>
                        <div className="card-body">
                        </div>
                    </div>
                </Col>

                <Col md={ 8 }>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">
                                Información General
                            </h4>
                        </header>
                        <div className="card-body">
                            <FormBrief />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Agregar
