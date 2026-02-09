"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User as UserIcon, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await login(email, password);
        } catch (err: any) {
            setError(err.message || "ورود ناموفق بود");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-950 to-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-12">
                    <Link href="/" className="text-4xl font-black text-white tracking-tight hover:text-blue-400 transition-colors inline-block">
                        CrystalRP
                    </Link>
                    <p className="text-slate-500 mt-2">ورود به حساب کاربری</p>
                </div>

                <div className="glare-effect premium-border ios-radius-xl p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-600/10 border border-red-500/30 text-red-400 p-4 ios-radius text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-2">ایمیل</label>
                            <div className="relative">
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 ios-radius px-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50"
                                    placeholder="example@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-400 mb-2">رمز عبور</label>
                            <div className="relative">
                                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 ios-radius px-12 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 ios-radius font-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? "در حال ورود..." : "ورود"}
                            <ArrowRight size={20} />
                        </motion.button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            حساب کاربری ندارید؟{" "}
                            <Link href="/register" className="text-blue-400 hover:text-blue-300 font-bold">
                                ثبت نام کنید
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
