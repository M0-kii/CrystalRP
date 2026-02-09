"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Check, Star, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function StorePage() {
    const tiers = [
        {
            name: "نقره‌ای",
            price: "۱۵۰,۰۰۰",
            icon: <Star className="text-slate-400" />,
            features: [
                "دسترسی به سرور (اشتراک ماهیانه)",
                "پلاک اختصاصی نقره‌ای",
                "۱۵٪ شارژ کیف پول هدیه",
                "اولویت ورود معمولی"
            ],
            popular: false
        },
        {
            name: "طلایی",
            price: "۳۰۰,۰۰۰",
            icon: <Zap className="text-blue-400" />,
            features: [
                "تمامی امکانات اشتراک نقره‌ای",
                "ماشین اختصاصی لول ۱",
                "۳۰٪ شارژ کیف پول هدیه",
                "اولویت ورود بالا",
                "دسترسی به چت وی‌آی‌پی"
            ],
            popular: true
        },
        {
            name: "الماس",
            price: "۵۰۰,۰۰۰",
            icon: <Crown className="text-blue-600" />,
            features: [
                "تمامی امکانات اشتراک طلایی",
                "خانه اختصاصی (بیزنس)",
                "۵۰٪ شارژ کیف پول هدیه",
                "بدون صف ورود (Instant Join)",
                "تگ اختصاصی در دیسکورد"
            ],
            popular: false
        }
    ];

    return (
        <main className="min-h-screen pb-32">
            <Navbar />

            <div className="pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">حمایت از سرور</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        با تهیه اشتراک ویژه، علاوه بر دریافت امکانات منحصر به فرد، ما را در مسیر
                        بهبود و پایداری سرور یاری می‌کنید. تمامی حمایت‌ها مستقیم صرف هزینه‌های سرور می‌شود.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative premium-border p-10 rounded-[3rem] flex flex-col ${tier.popular ? "bg-blue-600/5 border-blue-500/30" : ""
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full tracking-[0.2em] shadow-xl shadow-primary/20">
                                    POPULAR
                                </div>
                            )}

                            <div className="bg-white/5 p-5 rounded-3xl w-fit mb-8">
                                {tier.icon}
                            </div>

                            <h3 className="text-3xl font-black mb-2 text-white">{tier.name}</h3>
                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-4xl font-black text-white">{tier.price}</span>
                                <span className="text-slate-500 text-xs font-bold">تومان / ماهانه</span>
                            </div>

                            <ul className="space-y-5 mb-12 flex-grow">
                                {tier.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex gap-4 text-slate-400 text-sm font-medium">
                                        <Check size={18} className="text-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-5 rounded-2xl font-black transition-all ${tier.popular
                                        ? "bg-primary text-white shadow-2xl shadow-primary/30"
                                        : "bg-white/5 text-white hover:bg-white/10"
                                    }`}
                            >
                                انتخاب اشتراک
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
