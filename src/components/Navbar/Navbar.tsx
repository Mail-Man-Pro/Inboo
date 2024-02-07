import React from 'react'
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
import { FaGoogle } from "react-icons/fa";
// import { Icons } from "@/components/icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"

export default function Navbar() {
    return (
        <nav className={`max-w-6xl mx-auto ${styles.navbar}`}>
            <div className="max-w-5xl mx-auto">
                <h2 className={styles.logo}>INBOO</h2>
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

                                <Button variant="outline" >
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
            </div>

            <Image className={styles.bg} src={"/navbar.png"} width={1400} height={100} alt='navbar' />

        </nav>
    )
}
