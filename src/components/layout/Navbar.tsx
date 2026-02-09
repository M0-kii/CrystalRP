"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { User, ShoppingCart, ShieldAlert, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "صفحه اصلی", icon: null },
        { href: "/rules", label: "قوانین", icon: <ShieldAlert size={16} /> },
        { href: "/store", label: "فروشگاه", icon: <ShoppingCart size={16} /> },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`w-full max-w-5xl flex items-center justify-between h-16 px-6 rounded-2xl transition-all duration-300 ${scrolled ? "glass shadow-2xl shadow-blue-900/10" : "bg-white/5 border border-white/5"
                    }`}
            >
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-black text-white tracking-tighter hover:text-primary transition-colors">
                        CrystalRP
                    </Link>
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-6 space-x-reverse">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-medium relative"
                                >
                                    {link.icon}
                                    {link.label}
                                    <span className="absolute -bottom-1 right-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
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
                                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    <LayoutDashboard size={18} />
                                    پنل کاربری
                                </Link>
                                <button
                                    onClick={() => signOut()}
                                    className="text-slate-500 hover:text-red-400 transition-colors"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => signIn("discord")}
                                className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                            >
                                <User size={16} />
                                Login / Signup
                            </motion.button>
                        )}
                    </div>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 md:hidden glass p-4 rounded-[2rem] border border-white/10"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 text-slate-400 hover:text-white px-5 py-4 rounded-2xl hover:bg-white/5 transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.icon}
                                    <span className="font-bold">{link.label}</span>
                                </Link>
                            ))}
                            <div className="h-px bg-white/5 my-2 mx-5" />
                            {session ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white px-5 py-4 rounded-2xl hover:bg-white/5"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <LayoutDashboard size={18} />
                                        <span className="font-bold">پنل کاربری</span>
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="flex items-center gap-3 text-red-500 px-5 py-4 transition-colors font-bold"
                                    >
                                        <LogOut size={18} />
                                        خروج از حساب
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => signIn("discord")}
                                    className="bg-primary text-white p-5 rounded-2xl font-black text-sm mt-2"
                                >
                                    ورود / ثبت نام
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
