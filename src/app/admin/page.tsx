"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Newspaper,
    Image as ImageIcon,
    Star,
    Video,
    Users,
    LayoutDashboard,
    Plus,
    Edit,
    Trash2
} from "lucide-react";

export default function AdminPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const [stats, setStats] = useState({
        news: 0,
        gallery: 0,
        features: 0,
        users: 0
    });

    useEffect(() => {
        if (!isLoading && (!user || user.role !== 'ADMIN')) {
            router.push('/');
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        // Fetch stats
        const fetchStats = async () => {
            try {
                const token = localStorage.getItem('token');
                const headers = { 'Authorization': `Bearer ${token}` };

                const [newsRes, galleryRes, featuresRes, usersRes] = await Promise.all([
                    fetch('http://localhost:5000/api/news', { headers }),
                    fetch('http://localhost:5000/api/gallery', { headers }),
                    fetch('http://localhost:5000/api/features', { headers }),
                    fetch('http://localhost:5000/api/users', { headers })
                ]);

                const [news, gallery, features, users] = await Promise.all([
                    newsRes.json(),
                    galleryRes.json(),
                    featuresRes.json(),
                    usersRes.json()
                ]);

                setStats({
                    news: news.length || 0,
                    gallery: gallery.length || 0,
                    features: features.length || 0,
                    users: users.length || 0
                });
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            }
        };

        if (user?.role === 'ADMIN') {
            fetchStats();
        }
    }, [user]);

    if (isLoading || !user || user.role !== 'ADMIN') {
        return null;
    }

    const sections = [
        {
            title: "مدیریت اخبار",
            description: "ایجاد، ویرایش و حذف اخبار سرور",
            icon: <Newspaper size={32} className="text-blue-400" />,
            href: "/admin/news",
            count: stats.news,
            color: "blue"
        },
        {
            title: "مدیریت گالری",
            description: "مدیریت تصاویر و اسکرین‌شات‌ها",
            icon: <ImageIcon size={32} className="text-purple-400" />,
            href: "/admin/gallery",
            count: stats.gallery,
            color: "purple"
        },
        {
            title: "مدیریت ویژگی‌ها",
            description: "ویرایش ویژگی‌های سرور",
            icon: <Star size={32} className="text-yellow-400" />,
            href: "/admin/features",
            count: stats.features,
            color: "yellow"
        },
        {
            title: "مدیریت تریلر",
            description: "به‌روزرسانی ویدیو تریلر",
            icon: <Video size={32} className="text-red-400" />,
            href: "/admin/trailer",
            count: 1,
            color: "red"
        },
        {
            title: "مدیریت کاربران",
            description: "مشاهده و مدیریت کاربران",
            icon: <Users size={32} className="text-green-400" />,
            href: "/admin/users",
            count: stats.users,
            color: "green"
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-5xl font-black text-white mb-2 tracking-tight">پنل مدیریت</h1>
                        <p className="text-slate-500">مدیریت محتوای سایت کریستال آرپی</p>
                    </div>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold"
                    >
                        <LayoutDashboard size={18} />
                        بازگشت به سایت
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((section, idx) => (
                        <Link key={idx} href={section.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glare-effect premium-border ios-radius-xl p-8 group cursor-pointer hover:border-blue-500/30"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-4 bg-${section.color}-600/10 ios-radius border border-${section.color}-500/20`}>
                                        {section.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-4xl font-black text-white">{section.count}</p>
                                        <p className="text-xs text-slate-600 font-bold uppercase tracking-wider">آیتم</p>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-slate-500 text-sm">{section.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
