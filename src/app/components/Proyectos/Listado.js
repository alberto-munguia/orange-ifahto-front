import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import overlayFactory from 'react-bootstrap-table2-overlay'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const Listado = () => {
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

export default Listado
