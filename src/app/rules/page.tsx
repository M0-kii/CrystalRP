"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Shield, Scale, AlertTriangle, Gavel } from "lucide-react";
import { motion } from "framer-motion";

export default function RulesPage() {
    const categories = [
        {
            title: "قوانین عمومی",
            icon: <Shield className="text-blue-400" />,
            rules: [
                "احترام به تمامی بازیکنان و کارکنان سرور الزامی است.",
                "استفاده از هرگونه چیت، اسکریپت یا برنامه‌های کمکی ممنوع است.",
                "توهین، فحاشی و رفتارهای نژادپرستانه به شدت برخورد می‌شود.",
                "تبلیغ سایر سرورها یا گروه‌ها ممنوع است."
            ]
        },
        {
            title: "قوانین رول‌پلی (RP)",
            icon: <Scale className="text-blue-500" />,
            rules: [
                "رعایت قوانین Metagaming و Powergaming الزامی است.",
                "Deathmatch (DM) بدون دلیل موجه ممنوع است.",
                "استفاده از وویس چت برای موارد غیر رول‌پلی ممنوع است.",
                "خروج از بازی در هنگام صحنه‌های رول‌پلی (Combat Log) ممنوع است."
            ]
        },
        {
            title: "تخلفات و مجازات‌ها",
            icon: <AlertTriangle className="text-blue-600" />,
            rules: [
                "تخلفات سطح ۱: اخطار شفاهی یا کیک از سرور.",
                "تخلفات سطح ۲: بن موقت (از ۱ تا ۷ روز).",
                "تخلفات سطح ۳: بن دائم از تمامی خدمات سرور.",
                "در صورت مشاهده تخلف، از طریق تیکت دیسکورد گزارش دهید."
            ]
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
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">قوانین و مقررات</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        برای حفظ نظم و صمیمیت در جامعه کریستال، مطالعه و رعایت تمامی بندهای زیر الزامی است.
                        عدم اطلاع از قوانین به منزله عدم اجرای آن‌ها نیست.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-border p-10 rounded-[2.5rem] flex flex-col gap-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                            </div>
                            <ul className="space-y-5">
                                {cat.rules.map((rule, ridx) => (
                                    <li key={ridx} className="flex gap-4 text-slate-400 text-sm leading-relaxed group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 glass p-10 rounded-[2.5rem] text-center border-dashed border-white/5"
                >
                    <Gavel className="mx-auto mb-6 text-slate-500" size={32} />
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-loose">
                        تراکنش‌های مالی و حمایت‌ها صرفاً جهت پایداری سرور بوده و تحت هیچ شرایطی
                        تبصره‌ای برای دور زدن قوانین یا دریافت مصونیت نخواهد بود.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
