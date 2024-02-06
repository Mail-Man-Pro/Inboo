import React from 'react'
import styles from "./hero.module.scss"
import Image from 'next/image'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1>
                Inbox Overload ?? Clear Your Inbox <span>With Akash</span>
            </h1>

            <Image className={styles.showcase} src={"/showcase.png"} width={1800} height={500} alt='showcase' />
            
        </div>
    )
}
