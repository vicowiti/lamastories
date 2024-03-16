import React from 'react'
import Links from './Links/Links'
import styles from "./navbar.module.css"


const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <Links />
        </nav>
    )
}

export default Navbar