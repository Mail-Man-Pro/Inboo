import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { account } from '@/appwrite/init'
import Navbar from '@/components/Navbar/Navbar'
import Preloader from '@/components/Preloader/Preloader'

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
            </div>
        )
    } else return (<Preloader/>)
    
}
