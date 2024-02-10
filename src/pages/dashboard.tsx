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
            console.log(res)
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
                <div className={'max-w-6xl mx-auto ' + styles.parent}>
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
                            <h3>Bulk G-Mail</h3>
                            <p>42</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Suggestions</h3>
                            <p>42</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Un-Subscriber</h3>
                            <p>4+</p>
                        </div>

                        <div className={`${styles.tab}`}>
                            <h3>Contact Book</h3>
                            <p>4+</p>
                        </div>
                    </div>
                    <div className={styles.emails}>
                        <div className={styles.header}>
                            {/* <h2>Your Inbox</h2> */}
                            <input placeholder='Search For Mails' type='text' />
                            <button>Search Filter</button>
                        </div>

                        <div className={styles.mails}>
                            {
                                [0, 1, 2, 3, 4, 5].map((item, index) => {
                                    return (
                                        <div key={index} className={styles.mail + " shadow-2xl"}>
                                            <div className={styles.profile}>
                                                <div className={styles.profilePic}>

                                                </div>
                                                <div className={styles.subject}>
                                                    <h2>Akash Srinivasan</h2>
                                                    <article className='text-gray-500'>When should we meet ??</article>
                                                </div>
                                            </div>
                                            <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, soluta aut? Dignissimos consequuntur sit facere ipsam. Culpa voluptas expedita fugit, fugiat laboriosam animi vitae, nostrum explicabo necessitatibus debitis quo impedit!</p>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    } else return (<Preloader />)

}
