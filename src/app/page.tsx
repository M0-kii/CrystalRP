"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Gallery } from "@/components/home/Gallery";
import { ServerStatus } from "@/components/widgets/ServerStatus";
import { Shield, Users, Terminal, MessageCircle, Send, Instagram, Youtube } from "lucide-react";
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

      {/* Server Status & Gallery */}
      <section className="py-32 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-32">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black text-white mb-4 tracking-tight">آماده برای شروع؟</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  به جمع هزاران بازیکن فعال بپیوندید و تجربه‌ای بی‌نظیر از رول‌پلی را آغاز کنید.
                </p>
              </motion.div>
            </div>
            <div className="flex items-start justify-center lg:justify-end">
              <ServerStatus />
            </div>
          </div>

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
