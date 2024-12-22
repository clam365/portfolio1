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
            width={28}
            height={28}
            className="text-[#FAFAFA]"
            onClick={() => setTheme("light")}
        />
    ) : (
        <Moon
            width={28}
            height={28}
            className="text-slight-black"
            onClick={() => setTheme("dark")}
        />
    );
}
