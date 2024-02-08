import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { account } from '@/appwrite/init'

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
                DASHBOARD
            </div>
        )
    } else {
        return (
            <h1>LOADING....</h1>
        )
    }
}
