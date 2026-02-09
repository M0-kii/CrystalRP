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
            icon: <Scale className="text-blue-400" />,
            rules: [
                "رعایت قوانین Metagaming و Powergaming الزامی است.",
                "Deathmatch (DM) بدون دلیل موجه ممنوع است.",
                "استفاده از وویس چت برای موارد غیر رول‌پلی ممنوع است.",
                "خروج از بازی در هنگام صحنه‌های رول‌پلی (Combat Log) ممنوع است."
            ]
        },
        {
            title: "تخلفات و مجازات‌ها",
            icon: <AlertTriangle className="text-blue-400" />,
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
                    <h1 className="text-6xl md:text-7xl font-black mb-6 text-white tracking-tight">قوانین و مقررات</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
                        برای حفظ نظم و صمیمیت در جامعه کریستال، مطالعه و رعایت تمامی بندهای زیر الزامی است.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glare-effect premium-border ios-radius-xl p-10 flex flex-col gap-8 hover:border-blue-500/20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-5 bg-blue-600/10 ios-radius hover:bg-blue-600/20 transition-colors border border-blue-500/10">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white tracking-tight">{cat.title}</h3>
                            </div>
                            <ul className="space-y-5">
                                {cat.rules.map((rule, ridx) => (
                                    <li key={ridx} className="flex gap-4 text-slate-400 leading-relaxed group">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-150 transition-transform shadow-lg shadow-blue-500/50" />
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
                    viewport={{ once: true }}
                    className="glare-effect mt-20 glass ios-radius-xl p-12 text-center border-dashed border-blue-500/20"
                >
                    <Gavel className="mx-auto mb-6 text-slate-500" size={40} />
                    <p className="text-slate-400 max-w-3xl mx-auto leading-loose text-lg">
                        تراکنش‌های مالی و حمایت‌ها صرفاً جهت پایداری سرور بوده و تحت هیچ شرایطی
                        تبصره‌ای برای دور زدن قوانین یا دریافت مصونیت نخواهد بود.
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
