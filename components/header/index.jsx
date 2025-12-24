'use client';
import styles from './style.module.scss';
import "@/app/globals.css"
import Image from "next/image"
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { background } from './anim';
import Nav from './nav';
import DarkModeButton from "@/components/DarkModeButton";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">
                    <Image src="/lotus.png" alt="logo" width={87} height={48}
                           className="rounded-lg transition transform hover:-translate-y-1 duration-200 items-center"/>
                </Link>

                <div className={"flex gap-x-6 items-center cursor-pointer"}>
                    <div >
                        <DarkModeButton/>
                    </div>
                    <div className={"transition transform hover:-translate-y-1 duration-200"} id={"transparency"}>
                        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
                                 id={"borgor"}></div>
                        </div>
                    </div>

                </div>

            </div>
            <motion.div
                variants={background}
                initial="initial"
                animate={isActive ? "open" : "closed"}
                className={styles.background}
            ></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav setIsActive={setIsActive}/>}
            </AnimatePresence>
        </div>
    );
}
