import { Navbar } from "@/components/layout/Navbar";
import { Shield, Gavel, Scale, AlertTriangle } from "lucide-react";

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
            icon: <Scale className="text-purple-400" />,
            rules: [
                "رعایت قوانین Metagaming و Powergaming الزامی است.",
                "Deathmatch (DM) بدون دلیل موجه ممنوع است.",
                "استفاده از وویس چت برای موارد غیر رول‌پلی ممنوع است.",
                "خروج از بازی در هنگام صحنه‌های رول‌پلی (Combat Log) ممنوع است."
            ]
        },
        {
            title: "تخلفات و مجازات‌ها",
            icon: <AlertTriangle className="text-amber-400" />,
            rules: [
                "تخلفات سطح ۱: اخطار شفاهی یا کیک از سرور.",
                "تخلفات سطح ۲: بن موقت (از ۱ تا ۷ روز).",
                "تخلفات سطح ۳: بن دائم از تمامی خدمات سرور.",
                "در صورت مشاهده تخلف، از طریق تیکت دیسکورد گزارش دهید."
            ]
        }
    ];

    return (
        <main className="min-h-screen pb-20">
            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">قوانین و مقررات</h1>
                    <p className="text-slate-400">برای داشتن تجربه‌ای بهتر، مطالعه و رعایت قوانین الزامی است.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="glass p-8 rounded-3xl border border-white/5 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-2xl">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold">{cat.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {cat.rules.map((rule, ridx) => (
                                    <li key={ridx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                                        <span className="text-primary mt-1">•</span>
                                        {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 glass p-8 rounded-3xl text-center border-dashed border-primary/30">
                    <Gavel className="mx-auto mb-4 text-primary" size={32} />
                    <p className="text-slate-300">
                        تراکنش‌های مالی و حمایت‌ها صرفاً جهت پایداری سرور بوده و تبصره‌ای برای دور زدن قوانین نیست.
                    </p>
                </div>
            </div>
        </main>
    );
}
