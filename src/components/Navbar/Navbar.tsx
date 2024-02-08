import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { account } from '@/appwrite/init'
import { useRouter } from 'next/router'

export default function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {

    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const router = useRouter()

    async function authenticateViaGoogle() {
        const response = await account.createOAuth2Session("google", "http://localhost:3000/dashboard", "http://localhost:3000/")
        console.log(response)
    }

    async function logOut() {
        setIsLoggingOut(true)
        await account.deleteSession("current")
        router.push("/")
    }

    return (
        <nav className={`max-w-6xl mx-auto ${styles.navbar}`}>
            <div className="max-w-5xl mx-auto">
                <h2 className={styles.logo}>INBOO</h2>

                {
                    !isAuthenticated ? (
                        <Dialog>
                            <DialogTrigger asChild>
                                <button>GET STARTED</button>
                            </DialogTrigger>
                            <DialogContent className={`max-w-3xl`}>
                                <div className='grid gap-4 w-[50%]'>

                                    <DialogHeader className="space-y-1">
                                        <DialogTitle className="text-2xl">Create an account</DialogTitle>
                                        <DialogDescription>
                                            Enter your email below to create your account
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid grid-cols-1 gap-2">

                                        <Button onClick={authenticateViaGoogle} variant="outline" >
                                            Register With Google
                                        </Button>

                                        <Button variant="outline" >
                                            Register With Google
                                        </Button>
                                    </div>

                                    <Card>
                                        <CardHeader className="space-y-1">
                                            <CardTitle className="text-2xl">Contact my developer</CardTitle>
                                            <CardDescription>
                                                Open for freelance work
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter>
                                            <Button className="w-full mt-[-.5em]">Contact Me</Button>
                                        </CardFooter>
                                    </Card>
                                </div>

                                <div className={`w-[48%] absolute right-0 top-0 bg-card h-full rounded-r-md`}>

                                </div>
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <button onClick={() => logOut()}>
                            {
                                !isLoggingOut ? "Log Out" : (
                                    "Logging Out..."
                                )
                            }
                        </button>
                    )
                }
            </div>

            <Image className={styles.bg} src={"/navbar.png"} width={1400} height={100} alt='navbar' />

        </nav>
    )
}
