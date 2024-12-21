'use client';
import styles from './style.module.scss';
import Image from "next/image"
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import {SunMedium, Moon} from "lucide-react";

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); //toggle out light/dark mode

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href="/">
                    <Image src="/choso2.png" alt="logo" width={87} height={48}
                           className="rounded-lg  items-center"/>
                </Link>

                <div className={"flex gap-x-6 items-center cursor-pointer"}>
                    <div onClick={toggleTheme}>
                        {isDarkMode ? (
                            <Moon width={25} height={25}/>
                        ) : (
                            <SunMedium width={28} height={28}/>
                        )}
                    </div>
                    <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                        <div className={styles.label}>
                            <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}></motion.p>
                            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}></motion.p>
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
