import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { account } from '@/appwrite/init'
import Navbar from '@/components/Navbar/Navbar'
import { Loader2 } from 'lucide-react';
const Icons = {
    spinner: Loader2,
};

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
    } else {
        return (
            <div className='grid place-items-center h-[100vh]'>
                <div className='flex items-center content-center flex-col'>
                <Icons.spinner className="h-24 w-24 animate-spin" />
                <h2>Loading Please Wait....</h2>
                </div>
            </div>
        )
    }
}
