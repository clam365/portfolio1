"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, createContext, useContext } from "react";
import React from "react";

const ClickableContext = createContext();

export function Clickable({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <ClickableContext.Provider value={{ open, setOpen }}>
            <div className="inline-block">{children}</div>
        </ClickableContext.Provider>
    );
}

Clickable.Trigger = function ClickableTrigger({ children }) {
    const { setOpen, open } = useContext(ClickableContext);

    return (
        <div onClick={() => setOpen(!open)} className="cursor-pointer inline-block">
            {children}
        </div>
    );
};

Clickable.Content = function ClickableContent({ children }) {
    const { open, setOpen } = useContext(ClickableContext);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    onClick={() => setOpen(false)} // click background to close
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
