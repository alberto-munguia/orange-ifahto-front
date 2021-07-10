import React from 'react'
import { Button } from 'react-bootstrap'

const MatrizCambios = () => {
    return (
        <>
            <div className="card">
                <div className="card-header d-md-inline-flex">
                    <h4 className="text-uppercase card-title h4 font-weight-light float-md-left">
                        Matriz de Cambios
                    </h4>
                    <div className="align-self-center ml-auto mb-md-0 mb-2">
                        <Button variant="warning" className="m-r-5">Prueba</Button>
                        <Button variant="danger" className="">Prueba</Button>
                    </div>
                </div>
                <div className="card-body"></div>
            </div>
        </>
    )
}

export default MatrizCambios
