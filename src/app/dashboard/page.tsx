"use client";

import { Navbar } from "@/components/layout/Navbar";
import { useSession } from "next-auth/react";
import { User, CreditCard, Clock, Settings, Gamepad2, LogOut } from "lucide-react";

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
        <main className="min-h-screen pb-20">
            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="md:col-span-1 space-y-4">
                        <div className="glass p-6 rounded-3xl text-center border-white/5">
                            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <User size={40} className="text-primary" />
                            </div>
                            <h3 className="font-bold text-lg">{session?.user?.name || "کاربر مهمان"}</h3>
                            <p className="text-slate-400 text-sm">{session?.user?.email || ""}</p>
                        </div>

                        <nav className="glass rounded-3xl overflow-hidden border-white/5">
                            <DashboardNavItem icon={<Gamepad2 size={18} />} label="اطلاعات کاراکتر" active />
                            <DashboardNavItem icon={<CreditCard size={18} />} label="تراکنش‌ها" />
                            <DashboardNavItem icon={<Clock size={18} />} label="تاریخچه فعالیت" />
                            <DashboardNavItem icon={<Settings size={18} />} label="تنظیمات" />
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <section className="md:col-span-3 space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <StatusCard title="نام کاراکتر" value={userData.characterName} icon={<User className="text-blue-400" />} />
                            <StatusCard title="موجودی حساب" value={userData.balance} icon={<CreditCard className="text-green-400" />} />
                            <StatusCard title="وضعیت اشتراک" value={userData.subscriptionStatus} icon={<Clock className="text-purple-400" />} />
                        </div>

                        <div className="glass p-8 rounded-3xl border-white/5">
                            <h3 className="text-xl font-bold mb-6">فعالیت‌های اخیر</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/10 rounded-xl">
                                                <Gamepad2 size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">ورود به سرور</p>
                                                <p className="text-xs text-slate-500">امروز - ۱۲:۳۰</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400">IP: 192.168.1.1</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

const DashboardNavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
    <button className={`w-full flex items-center gap-3 px-6 py-4 text-sm transition-colors ${active ? "bg-primary/10 text-primary border-r-4 border-primary" : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}>
        {icon}
        {label}
    </button>
);

const StatusCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => (
    <div className="glass p-6 rounded-3xl border-white/5">
        <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-400">{title}</span>
            {icon}
        </div>
        <div className="text-xl font-black">{value}</div>
    </div>
);
