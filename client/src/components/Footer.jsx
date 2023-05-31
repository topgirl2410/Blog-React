import React from 'react'
import Logo from '../img/logo/Lovepik_com-401747731-education-logo.png'

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Made with ♥️ and <b>React.js</b>.
            </span>
        </footer>
    )
}

export default Footer