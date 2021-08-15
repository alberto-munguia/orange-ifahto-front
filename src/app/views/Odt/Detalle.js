import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

import GridFechas from '../../components/Odts/GridFechas'
import FormTareas from '../../components/Odts/FormTareas'
import FormComentarios from '../../components/Odts/FormComentarios'

const Detalle = () => {
    const [showComment, setShowComment] = useState(false)
    const [showTask, setShowTask]       = useState(false)

    return (
        <>
            <GridFechas />

            <Row>
                {/* left side */}
                <Col md={ 4 }>
                    <Row>
                        <Col>
                            <div className="card bt-2 border-warning">
                                <header className="card-header">
                                    <h4 className="card-title text-uppercase">Detalle ODT</h4>
                                </header>
                                <div className="card-content">
                                    <div className="card-body"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="card bt-2 border-warning">
                                <header className="card-header">
                                    <h4 className="card-title text-uppercase">Usuarios Relacionados</h4>
                                </header>
                                <div className="card-content">
                                    <div className="card-body"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="card bt-2 border-warning">
                                <header className="card-header">
                                    <h4 className="card-title text-uppercase">Archivos</h4>
                                </header>
                                <div className="card-content">
                                    <div className="card-body"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                {/* right side */}
                <Col md={ 8 }>
                    <div className="card bt-2 border-warning">
                        <header className="card-header">
                            <h4 className="card-title text-uppercase">Matriz de Cambios</h4>
                            <div className="card-header-actions">
                                <Button
                                    variant="purple"
                                    className="btn-outline btn-bold"
                                    size="sm"
                                    onClick={ () => setShowTask(true) }
                                >
                                    Nuevo Cambio
                                </Button>
                                <Button
                                    variant="dark"
                                    className="btn-outline btn-bold"
                                    size="sm"
                                    onClick={ () => setShowComment(true) }
                                >
                                    Nuevo Comentario
                                </Button>
                            </div>
                        </header>

                        <div className="card-content">
                            <div className="card-body">
                                {
                                    // muestra el formulario de tareas para asignar...
                                    showTask && <FormTareas setShowTask={ setShowTask } />
                                }
                                {
                                    // muestra el formulario de comentarios...
                                    showComment &&
                                        <Row>
                                            <Col>
                                                <FormComentarios setShowComment={ setShowComment } />
                                            </Col>
                                        </Row>
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Detalle
