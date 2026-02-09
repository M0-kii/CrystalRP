"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const newsItems = [
    {
        id: 1,
        title: "آپدیت جدید سیستم گنگ",
        date: "۱۵ بهمن ۱۴۰۳",
        content: "سیستم گنگ با امکانات جدید و هیجان‌انگیز به‌روزرسانی شد. حالا می‌توانید قلمرو خود را گسترش دهید، با گنگ‌های دیگر وارد جنگ شوید و با سیستم رتبه‌بندی جدید، قدرت خود را به رخ بکشید.",
        tag: "به‌روزرسانی",
        image: "/news/gang-update.jpg"
    },
    {
        id: 2,
        title: "رویداد ویژه آخر هفته",
        date: "۱۲ بهمن ۱۴۰۳",
        content: "رویداد ویژه با جوایز نقدی و اشتراک رایگان برای برندگان. شنبه ساعت ۲۰ شروع می‌شود. در این رویداد می‌توانید با شرکت در چالش‌های مختلف، جوایز ارزشمندی کسب کنید.",
        tag: "رویداد",
        image: "/news/weekend-event.jpg"
    },
    {
        id: 3,
        title: "افزایش ظرفیت سرور",
        date: "۸ بهمن ۱۴۰۳",
        content: "با توجه به استقبال شما، ظرفیت سرور به ۱۲۸ نفر افزایش یافت. تجربه‌ای روان‌تر در انتظار شماست. سرورهای جدید با قدرت بیشتر و تاخیر کمتر راه‌اندازی شده‌اند.",
        tag: "اطلاعیه",
        image: "/news/server-upgrade.jpg"
    },
    {
        id: 4,
        title: "سیستم اقتصادی جدید",
        date: "۳ بهمن ۱۴۰۳",
        content: "سیستم اقتصادی کاملاً بازنویسی شده و با امکانات جدید عرضه شد. بازار سهام، سیستم بانکی پیشرفته و مشاغل جدید در انتظار شماست.",
        tag: "به‌روزرسانی",
        image: "/news/economy.jpg"
    }
];

export const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % newsItems.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-black text-white mb-6 tracking-tight">آخرین اخبار</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        جدیدترین به‌روزرسانی‌ها و رویدادهای سرور
                    </p>
                </motion.div>

                <div className="flex gap-8 items-center">
                    {/* Main News Card */}
                    <div className="flex-1 relative overflow-hidden ios-radius-xl" style={{ height: '500px' }}>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 glare-effect premium-border ios-radius-xl p-12 flex flex-col justify-between"
                            >
                                {/* Tag and Date */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-5 py-2 bg-blue-600/10 text-blue-400 text-xs font-black uppercase tracking-wider ios-radius border border-blue-500/20">
                                        {newsItems[currentIndex].tag}
                                    </span>
                                    <span className="text-slate-600 text-sm font-bold">
                                        {newsItems[currentIndex].date}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <h3 className="text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                        {newsItems[currentIndex].title}
                                    </h3>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                        {newsItems[currentIndex].content}
                                    </p>
                                </div>

                                {/* Read More Button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="self-start flex items-center gap-3 text-blue-400 font-black text-lg group"
                                >
                                    ادامه مطلب
                                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex flex-col gap-4">
                        {newsItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ios-radius ${index === currentIndex
                                        ? 'w-3 h-12 bg-blue-500 shadow-lg shadow-blue-500/50'
                                        : 'w-3 h-3 bg-zinc-700 hover:bg-zinc-600'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
