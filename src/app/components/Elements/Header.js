import React from 'react'
import Image from 'react-bootstrap/Image'

const Header = () => {
    return (
        <div className="header">
            <div className="logo logo-dark">
                <a href="index.html" style={{ marginTop: '5%' }}>
                    <Image src="/assets/img/logo-ifahto-blanco.svg" alt="Ifahto" fluid />
                    <Image
                        src="/assets/img/logo-if.svg"
                        alt="Ifahto"
                        style={{ width: '50px' }}
                        className="logo-fold mx-auto"
                        fluid
                        
                    />
                </a>
            </div>
            <div className="logo logo-white">
                <a href="index.html" style={{ marginTop: '5%' }}>
                    <Image src="/assets/img/logo-ifahto-blanco.svg" alt="Ifahto" fluid />
                    <Image
                        src="/assets/img/logo-if.svg"
                        alt="Ifahto"
                        style={{ width: '50px' }}
                        className="logo-fold mx-auto"
                        fluid
                        
                    />
                </a>
            </div>
            <div className="nav-wrap">
                <ul className="nav-left"></ul>
                <ul className="nav-right">
                    <li className="dropdown dropdown-animated scale-left">
                        <div className="pointer"></div>
                        <div className="p-b-15 p-t-20 dropdown-menu pop-profile"></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
