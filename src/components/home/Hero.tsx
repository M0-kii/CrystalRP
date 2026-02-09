"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { signIn } from "next-auth/react";

export const Hero = () => {
    return (
        <div className="relative pt-48 pb-32 overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Unique background effects */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#011f4b]/20 rounded-full blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#005eb8]/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="glare-effect inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#011f4b]/30 text-slate-400 text-xs font-bold mb-8 hover:bg-white/10 transition-all cursor-default hover:border-[#005eb8]/50">
                        <span className="w-2 h-2 rounded-full bg-[#005eb8] animate-pulse shadow-[0_0_10px_rgba(0,94,184,0.5)]" />
                        بزرگترین سرور رول‌پلی ایران - نسخه ۴.۰
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight leading-[1.1]">
                        دنیای خود را در <br />
                        <span className="text-[#005eb8] italic relative">
                            CrystalRP
                            <span className="absolute -inset-1 bg-[#011f4b]/20 blur-xl -z-10"></span>
                        </span> بسازید
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        تجربه‌ای فراتر از واقعیت با اسکریپت‌های اختصاصی و جامعه‌ای صمیمی.
                        همین حالا به جمع هزاران بازیکن ما بپیوندید.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => signIn("discord")}
                            className="glare-effect bg-[#011f4b] text-white px-12 py-5 rounded-2xl font-black flex items-center gap-3 shadow-2xl shadow-[#011f4b]/40 hover:bg-[#003d82] transition-all w-full sm:w-80 justify-center border border-[#005eb8]/20"
                        >
                            ثبت نام
                        </motion.button>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-20 flex flex-col items-center gap-2 text-slate-500"
                >
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold">بیشتر بدانید</p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ChevronLeft className="-rotate-90" size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
