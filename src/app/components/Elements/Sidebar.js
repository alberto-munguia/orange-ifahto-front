import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Collapse, Image, Nav, Dropdown } from 'react-bootstrap'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const [type, setType] = useState('')

    const toggleSubmenu = (submenu) => {
        setType(submenu)
        setOpen(!open)
        console.log(type)
        console.log(open)
    }

    return (
        <>
            <aside className="sidebar sidebar-color-orange sidebar-icons-boxed sidebar-expand-lg sidebar-dark">
                <header className="sidebar-header">
                    <a className="logo-icon" href="https://ifahto.com" target="_blank" rel="noreferrer">
                        <Image src="/assets/img/logo-if.svg" />
                    </a>
                    <span className="logo">
                        <a href="https://ifahto.com/" target="_blank" rel="noreferrer">
                            <Image src="/assets/img/logo-ifahto-blanco.svg" />
                        </a>
                    </span>
                    {/* <span className="sidebar-toggle-fold"></span> */}
                </header>

                <Nav as="nav" defaultActiveKey="/" className="sidebar-navigation">
                    <ul className="menu">
                        <Nav.Item as="li" className="menu-category">Panel</Nav.Item>

                        <Nav.Item as="li" className="menu-item">
                            <NavLink exact to="/" className="menu-link" activeClassName="active">
                                <span className="icon">
                                    <i className="fas fa-home" />
                                </span>
                                <span className="title">Inicio</span>
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item as="li" className="menu-item">
                            <NavLink
                                exact
                                to="/odts/nuevo"
                                className="menu-link"
                                activeClassName="active"
                            >
                                <span className="icon">
                                    <i className="far fa-file-alt" />
                                </span>
                                <span className="title">Nueva ODT</span>
                            </NavLink>
                        </Nav.Item>
                    </ul>
                </Nav>
            </aside>
        </>
    )
}

export default Sidebar
