'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Project Scope', href: '#domain' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Timeline', href: '#milestones' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`text-xl sm:text-2xl font-bold ${isScrolled ? 'bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent' : 'text-white'}`}
                    >
                        AgroFarma
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-white hover:text-green-100'} px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden inline-flex items-center justify-center p-2 rounded-lg ${isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-white hover:text-green-100'} hover:bg-white/10 focus:outline-none transition-all duration-300`}
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-green-100"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-600 hover:text-green-600 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-green-50/50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
} 