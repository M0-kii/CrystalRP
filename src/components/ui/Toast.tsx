"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error("useToast must be used within ToastProvider");
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, type: ToastType = "info") => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 4000);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const getIcon = (type: ToastType) => {
        switch (type) {
            case "success":
                return <CheckCircle size={20} />;
            case "error":
                return <AlertCircle size={20} />;
            default:
                return <Info size={20} />;
        }
    };

    const getColors = (type: ToastType) => {
        switch (type) {
            case "success":
                return "bg-green-600/20 border-green-500/30 text-green-400";
            case "error":
                return "bg-red-600/20 border-red-500/30 text-red-400";
            default:
                return "bg-blue-600/20 border-blue-500/30 text-blue-400";
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-8 left-8 z-50 space-y-4 max-w-md">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className={`glare-effect flex items-center gap-4 p-4 ios-radius-lg border ${getColors(toast.type)} backdrop-blur-xl`}
                        >
                            {getIcon(toast.type)}
                            <p className="flex-1 font-bold text-sm text-white">{toast.message}</p>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};
