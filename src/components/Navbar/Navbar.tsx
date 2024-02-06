import React from 'react'
import styles from "./navbar.module.scss"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
        <nav className={styles.navbar}>
            <div className="max-w-5xl mx-auto">
                <h2 className={styles.logo}>INBOO</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <button>GET STARTED</button>
                    </DialogTrigger>
                    <DialogContent className={`sm:max-w-[425px] className="grid gap-4"`}>
                        <DialogHeader className="space-y-1">
                            <DialogTitle className="text-2xl">Create an account</DialogTitle>
                            <DialogDescription>
                                Enter your email below to create your account
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 gap-2">

                            <Button variant="outline" >
                                <span className="text-center flex items-center">
                                    Register With Google
                                </span>
                            </Button>
                            
                            <Button variant="outline" >
                                <span className="text-center flex items-center">
                                    Register With Google
                                </span>
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
                    </DialogContent>
                </Dialog>
            </div>

            <Image className={styles.bg} src={"/navbar.png"} width={1400} height={100} alt='navbar' />

        </nav>
    )
}
