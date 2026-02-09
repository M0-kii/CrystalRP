"use client";

import { motion } from "framer-motion";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-zinc-800 border-t-blue-500 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
};
