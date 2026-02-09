"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Wifi, Clock } from "lucide-react";

interface ServerStatus {
    online: boolean;
    playerCount: number;
    maxPlayers: number;
    lastUpdated: string;
}

export const ServerStatus = () => {
    const [status, setStatus] = useState<ServerStatus>({
        online: true,
        playerCount: 0,
        maxPlayers: 128,
        lastUpdated: new Date().toISOString(),
    });

    useEffect(() => {
        // Fetch server status from backend API
        const fetchStatus = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/server-status');
                if (response.ok) {
                    const data = await response.json();
                    setStatus(data);
                } else {
                    // Mock data if backend is not running
                    setStatus({
                        online: true,
                        playerCount: Math.floor(Math.random() * 80) + 20,
                        maxPlayers: 128,
                        lastUpdated: new Date().toISOString(),
                    });
                }
            } catch (error) {
                // Mock data on error
                setStatus({
                    online: true,
                    playerCount: Math.floor(Math.random() * 80) + 20,
                    maxPlayers: 128,
                    lastUpdated: new Date().toISOString(),
                });
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 30000); // Update every 30 seconds

        return () => clearInterval(interval);
    }, []);

    const percentage = (status.playerCount / status.maxPlayers) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glare-effect premium-border ios-radius-xl p-8 max-w-md"
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-white">وضعیت سرور</h3>
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50' : 'bg-red-500'}`} />
                    <span className={`text-sm font-bold ${status.online ? 'text-green-400' : 'text-red-400'}`}>
                        {status.online ? 'آنلاین' : 'آفلاین'}
                    </span>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-600/20 ios-radius border border-blue-500/20">
                            <Users size={20} className="text-blue-400" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">بازیکنان آنلاین</p>
                            <p className="text-2xl font-black text-white">{status.playerCount}</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-slate-500 font-bold">ظرفیت</p>
                        <p className="text-lg font-bold text-slate-400">{status.maxPlayers}</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-500">میزان پری</span>
                        <span className="text-blue-400">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 ios-radius overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-l from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 pt-4 border-t border-zinc-800">
                    <Clock size={14} />
                    <span>آخرین بروزرسانی: {new Date(status.lastUpdated).toLocaleTimeString('fa-IR')}</span>
                </div>
            </div>
        </motion.div>
    );
};
