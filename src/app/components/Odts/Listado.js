import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { isNil } from 'lodash'

import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import overlayFactory from 'react-bootstrap-table2-overlay'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const Listado = ({ tipoListado }) => {
    console.log({ tipoListado })
    const [idOdt, setIdOdt] = useState(null)

    const products = [
        { id: 1, nombre: 'ODT prueba', cliente: 'Beto' }
    ]

    const columns  = [
        { dataField: 'id', text: 'ID', sort: true },
        { dataField: 'nombre', text: 'Nombre', sort: true },
        { dataField: 'cliente', text: 'Cliente', sort: true },
        { dataField: 'marca', text: 'Marca', sort: true },
        { dataField: 'ces', text: 'CES', sort: true, align: 'center' },
        // { dataField: 'presupuesto', text: 'Presupuesto'},
        { dataField: 'fecha_solicitud', text: 'Fecha Solicitud', sort: true },
        { dataField: 'fecha_entrega', text: 'Fecha Entrega', sort: true },
        // { dataField: 'fecha_revision', text: 'Fecha Revisión'},
        { dataField: 'estatus', text: 'Estatus', sort: true, align: 'center' },
        // { dataField: 'progreso', text: 'Progreso', sort: true },
        { dataField: 'estatus_comercial', text: 'Estatus Comercial'},
        // { dataField: 'fecha_registro', text: 'Fecha Registro'},
        // { dataField: 'usuario', text: 'Usuario que generó ODT'},
    ]

    const selectRow = {
        mode         : 'radio',
        clickToSelect: true,
        onSelect(row, isSelect) {
            if (isSelect) {
                setIdOdt( row.id )
            }
        }
    }

    return (
        <>
            <div className="mb-20">
                <GetLinkOdt id={ idOdt } />

                {
                    tipoListado === 'historial' &&
                        <OverlayTrigger
                            key="topEstatus"
                            placement="top"
                            overlay={ <Tooltip>Cambiar Estatus Comercial</Tooltip> }
                        >
                            <Button variant="dark" className="btn-icon btn-tone mr-10">
                                <i className="fas fa-edit"></i>
                            </Button>
                        </OverlayTrigger>
                }
            </div>

            <BootstrapTable
                keyField='id'
                data={ products }
                columns={ columns }
                pagination={ paginationFactory() }
                selectRow={ selectRow }
                overlay={ overlayFactory() }
                bootstrap4
                hover
                classes="table-custom"
                wrapperClasses="table-responsive mb-15"
            />
        </>
    )
}

const GetLinkOdt = ({ id }) => {
    return (
        <OverlayTrigger
            key="topDetalle"
            placement="top"
            overlay={ <Tooltip>Ver Detalle ODT</Tooltip> }
        >
            {
                !isNil(id)
                    ?
                        <Link
                            to={ `/odts/detalle/${ id }` }
                            className="btn btn-info btn-square mr-10"
                        >
                            <i className="fas fa-info"></i>
                        </Link>
                    :
                        <Button variant="info" className="btn-square mr-10" disabled>
                            <i className="fas fa-info"></i>
                        </Button>
            }
        </OverlayTrigger>
    )
}

Listado.propTypes = {
    tipoListado: PropTypes.string.isRequired,
}

export default Listado
