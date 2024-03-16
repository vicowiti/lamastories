"use client"
import React from 'react'
import styles from "../navbar.module.css"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
    link: {
        path: string
        title: string
    }
}

const NavLink = ({ link }: Props) => {

    const currentPath = usePathname()
    return (
        <Link key={link.path} href={link.path} className={`${styles.link} ${currentPath === link.path && styles.active}`}>{link.title}</Link>
    )
}

export default NavLink