"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Users, ShoppingBag, ShieldCheck, BarChart3, Search, MoreVertical, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPanel() {
    const stats = [
        { label: "کل کاربران", value: "۴,۵۸۰", icon: <Users size={20} />, color: "text-blue-400" },
        { label: "اشتراک‌های فعال", value: "۱,۲۴۰", icon: <ShieldCheck size={20} />, color: "text-blue-500" },
        { label: "درآمد ماهانه", value: "۱۸۰,۰۰۰,۰۰۰", icon: <ShoppingBag size={20} />, color: "text-blue-600" },
        { label: "بازدید امروز", value: "+۱۲,۰۰۰", icon: <BarChart3 size={20} />, color: "text-blue-400" },
    ];

    const recentUsers = [
        { id: 1, name: "Ali_Crystal", email: "ali@example.com", subscription: "طلایی", status: "آنلاین" },
        { id: 2, name: "Reza_RP", email: "reza@example.com", subscription: "نقره‌ای", status: "آفلاین" },
        { id: 3, name: "Sana_Player", email: "sana@example.com", subscription: "الماس", status: "آنلاین" },
    ];

    return (
        <main className="min-h-screen pb-32">
            <Navbar />

            <div className="pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">پنل مدیریت</h1>
                        <p className="text-slate-500 text-sm font-medium">تجزیه و تحلیل و مدیریت متمرکز سرور کریستال</p>
                    </div>
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-primary transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="جستجو در بین کاربران..."
                            className="w-full premium-border rounded-2xl py-4 pr-14 pl-6 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="premium-border p-8 rounded-[2.5rem]"
                        >
                            <div className={`p-4 rounded-2xl bg-white/5 w-fit mb-6 ${s.color}`}>
                                {s.icon}
                            </div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{s.label}</p>
                            <p className="text-2xl font-black text-white tracking-tight">{s.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* User Management Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="premium-border rounded-[3rem] overflow-hidden"
                >
                    <div className="p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                        <h3 className="font-black text-xl text-white tracking-tight uppercase">مدیریت کاربران</h3>
                        <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                            Latest First <ChevronDown size={16} />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead>
                                <tr className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] border-b border-white/5 bg-white/[0.01]">
                                    <th className="px-10 py-6 font-medium">نام کاربری</th>
                                    <th className="px-10 py-6 font-medium">ایمیل</th>
                                    <th className="px-10 py-6 font-medium text-center">نوع اشتراک</th>
                                    <th className="px-10 py-6 font-medium">وضعیت</th>
                                    <th className="px-10 py-6 font-medium"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/[0.03] transition-colors group">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <span className="font-bold text-white group-hover:text-primary transition-colors">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8 text-slate-500 text-sm font-medium">{user.email}</td>
                                        <td className="px-10 py-8 text-center">
                                            <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider ${user.subscription === "الماس" ? "bg-blue-600/10 text-blue-400 border border-blue-500/20" :
                                                    user.subscription === "طلایی" ? "bg-blue-500/10 text-blue-300 border border-blue-400/20" :
                                                        "bg-slate-500/10 text-slate-400 border border-slate-500/20"
                                                }`}>
                                                {user.subscription}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8 text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${user.status === "آنلاین" ? "bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-slate-700"}`} />
                                                <span className={`font-bold text-xs ${user.status === "آنلاین" ? "text-slate-200" : "text-slate-600"}`}>{user.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <button className="p-2 text-slate-700 hover:text-white transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-8 bg-white/[0.01] border-t border-white/5 text-center">
                        <button className="text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">مشاهده تمامی اطلاعات کاربران</button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
