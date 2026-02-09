import { Navbar } from "@/components/layout/Navbar";
import { Check, Star, Zap, Crown } from "lucide-react";

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
            color: "from-slate-400 to-slate-600"
        },
        {
            name: "طلایی",
            price: "۳۰۰,۰۰۰",
            icon: <Zap className="text-amber-400" />,
            features: [
                "تمامی امکانات اشتراک نقره‌ای",
                "ماشین اختصاصی لول ۱",
                "۳۰٪ شارژ کیف پول هدیه",
                "اولویت ورود بالا",
                "دسترسی به چت وی‌آی‌پی"
            ],
            color: "from-amber-400 to-orange-600",
            recommended: true
        },
        {
            name: "الماس",
            price: "۵۰۰,۰۰۰",
            icon: <Crown className="text-cyan-400" />,
            features: [
                "تمامی امکانات اشتراک طلایی",
                "خانه اختصاصی (بیزنس)",
                "۵۰٪ شارژ کیف پول هدیه",
                "بدون صف ورود (Instant Join)",
                "تگ اختصاصی در دیسکورد"
            ],
            color: "from-cyan-400 to-blue-600"
        }
    ];

    return (
        <main className="min-h-screen pb-20">
            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text">فروشگاه کریستال</h1>
                    <p className="text-slate-400">با تهیه اشتراک، از سرور حمایت کنید و از مزایای ویژه بهره‌مند شوید.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative glass p-8 rounded-[2rem] border-white/5 flex flex-col overflow-hidden ${tier.recommended ? "ring-2 ring-primary border-transparent" : ""
                                }`}
                        >
                            {tier.recommended && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-xl tracking-wider">
                                    پیشنهادی
                                </div>
                            )}

                            <div className="bg-gradient-to-br p-4 rounded-2xl w-fit mb-6 bg-white/5">
                                {tier.icon}
                            </div>

                            <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-3xl font-black">{tier.price}</span>
                                <span className="text-slate-400 text-sm">تومان / ماهانه</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex gap-3 text-slate-300 text-sm">
                                        <Check size={18} className="text-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-xl ${tier.recommended
                                    ? "bg-primary text-white shadow-primary/20 hover:scale-[1.02]"
                                    : "glass text-white hover:bg-white/10"
                                }`}>
                                خرید اشتراک
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
