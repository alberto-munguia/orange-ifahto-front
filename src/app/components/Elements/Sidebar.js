import React from 'react'

const Sidebar = () => {
    return (
        <div className="side-nav">
            <div className="side-nav-inner">
                <ul className="side-nav-menu scrollable">
                    <li className="nav-item dropdown">
                        <a href="#">
                            <span className="icon-holder">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="title">Inicio</span>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="#">
                            <span className="icon-holder">
                                <i className="fas fa-file-signature"></i>
                            </span>
                            <span className="title">ODTS</span>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="#">
                            <span className="icon-holder">
                                <i className="fas fa-paste"></i>
                            </span>
                            <span className="title">Proyectos</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
