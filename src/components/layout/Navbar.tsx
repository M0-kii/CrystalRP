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
                className={`glare-effect w-full max-w-6xl flex items-center justify-between h-18 px-8 ios-radius-lg transition-all duration-300 ${scrolled ? "glass shadow-2xl shadow-blue-500/10 border-zinc-700/50" : "bg-zinc-900/30 border border-zinc-800/30"
                    }`}
            >
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:text-blue-400 transition-colors">
                        CrystalRP
                    </Link>
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8 space-x-reverse">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-bold relative py-2"
                                >
                                    {link.icon}
                                    {link.label}
                                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full rounded-full" />
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
                                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold"
                                >
                                    <LayoutDashboard size={18} />
                                    پنل کاربری
                                </Link>
                                <button
                                    onClick={() => signOut()}
                                    className="p-2 text-slate-500 hover:text-red-400 transition-colors rounded-xl hover:bg-red-500/10"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => signIn("discord")}
                                className="glare-effect bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 ios-radius text-sm font-black flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 border border-blue-500/20"
                            >
                                <User size={18} />
                                لاگین با دیسکورد
                            </motion.button>
                        )}
                    </div>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 hover:bg-zinc-800/50 rounded-xl transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="glare-effect absolute top-24 left-4 right-4 md:hidden glass p-6 ios-radius-xl border border-zinc-800/50"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 text-slate-400 hover:text-white px-6 py-4 ios-radius hover:bg-zinc-800/50 transition-all font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                            <div className="h-px bg-zinc-800 my-2" />
                            {session ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-3 text-slate-400 hover:text-white px-6 py-4 ios-radius hover:bg-zinc-800/50 font-bold"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <LayoutDashboard size={18} />
                                        <span>پنل کاربری</span>
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="flex items-center gap-3 text-red-400 hover:text-red-300 px-6 py-4 ios-radius hover:bg-red-500/10 font-bold transition-colors"
                                    >
                                        <LogOut size={18} />
                                        خروج از حساب
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => signIn("discord")}
                                    className="glare-effect bg-blue-600 text-white px-6 py-4 ios-radius font-black text-sm mt-2 border border-blue-500/20 hover:bg-blue-500 transition-colors"
                                >
                                    لاگین با دیسکورد
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
