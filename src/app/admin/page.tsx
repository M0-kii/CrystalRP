"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Users, ShoppingBag, ShieldCheck, BarChart3, Search, MoreVertical } from "lucide-react";

export default function AdminPanel() {
    const stats = [
        { label: "کل کاربران", value: "۴,۵۸۰", icon: <Users size={20} />, color: "text-blue-400" },
        { label: "اشتراک‌های فعال", value: "۱,۲۴۰", icon: <ShieldCheck size={20} />, color: "text-green-400" },
        { label: "درآمد ماهانه", value: "۱۸۰,۰۰۰,۰۰۰", icon: <ShoppingBag size={20} />, color: "text-purple-400" },
        { label: "بازدید امروز", value: "+۱۲,۰۰۰", icon: <BarChart3 size={20} />, color: "text-amber-400" },
    ];

    const recentUsers = [
        { id: 1, name: "Ali_Crystal", email: "ali@example.com", subscription: "طلایی", status: "آنلاین" },
        { id: 2, name: "Reza_RP", email: "reza@example.com", subscription: "نقره‌ای", status: "آفلاین" },
        { id: 3, name: "Sana_Player", email: "sana@example.com", subscription: "الماس", status: "آنلاین" },
    ];

    return (
        <main className="min-h-screen pb-20">
            <Navbar />

            <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-black gradient-text">پنل مدیریت</h1>
                        <p className="text-slate-400 text-sm">به بخش مدیریت کریستال آرپی خوش آمدید.</p>
                    </div>
                    <div className="relative">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="جستجو در کاربران..."
                            className="glass rounded-2xl py-3 pr-12 pl-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((s, i) => (
                        <div key={i} className="glass p-6 rounded-3xl border-white/5">
                            <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-4 ${s.color}`}>
                                {s.icon}
                            </div>
                            <p className="text-xs text-slate-400 mb-1">{s.label}</p>
                            <p className="text-xl font-black">{s.value}</p>
                        </div>
                    ))}
                </div>

                {/* User Management Table */}
                <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
                    <div className="p-8 border-b border-white/5 flex items-center justify-between">
                        <h3 className="font-bold">مدیریت کاربران اخیر</h3>
                        <button className="text-primary text-sm font-medium">مشاهده همه</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead>
                                <tr className="text-slate-500 text-sm border-b border-white/5">
                                    <th className="px-8 py-4 font-medium">کاربر</th>
                                    <th className="px-8 py-4 font-medium">ایمیل</th>
                                    <th className="px-8 py-4 font-medium">نوع اشتراک</th>
                                    <th className="px-8 py-4 font-medium">وضعیت</th>
                                    <th className="px-8 py-4 font-medium"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-8 py-6 font-bold text-sm">{user.name}</td>
                                        <td className="px-8 py-6 text-slate-400 text-sm">{user.email}</td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${user.subscription === "الماس" ? "bg-cyan-500/10 text-cyan-400" :
                                                    user.subscription === "طلایی" ? "bg-amber-500/10 text-amber-400" :
                                                        "bg-slate-500/10 text-slate-400"
                                                }`}>
                                                {user.subscription}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${user.status === "آنلاین" ? "bg-green-500" : "bg-red-500"}`} />
                                                {user.status}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <button className="text-slate-500 hover:text-white">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
