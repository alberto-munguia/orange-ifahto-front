import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { default as OdtListado } from '../Odts/Listado'
import { default as ProyectoListado } from '../Proyectos/Listado'

const Dashboard = () => {
    return (
        <>
            <div className="main-content">
                <div className="page-header"></div>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">ODTS</h4>
                    </div>
                    <div className="card-body">
                        <Tabs
                            defaultActiveKey="activas"
                            variant="pills"
                            id="odts"
                            className="mb-3"
                        >
                            <Tab eventKey="activas" title="Activas">
                                <OdtListado tipoListado="activas" />
                            </Tab>
                            <Tab eventKey="historial" title="Historial">
                                <OdtListado tipoListado="historial" />
                            </Tab>
                        </Tabs>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Proyectos</h4>
                    </div>
                    <div className="card-body">
                        <ProyectoListado tipoListado="activas" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
