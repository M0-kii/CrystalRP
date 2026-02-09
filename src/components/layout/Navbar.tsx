"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { User, ShoppingCart, ShieldAlert, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "صفحه اصلی", icon: null },
        { href: "/rules", label: "قوانین", icon: <ShieldAlert size={18} /> },
        { href: "/store", label: "فروشگاه", icon: <ShoppingCart size={18} /> },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            CrystalRP
                        </Link>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-8 space-x-reverse">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center gap-4">
                            {session ? (
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
                                    >
                                        <LayoutDashboard size={18} />
                                        داشبورد
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                                    >
                                        <LogOut size={18} />
                                        خروج
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => signIn("discord")}
                                    className="bg-primary hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20"
                                >
                                    <User size={18} />
                                    ورود / ثبت نام
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-2 text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-white/10 mt-4 pt-4 px-3 flex flex-col gap-4 pb-4">
                                {session ? (
                                    <>
                                        <Link
                                            href="/dashboard"
                                            className="text-slate-300 hover:text-white flex items-center gap-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <LayoutDashboard size={18} />
                                            داشبورد
                                        </Link>
                                        <button
                                            onClick={() => signOut()}
                                            className="text-red-400 hover:text-red-300 flex items-center gap-2"
                                        >
                                            <LogOut size={18} />
                                            خروج
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => signIn("discord")}
                                        className="bg-primary text-white px-6 py-3 rounded-xl text-center font-bold"
                                    >
                                        ورود / ثبت نام
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
