import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Dropdown, Image, Navbar } from 'react-bootstrap'

const Header = () => {
    let history = useHistory()

    const handleGoBack = () => history.goBack()

    return (
        <>
            <header className="topbar topbar-inverse bg-orange">
                <div className="topbar-left">
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        as="span"
                        className="topbar-btn sidebar-toggler"
                    ><i>&#9776;</i></Navbar.Toggle>
                    {/* <span className="topbar-btn sidebar-toggler"><i>&#9776;</i></span> */}
                    <h3 className="text-white"><strong></strong></h3>

                    <Button variant="dark" size="sm" onClick={ handleGoBack }>
                        <i className="fas fa-arrow-left"></i> Regresar
                    </Button>
                </div>

                <div className="topbar-right">
                    <div className="topbar-divider"></div>
                    <ul className="topbar-btns">
                        <Dropdown as="li">
                            <Dropdown.Toggle as="span" className="topbar-btn">
                                <Image className="avatar" src="/assets/img/avatar.jpg" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-right">
                                {/* <Dropdown.Divider></Dropdown.Divider> */}
                                <Dropdown.Item>
                                    <Link to="/logout">
                                        <i className="fa fa-sign-out" /> Cerrar Sesión
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as="li" className="d-none d-md-block">
                            <div className="center-v">
                                <span className="fs-14 text-uppercase text-white">
                                    <strong>Alberto Munguia</strong>
                                </span>
                            </div>
                        </Dropdown>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
