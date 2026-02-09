"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Send, Instagram, Youtube } from "lucide-react";

export default function Home() {
    return (
        <main className="selection:bg-blue-500 selection:text-white">
            {/* ... existing content ... */}

            {/* Minimal Footer */}
            <footer className="relative py-16 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Brand */}
                        <div className="text-center md:text-right">
                            <h3 className="text-2xl font-black text-white mb-2">CrystalRP</h3>
                            <p className="text-slate-600 text-sm">بهترین تجربه رول‌پلی در ایران</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://discord.gg/crystalrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-blue-600/20 ios-radius border border-zinc-800 hover:border-blue-500/30 transition-all group"
                                aria-label="Discord"
                            >
                                <MessageCircle size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://t.me/crystalrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-blue-600/20 ios-radius border border-zinc-800 hover:border-blue-500/30 transition-all group"
                                aria-label="Telegram"
                            >
                                <Send size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://instagram.com/crystalrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-pink-600/20 ios-radius border border-zinc-800 hover:border-pink-500/30 transition-all group"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-slate-400 group-hover:text-pink-400 transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://youtube.com/@crystalrp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-red-600/20 ios-radius border border-zinc-800 hover:border-red-500/30 transition-all group"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} className="text-slate-400 group-hover:text-red-400 transition-colors" />
                            </motion.a>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-slate-600 text-xs font-medium">
                                © 2024 CrystalRP. تمامی حقوق محفوظ است.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
