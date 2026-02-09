"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-900 leading-none mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl font-black text-white mb-4">صفحه مورد نظر یافت نشد</h2>
                    <p className="text-slate-400 mb-12 leading-relaxed">
                        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="glare-effect flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 ios-radius font-black transition-all shadow-lg shadow-blue-600/30 border border-blue-500/20"
                        >
                            <Home size={20} />
                            بازگشت به صفحه اصلی
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 glare-effect premium-border ios-radius-xl p-8"
                >
                    <Search className="mx-auto mb-4 text-slate-600" size={32} />
                    <p className="text-slate-500 text-sm">
                        اگر فکر می‌کنید این یک خطا است، لطفاً با پشتیبانی تماس بگیرید.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
