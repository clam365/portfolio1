import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <div className={"space-x-3"}>
                        <a className={"text-xl"} href={"https://www.linkedin.com/in/chrislam365"} target="_blank">LinkedIn</a>
                        <a className={"text-xl"} href="/resume.pdf" target="_blank" rel="opener referrer">Resume</a>
                        <a className={"text-xl"} href="mailto:christopherlam110@gmail.com">Email</a>

                    </div>


                </motion.li>
            </ul>

        </div>
    )
}