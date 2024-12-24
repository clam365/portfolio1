"use client";
import { SunMedium, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Toggle theme on click
    return resolvedTheme === "dark" ? (
        <SunMedium
            width={26}
            height={26}
            className="text-[#FAFAFA] transition transform hover:-translate-y-1 duration-200"
            onClick={() => setTheme("light")}
        />
    ) : (
        <Moon
            width={24}
            height={24}
            className="text-slight-black transition transform hover:-translate-y-1 duration-200"
            onClick={() => setTheme("dark")}
        />
    );
}
