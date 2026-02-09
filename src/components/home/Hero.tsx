"use client";

import { motion } from "framer-motion";
import { Play, Download, Users } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6">
                        به جـامـعه <span className="gradient-text">CrystalRP</span> بـپیـوندید
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        تجربه‌ای متفاوت از رول‌پلی واقعی در بزرگ‌ترین سرور فایوم ایران. همین حالا ثبت نام کنید و زندگی جدید خود را آغاز کنید.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-primary hover:scale-105 transition-transform text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-primary/30 w-full sm:w-auto justify-center">
                            <Play fill="white" size={20} />
                            شروع بازی
                        </button>
                        <button className="glass hover:bg-white/10 transition-colors text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 w-full sm:w-auto justify-center">
                            <Download size={20} />
                            آموزش نصب
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard icon={<Users className="text-primary" />} title="بازیکنان" value="+12,000" />
                        <StatCard icon={<Play className="text-secondary" />} title="وضعیت سرور" value="آنلاین" />
                        <StatCard icon={<Download className="text-accent" />} title="آپدیت‌ها" value="روزانه" />
                        <StatCard icon={<Users className="text-primary" />} title="دیسکورد" value="+18,000" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
    <div className="glass p-6 rounded-2xl flex flex-col items-center gap-2">
        {icon}
        <div className="text-2xl font-black">{value}</div>
        <div className="text-sm text-slate-400">{title}</div>
    </div>
);
