import React from 'react'
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import overlayFactory from 'react-bootstrap-table2-overlay'
// import Button from 'react-bootstrap/Button'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const Listado = ({ tipoListado }) => {
    console.log({ tipoListado })

    const products = [
        { id: 1, nombre: 'ODT prueba', cliente: 'Beto' }
    ]
    const columns  = [
        { dataField: 'id', text: 'ID', sort: true },
        { dataField: 'nombre', text: 'Nombre', sort: true },
        { dataField: 'cliente', text: 'Cliente', sort: true },
        { dataField: 'marca', text: 'Marca', sort: true },
        { dataField: 'ces', text: 'CES', sort: true, align: 'center' },
        { dataField: 'presupuesto', text: 'Presupuesto'},
        { dataField: 'fecha_solicitud', text: 'Fecha Solicitud', sort: true },
        { dataField: 'fecha_entrega', text: 'Fecha Entrega', sort: true },
        { dataField: 'fecha_revision', text: 'Fecha Revisión'},
        { dataField: 'estatus', text: 'Estatus', sort: true, align: 'center' },
        { dataField: 'progreso', text: 'Progreso', sort: true },
        { dataField: 'estatus_comercial', text: 'Estatus Comercial'},
        { dataField: 'fecha_registro', text: 'Fecha Registro'},
        { dataField: 'usuario', text: 'Usuario que generó ODT'},
    ]

    return (
        <>
            <div className="m-b-20">
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={ <Tooltip id="tooltip-top">Ver Detalle ODT</Tooltip> }
                >
                    <Button variant="success" className="btn-icon btn-tone m-r-10">
                        <i class="fas fa-info"></i>
                    </Button>
                </OverlayTrigger>

                {
                    tipoListado == 'historial'
                        &&
                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={ <Tooltip id="tooltip-top">Cambiar Estatus Comercial</Tooltip> }
                            >
                                <Button variant="primary" className="btn-icon btn-tone m-r-10">
                                    <i class="fas fa-edit"></i>
                                </Button>
                            </OverlayTrigger>
                }
            </div>

            <BootstrapTable
                keyField='id'
                data={ products }
                columns={ columns }
                pagination={ paginationFactory() }
                selectRow={{ mode: 'radio', clickToSelect: true }}
                overlay={ overlayFactory() }
                bootstrap4
                hover
                wrapperClasses="table-responsive m-b-15"
            />
        </>
    )
}

Listado.propTypes = {
    tipoListado: PropTypes.string.isRequired,
}

export default Listado
