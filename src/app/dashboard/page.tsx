"use client";

import { Navbar } from "@/components/layout/Navbar";
import { useSession } from "next-auth/react";
import { User, CreditCard, Clock, Settings, Gamepad2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
    const { data: session } = useSession();

    // Mock data for demonstration
    const userData = {
        characterName: "Pouya_Crystal",
        level: 24,
        balance: "1,250,000",
        subscriptionStatus: "فعال (طلایی)",
        expiresIn: "۱۲ روز باقی‌مانده",
    };

    return (
        <main className="min-h-screen pb-32">
            <Navbar />

            <div className="pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="md:col-span-1 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glare-effect premium-border p-8 rounded-[2.5rem] text-center"
                        >
                            <div className="w-24 h-24 bg-[#011f4b]/20 rounded-[2rem] mx-auto mb-6 flex items-center justify-center border border-[#005eb8]/20">
                                <User size={40} className="text-[#005eb8]" />
                            </div>
                            <h3 className="font-black text-xl text-white mb-2">{session?.user?.name || "کاربر مهمان"}</h3>
                            <p className="text-slate-500 text-xs font-medium">{session?.user?.email || ""}</p>
                        </motion.div>

                        <motion.nav
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glare-effect premium-border rounded-[2.5rem] overflow-hidden"
                        >
                            <DashboardNavItem icon={<Gamepad2 size={18} />} label="اطلاعات کاراکتر" active />
                            <DashboardNavItem icon={<CreditCard size={18} />} label="تراکنش‌ها" />
                            <DashboardNavItem icon={<Clock size={18} />} label="تاریخچه فعالیت" />
                            <DashboardNavItem icon={<Settings size={18} />} label="تنظیمات" />
                        </motion.nav>
                    </aside>

                    {/* Main Content */}
                    <section className="md:col-span-3 space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <StatusCard title="نام کاراکتر" value={userData.characterName} icon={<User className="text-[#005eb8]" size={20} />} />
                            <StatusCard title="موجودی حساب" value={userData.balance} icon={<CreditCard className="text-[#003d82]" size={20} />} />
                            <StatusCard title="وضعیت اشتراک" value={userData.subscriptionStatus} icon={<Clock className="text-[#011f4b]" size={20} />} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glare-effect premium-border p-10 rounded-[3rem]"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-2xl font-black text-white tracking-tight">فعالیت‌های اخیر</h3>
                                <button className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">View All</button>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: -10 }}
                                        className="glare-effect flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#011f4b]/30 hover:bg-white/[0.04] transition-all"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="p-4 bg-[#011f4b]/20 rounded-2xl border border-[#005eb8]/20">
                                                <Gamepad2 size={24} className="text-[#005eb8]" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white mb-1 leading-none">ورود به سرور کریستال</p>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">امروز - ۱۲:۳۰ • IP: 192.168.1.1</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={18} className="text-slate-700" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                </div>
            </div>
        </main>
    );
}

const DashboardNavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
    <button className={`w-full flex items-center justify-between px-8 py-5 text-sm transition-all group ${active ? "bg-[#011f4b]/20 text-[#005eb8] border-r-4 border-[#005eb8]" : "text-slate-500 hover:text-white hover:bg-white/5"
        }`}>
        <div className="flex items-center gap-4">
            <span className={active ? "text-[#005eb8]" : "text-slate-500 group-hover:text-[#005eb8] transition-colors"}>{icon}</span>
            <span className="font-bold">{label}</span>
        </div>
        {active && <div className="w-1.5 h-1.5 rounded-full bg-[#005eb8] shadow-lg shadow-[#005eb8]/50" />}
    </button>
);

const StatusCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glare-effect premium-border p-8 rounded-[2.5rem] hover:border-[#011f4b]/30"
    >
        <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{title}</span>
            <div className="p-3 bg-white/5 rounded-xl">
                {icon}
            </div>
        </div>
        <div className="text-2xl font-black text-white tracking-tight">{value}</div>
    </motion.div>
);
