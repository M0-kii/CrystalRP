"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Gallery } from "@/components/home/Gallery";
import { Shield, Users, Terminal, MessageCircle, Send, Instagram, Youtube, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-black mb-6 text-white tracking-tight">چرا کریستال آرپی؟</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">قابلیت‌هایی که ما را از دیگران متمایز می‌کند</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield size={28} className="text-blue-400" />}
              title="امنیت و پایداری"
              desc="استفاده از آنتی‌چیت اختصاصی و سرورهای قدرتمند برای تضمین تجربه روان."
            />
            <FeatureCard
              icon={<Users size={28} className="text-blue-400" />}
              title="جامعه بالغ"
              desc="میزبانی از برترین پلیرهای ایران در فضایی کاملاً رول‌پلی و جدی."
            />
            <FeatureCard
              icon={<Terminal size={28} className="text-blue-400" />}
              title="اسکریپت‌های مدرن"
              desc="سیستم‌های منحصر به فرد که مشابه آن‌ها را در هیچ سرور دیگری نخواهید یافت."
            />
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">تریلر سرور</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              نگاهی به دنیای کریستال آرپی
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="glare-effect premium-border ios-radius-xl overflow-hidden aspect-video bg-zinc-900 relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto w-20 h-20 bg-blue-600 ios-radius flex items-center justify-center mb-4 cursor-pointer shadow-2xl shadow-blue-600/50 border border-blue-500/30"
                  >
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </motion.div>
                  <p className="text-slate-500 text-sm font-bold">
                    برای مشاهده تریلر، ویدیو را در پوشه public قرار دهید
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
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

          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard
              title="آپدیت جدید سیستم گنگ"
              date="۱۵ بهمن ۱۴۰۳"
              excerpt="سیستم گنگ با امکانات جدید و هیجان‌انگیز به‌روزرسانی شد. حالا می‌توانید قلمرو خود را گسترش دهید."
              tag="به‌روزرسانی"
            />
            <NewsCard
              title="رویداد ویژه آخر هفته"
              date="۱۲ بهمن ۱۴۰۳"
              excerpt="رویداد ویژه با جوایز نقدی و اشتراک رایگان برای برندگان. شنبه ساعت ۲۰ شروع می‌شود."
              tag="رویداد"
            />
            <NewsCard
              title="افزایش ظرفیت سرور"
              date="۸ بهمن ۱۴۰۳"
              excerpt="با توجه به استقبال شما، ظرفیت سرور به ۱۲۸ نفر افزایش یافت. تجربه‌ای روان‌تر در انتظار شماست."
              tag="اطلاعیه"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="relative py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-black text-white mb-2">CrystalRP</h3>
              <p className="text-slate-600 text-sm">بهترین تجربه رول‌پلی در ایران</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://discord.gg/crystalrp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900/50 hover:bg-blue-600/20 ios-radius border border-zinc-800 hover:border-blue-500/30 transition-all group"
                aria-label="Discord"
              >
                <MessageCircle size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/crystalrp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900/50 hover:bg-blue-600/20 ios-radius border border-zinc-800 hover:border-blue-500/30 transition-all group"
                aria-label="Telegram"
              >
                <Send size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/crystalrp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900/50 hover:bg-pink-600/20 ios-radius border border-zinc-800 hover:border-pink-500/30 transition-all group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-slate-400 group-hover:text-pink-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtube.com/@crystalrp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900/50 hover:bg-red-600/20 ios-radius border border-zinc-800 hover:border-red-500/30 transition-all group"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-slate-400 group-hover:text-red-400 transition-colors" />
              </motion.a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-xs font-medium">
                © 2024 CrystalRP. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="glare-effect premium-border ios-radius-xl p-10 group hover:border-blue-500/20"
  >
    <div className="p-5 bg-blue-600/10 ios-radius w-fit mb-8 group-hover:bg-blue-600/20 transition-colors border border-blue-500/10">
      {icon}
    </div>
    <h3 className="text-xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const NewsCard = ({ title, date, excerpt, tag }: { title: string; date: string; excerpt: string; tag: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="glare-effect premium-border ios-radius-xl p-8 group hover:border-blue-500/20"
  >
    <div className="flex items-center justify-between mb-6">
      <span className="px-4 py-2 bg-blue-600/10 text-blue-400 text-xs font-black uppercase tracking-wider ios-radius border border-blue-500/20">
        {tag}
      </span>
      <span className="text-slate-600 text-xs font-bold">{date}</span>
    </div>
    <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed text-sm">{excerpt}</p>
    <motion.button
      whileHover={{ x: 5 }}
      className="mt-6 text-blue-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
    >
      ادامه مطلب
      <span>←</span>
    </motion.button>
  </motion.div>
);
