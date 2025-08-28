"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Tooltip() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="cursor-pointer text-spotify font-semibold">
        Chris Lam
      </span>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-40 h-40 rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white z-50"
                    >
                        <Image
                            src="/images/me.jpeg"
                            alt="Chris Lam"
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
