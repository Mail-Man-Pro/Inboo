import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { account } from '@/appwrite/init'
import Navbar from '@/components/Navbar/Navbar'
import Preloader from '@/components/Preloader/Preloader'
import styles from "./dashboard.module.scss"

export default function dashboard() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        const user = account.get()
        user.then((res: any) => {
            setUserInfo(res)
        },
            (err) => {
                router.push("/")
            })
    }, [router])

    if (userInfo) {
        return (
            <div>
                <Navbar isAuthenticated={true}></Navbar>
                <div className='max-w-6xl mx-auto'>
                    <div className={styles.sidebar}>
                        <div className={`${styles.tab} ${styles.active}`}>
                            <h3>Inbox</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Drafts</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Junk</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Sent</h3>
                            <p>23+</p>
                        </div>
                        <h2 className={styles.fancy}>
                            Smart Folders
                        </h2>
                        <div className={`${styles.tab} ${styles.active}`}>
                            <h3>Top Senders</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Education</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Social Media</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Job Search</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Productivity Tools</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Creative Tools</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>News Letters</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Travel</h3>
                            <p>23+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Food Delivery</h3>
                            <p>23+</p>
                        </div>

                        <h2 className={styles.fancy}>
                            Tools
                        </h2>

                        <div className={`${styles.tab}`}>
                            <h3>Suggestions</h3>
                            <p>42</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Unsbscriber</h3>
                            <p>4+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Contact Book</h3>
                            <p>4+</p>
                        </div>
                    </div>


                </div>
            </div>
        )
    } else return (<Preloader />)

}
