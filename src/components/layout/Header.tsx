// src/components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full flex flex-col items-center justify-center transition-all duration-500 z-50 ${isScrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-6"
                }`}
        >
            {/* Navigation Bar */}
            <nav className="flex space-x-6 text-lg">
                <Link href="/contact">+ Contact</Link>
                <Link href="/">Home</Link>
                <Link href="/wine">Wine Categories</Link>
                <Link href="/about">About Khu Mo Wine</Link>
            </nav>

            {/* Logo Animation */}
            <motion.div
                initial={{ scale: 2 }}
                animate={{ scale: isScrolled ? 1 : 2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-bold text-5xl transition-all"
            >
                Khu Mo Distillery
            </motion.div>
        </header>
    );
};

export default Header;
