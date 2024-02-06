import React from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="max-w-5xl mx-auto">
                <h2 className={styles.logo}>INBOO</h2>
                <button>GET STARTED</button>
            </div>

            <Image className={styles.bg} src={"/navbar.png"} width={1400} height={100} alt='navbar' />
            
        </nav>
    )
}
