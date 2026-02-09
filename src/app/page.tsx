"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Shield, Users, Zap, Terminal, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black mb-4 text-white">چرا کریستال آرپی؟</h2>
            <p className="text-slate-500">قابلیت‌هایی که ما را از دیگران متمایز می‌کند</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield size={24} className="text-blue-400" />}
              title="امنیت و پایداری"
              desc="استفاده از آنتی‌چیت اختصاصی و سرورهای قدرتمند برای تضمین تجربه روان."
            />
            <FeatureCard
              icon={<Users size={24} className="text-blue-500" />}
              title="جامعه بالغ"
              desc="میزبانی از برترین پلیرهای ایران در فضایی کاملاً رول‌پلی و جدی."
            />
            <FeatureCard
              icon={<Terminal size={24} className="text-blue-600" />}
              title="اسکریپت‌های مدرن"
              desc="سیستم‌های منحصر به فرد که مشابه آن‌ها را در هیچ سرور دیگری نخواهید یافت."
            />
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="flex flex-col items-center md:items-start gap-6">
              <h2 className="text-3xl font-black text-white tracking-tighter">CrystalRP</h2>
              <p className="text-slate-500 text-sm max-w-sm text-center md:text-right leading-loose">
                ساخته شده با عشق برای جامعه فایوم ایران. <br />
                کیفیت و احترام، اولویت اصلی ماست.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-20">
              <div className="flex flex-col gap-5">
                <span className="text-white font-bold opacity-30 uppercase tracking-[0.2em] text-[10px]">Links</span>
                <Link href="/rules" className="text-slate-400 hover:text-white transition-colors font-medium">قوانین</Link>
                <Link href="/store" className="text-slate-400 hover:text-white transition-colors font-medium">فروشگاه</Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-white font-bold opacity-30 uppercase tracking-[0.2em] text-[10px]">Community</span>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-bold"
                  >
                    <MessageSquare size={18} className="text-blue-400" />
                    دیسکورد
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-bold"
                  >
                    <Send size={18} className="text-blue-500" />
                    تلگرام
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">© 2026 CrystalRP. All rights reserved.</p>
            <div className="flex items-center gap-1 text-slate-700 text-[10px] font-bold uppercase tracking-widest">
              <span>Handcrafted in</span>
              <span className="text-slate-500">Next.js & Tailwind</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string; desc: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 hover:bg-white/[0.04] transition-all group"
  >
    <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);
