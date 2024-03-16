import Link from 'next/link'
import React from 'react'
import styles from "../navbar.module.css"
import NavLink from '../navlink/NavLink'


const Links = () => {



    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },


    ]

    const session = true
    const isAdmin = true
    return (
        <div className={styles.links}>
            {links.map(link => <NavLink link={link} key={link.path} />)}

            {session ? <>
                {isAdmin && <NavLink link={{
                    title: "Admin",
                    path: "/admin"
                }} />}
                <button className={styles.btn}>Logout</button>
            </> : <>
                <button className={styles.btn}>Login</button>
            </>}

        </div>
    )
}

export default Links