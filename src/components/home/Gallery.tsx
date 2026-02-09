"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const screenshots = [
    { id: 1, title: "محیط شهری", src: "/screenshots/city.jpg", alt: "نمای شهر در سرور" },
    { id: 2, title: "گشت پلیس", src: "/screenshots/police.jpg", alt: "گشت پلیس" },
    { id: 3, title: "مسابقات خیابانی", src: "/screenshots/race.jpg", alt: "مسابقات خیابانی" },
    { id: 4, title: "رول‌پلی گنگ", src: "/screenshots/gang.jpg", alt: "رول‌پلی گنگ" },
    { id: 5, title: "فروشگاه", src: "/screenshots/shop.jpg", alt: "فروشگاه داخل بازی" },
    { id: 6, title: "مکان‌های لوکس", src: "/screenshots/luxury.jpg", alt: "مکان‌های لوکس" },
];

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-black text-white mb-4 tracking-tight">گالری تصاویر</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        نگاهی به لحظات فراموش‌نشدنی بازیکنان در سرور کریستال
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {screenshots.map((screenshot, index) => (
                        <motion.div
                            key={screenshot.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedImage(screenshot.id)}
                            className="glare-effect premium-border ios-radius-xl overflow-hidden cursor-pointer group relative aspect-video"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform">
                                <h3 className="text-white font-black text-lg">{screenshot.title}</h3>
                            </div>
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                <div className="text-slate-600 text-sm font-bold">تصویر {screenshot.id}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 left-8 text-white hover:text-blue-400 transition-colors p-3 hover:bg-white/10 ios-radius"
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="max-w-6xl w-full aspect-video bg-zinc-900 ios-radius-xl overflow-hidden flex items-center justify-center"
                        >
                            <div className="text-slate-600 text-lg font-bold">
                                تصویر {selectedImage} - (برای نمایش واقعی، تصاویر را در پوشه public/screenshots قرار دهید)
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
