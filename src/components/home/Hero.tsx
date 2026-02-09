"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Users, Zap } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-6 py-3 ios-radius-lg mb-8"
                    >
                        <Sparkles size={18} className="text-blue-400" />
                        <span className="text-blue-400 font-black text-sm uppercase tracking-wider">
                            بهترین سرور رول‌پلی ایران
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none"
                    >
                        کریستال
                        <span className="block text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">
                            آرپی
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        تجربه‌ای بی‌نظیر از رول‌پلی با جامعه‌ای حرفه‌ای، سیستم‌های منحصر به فرد و محیطی کاملاً ایمن
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-8 mb-16"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-600/10 ios-radius border border-blue-500/20">
                                <Users size={24} className="text-blue-400" />
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-black text-white">۱۰۰۰+</p>
                                <p className="text-sm text-slate-500 font-bold">بازیکن فعال</p>
                            </div>
                        </div>
                        <div className="h-12 w-px bg-zinc-800" />
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-600/10 ios-radius border border-blue-500/20">
                                <Zap size={24} className="text-blue-400" />
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-black text-white">۲۴/۷</p>
                                <p className="text-sm text-slate-500 font-bold">آنلاین بودن</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/register"
                            className="group glare-effect bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 ios-radius-lg text-lg font-black transition-all shadow-2xl shadow-blue-600/50 border border-blue-500/30 hover:scale-105"
                        >
                            <span className="flex items-center gap-3">
                                همین الان شروع کن
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    ←
                                </motion.span>
                            </span>
                        </Link>
                        <Link
                            href="/rules"
                            className="glare-effect bg-zinc-900/50 hover:bg-zinc-800/50 text-white px-12 py-5 ios-radius-lg text-lg font-black transition-all border border-zinc-800 hover:border-zinc-700"
                        >
                            قوانین سرور
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-slate-700 ios-radius-lg flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-3 bg-blue-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};
