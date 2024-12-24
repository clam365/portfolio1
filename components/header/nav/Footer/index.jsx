import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import {ArrowUpRight} from "lucide-react";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <div className={"space-x-6 flex"}>
                        <a className={"text-xl flex space-x-2 group"} href={"https://www.linkedin.com/in/chrislam365"} target="_blank">
                            LinkedIn
                            <ArrowUpRight className={"group-hover:text-spotify transition"}/>
                        </a>
                        <a className={"text-xl flex space-x-2 group"} href="/resume.pdf" target="_blank" rel="opener referrer">
                            Resume
                            <ArrowUpRight className={"group-hover:text-spotify transition"}/>
                        </a>
                        <a className={"text-xl flex space-x-2 group"} href="mailto:christopherlam110@gmail.com">
                            Email
                            <ArrowUpRight className={"group-hover:text-spotify transition"}/>
                        </a>

                    </div>


                </motion.li>
            </ul>

        </div>
    )
}