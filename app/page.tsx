"use client";
import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    useSpring,
    useScroll,
    useMotionValueEvent
} from "framer-motion";
import {
    ArrowRight, Check, Clock, Smartphone,
    Globe, Shield, Plus, MapPin, BadgePercent,
    TrendingUp, Sparkles, Zap, Navigation,
    Calendar, CreditCard, ChevronRight, Star,
    Layers, Users, MessageSquare, BarChart3,
    Instagram, Music2, Linkedin
} from "lucide-react";

// =============================================================================
// COMPOSANTS ATOMIQES & HELPERS
// =============================================================================

const Reveal = ({ children, delay = 0, y = 20, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

const Badge = ({ children, color = "violet" }: { children: React.ReactNode, color?: "violet" | "emerald" | "amber" | "indigo" | "teal" | "pink" | "slate" | "red" }) => {
    const colors = {
        violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
        emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
        pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
        slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
        red: "bg-red-500/10 text-red-400 border-red-500/20",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${colors[color]} mb-6 inline-block`}>
            {children}
        </span>
    );
};

// =============================================================================
// MOCKUPS ÉCRANS IPHONE
// =============================================================================

// =============================================================================
// ÉCRANS MOTION DESIGN (DÉTAILLÉS)
// =============================================================================

// 1. SCÈNE : LE CHAOS (0-10%)
const MotionScreenChaos = ({ progress }: { progress: any }) => {
    // 8 Notifications pour un effet de masse
    const n1Op = useTransform(progress, [0, 0.02], [0, 1]);
    const n1Y = useTransform(progress, [0, 0.02], [30, 0]);

    const n2Op = useTransform(progress, [0.01, 0.03], [0, 1]);
    const n2Y = useTransform(progress, [0.01, 0.03], [30, 0]);

    const n3Op = useTransform(progress, [0.02, 0.04], [0, 1]);
    const n3Y = useTransform(progress, [0.02, 0.04], [30, 0]);

    const n4Op = useTransform(progress, [0.03, 0.05], [0, 1]);
    const n4Y = useTransform(progress, [0.03, 0.05], [30, 0]);

    const n5Op = useTransform(progress, [0.04, 0.06], [0, 1]);
    const n5Y = useTransform(progress, [0.04, 0.06], [30, 0]);

    const n6Op = useTransform(progress, [0.05, 0.07], [0, 1]);
    const n6Y = useTransform(progress, [0.05, 0.07], [30, 0]);

    const n7Op = useTransform(progress, [0.06, 0.08], [0, 1]);
    const n7Y = useTransform(progress, [0.06, 0.08], [30, 0]);

    const n8Op = useTransform(progress, [0.07, 0.10], [0, 1]);
    const n8Y = useTransform(progress, [0.07, 0.10], [30, 0]);

    const bgGlow = useTransform(progress, [0, 0.1], [0.3, 0.8]);

    return (
        <div className="h-full w-full bg-[#050507] p-4 flex flex-col relative overflow-hidden">
            <motion.div
                style={{ opacity: bgGlow }}
                className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-red-900/5 to-transparent"
            />

            <div className="pt-8 text-center mb-6">
                <div className="text-5xl font-light text-white/90 tabular-nums">09:41</div>
                <div className="text-[9px] font-bold text-white/40 tracking-[0.2em] mt-2 uppercase">Mardi 14 Janvier</div>
            </div>

            <div className="space-y-1 relative z-10">
                <motion.div style={{ opacity: n1Op, y: n1Y }} className="glass-dark p-2.5 rounded-xl border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">💬</span><span className="text-[7px] font-black text-white/40 uppercase tracking-widest">Messages</span></div><span className="text-[7px] text-white/30">Maintenant</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Marc B.</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Dispo demain ?</div>
                </motion.div>

                <motion.div style={{ opacity: n2Op, y: n2Y }} className="glass-dark p-2.5 rounded-xl border border-red-500/20 shadow-2xl ring-1 ring-red-500/10">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">📞</span><span className="text-[7px] font-black text-red-400 uppercase tracking-widest">Téléphone</span></div><span className="text-[7px] text-red-400 font-bold">URGENT</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Appel manqué (4)</div>
                    <div className="text-[10px] text-red-400/80 font-bold text-left italic">Dernière tentative à 09:38</div>
                </motion.div>

                <motion.div style={{ opacity: n3Op, y: n3Y }} className="glass-dark p-2.5 rounded-xl border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">💬</span><span className="text-[7px] font-black text-white/40 uppercase tracking-widest">WhatsApp</span></div><span className="text-[7px] text-white/30">2 min</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Julie L.</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">C'est combien le forfait SUV ?</div>
                </motion.div>

                <motion.div style={{ opacity: n4Op, y: n4Y }} className="glass-dark p-2.5 rounded-xl border border-red-500/20 shadow-2xl">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">📞</span><span className="text-[7px] font-black text-red-400 uppercase tracking-widest">Téléphone</span></div><span className="text-[7px] text-white/30">5 min</span></div>
                    <div className="text-[10px] font-bold text-white text-left">06 42 21 00 XXX</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Appel manqué</div>
                </motion.div>

                <motion.div style={{ opacity: n5Op, y: n5Y }} className="glass-dark p-2.5 rounded-xl border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">💬</span><span className="text-[7px] font-black text-white/40 uppercase tracking-widest">Messages</span></div><span className="text-[7px] text-white/30">12 min</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Karim V.</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Vous êtes où ?? Je vous attend...</div>
                </motion.div>

                <motion.div style={{ opacity: n6Op, y: n6Y }} className="glass-dark p-2.5 rounded-xl border border-white/5 shadow-2xl translate-x-2">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">💬</span><span className="text-[7px] font-black text-white/40 uppercase tracking-widest">WhatsApp</span></div><span className="text-[7px] text-white/30">15 min</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Lucas Pro</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Facture reçue ?</div>
                </motion.div>

                <motion.div style={{ opacity: n7Op, y: n7Y }} className="glass-dark p-2.5 rounded-xl border border-red-500/20 shadow-2xl -translate-x-2">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">📞</span><span className="text-[7px] font-black text-red-400 uppercase tracking-widest">Téléphone</span></div><span className="text-[7px] text-red-300">URGENT</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Maman</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Appel manqué (2)</div>
                </motion.div>

                <motion.div style={{ opacity: n8Op, y: n8Y }} className="glass-dark p-2.5 rounded-xl border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-center mb-0.5"><div className="flex items-center gap-1"><span className="text-[10px]">💬</span><span className="text-[7px] font-black text-white/40 uppercase tracking-widest">Messages</span></div><span className="text-[7px] text-white/30">20 min</span></div>
                    <div className="text-[10px] font-bold text-white text-left">Inconnu</div>
                    <div className="text-[10px] text-white/60 leading-tight text-left">Demande de devis carrosserie</div>
                </motion.div>
            </div>
        </div>
    );
};


// 2. SCÈNE : CRÉATION (10-20%) - MARC (AUTO CLEAN)
const MotionScreenPageCreation = ({ progress }: { progress: any }) => {
    const i1Op = useTransform(progress, [0.10, 0.14], [0, 1]);
    const i2Op = useTransform(progress, [0.13, 0.17], [0, 1]);
    const i3Op = useTransform(progress, [0.16, 0.20], [0, 1]);

    return (
        <div className="h-full w-full bg-slate-50 p-5 flex flex-col pt-12">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-200 text-xl">🚗</div>
                <div className="text-left">
                    <div className="text-xs font-black text-slate-900 uppercase">CleanDar</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Auto Clean Pro (Marc)</div>
                </div>
            </div>
            <div className="space-y-3">
                <motion.div style={{ opacity: i1Op }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
                    <div className="text-left"><div className="text-[10px] font-black text-slate-900 leading-none">Nettoyage Intérieur</div><div className="text-[9px] text-slate-400 mt-1">60€ • 60 min</div></div>
                    <Check size={14} className="text-emerald-500" />
                </motion.div>
                <motion.div style={{ opacity: i2Op }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
                    <div className="text-left"><div className="text-[10px] font-black text-slate-900 leading-none">Lavage Extérieur</div><div className="text-[9px] text-slate-400 mt-1">40€ • 45 min</div></div>
                    <Check size={14} className="text-emerald-500" />
                </motion.div>
                <motion.div style={{ opacity: i3Op }} className="bg-white p-4 rounded-2xl border-violet-500 bg-violet-50/30 flex justify-between items-center border-2">
                    <div className="text-left"><div className="text-[10px] font-black text-slate-900 leading-none text-left">Polish Carrosserie</div><div className="text-[9px] text-slate-400 mt-1 text-left">120€ • 120 min</div></div>
                    <div className="w-4 h-4 rounded-full bg-violet-600 text-white flex items-center justify-center text-[8px]"><Check size={10} strokeWidth={4} /></div>
                </motion.div>
            </div>
        </div>
    );
};

// 3. SCÈNE : CLIENT BOOKING (20-29%) - ALEX (COACH)
const MotionScreenClientBooking = ({ progress }: { progress: any }) => {
    // Appearance: 0.20 -> 0.24
    const bookingOp = useTransform(progress, [0.20, 0.23], [0, 1]);
    const bookingY = useTransform(progress, [0.20, 0.23], [40, 0]);

    // Success State: 0.25 -> 0.29
    const successOp = useTransform(progress, [0.25, 0.28], [0, 1]);
    const successScale = useTransform(progress, [0.25, 0.28], [0.8, 1]);

    return (
        <div className="h-full w-full bg-slate-50 p-5 flex flex-col relative overflow-hidden">
            <motion.div style={{ opacity: bookingOp, y: bookingY }} className="w-full space-y-4 pt-10">
                <div className="text-left mb-6">
                    <div className="text-2xl font-black text-slate-900 leading-tight">Elite<br />Coaching.</div>
                    <div className="text-[11px] text-amber-600 font-black uppercase tracking-widest mt-1">Par Alex Coach</div>
                </div>

                <div className="space-y-2">
                    {[
                        { name: "Séance HIIT Solo", icon: "💪", price: "75€" },
                        { name: "Pack 10 Séances", icon: "🔥", price: "650€" }
                    ].map((s, i) => (
                        <div key={i} className={`p-4 rounded-[2rem] border-2 flex items-center justify-between ${i === 0 ? "border-amber-500 bg-white shadow-xl" : "border-slate-100 bg-white/50"}`}>
                            <div className="flex items-center gap-3 text-left">
                                <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-xl">{s.icon}</div>
                                <div>
                                    <div className="text-xs font-black text-slate-900">{s.name}</div>
                                    <div className="text-[10px] text-slate-400 font-bold">1 heure de training</div>
                                </div>
                            </div>
                            <div className="text-xs font-black text-amber-600">{s.price}</div>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <div className="w-full py-4 bg-slate-900 text-white rounded-[2rem] text-xs font-black uppercase tracking-widest shadow-2xl">
                        Réserver maintenant
                    </div>
                </div>
            </motion.div>

            <motion.div style={{ opacity: successOp, scale: successScale }} className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 z-20">
                <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <Check size={48} className="text-emerald-500" strokeWidth={4} />
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-2">Confirmé.</h4>
                <p className="text-sm text-slate-400 font-bold text-center">Acompte de 30€ encaissé.<br />Préparez-vous au training !</p>

                {/* Scroll hint to avoid 'blocked' feeling */}
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 text-[8px] font-black text-slate-300 uppercase tracking-widest"
                >
                    Continuez à scroller ↓
                </motion.div>
            </motion.div>
        </div>
    );
};

// 4. SCÈNE : PRO NOTIF (30-35%) - SARAH (BEAUTÉ)
const MotionScreenProNotif = ({ progress }: { progress: any }) => {
    const popY = useTransform(progress, [0.30, 0.34], [40, 0]);
    const popOp = useTransform(progress, [0.30, 0.34], [0, 1]);

    return (
        <div className="h-full w-full bg-[#050507] p-5 flex flex-col justify-center items-center relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(236,72,153,0.15)_0%,_transparent_70%)]" />
            <motion.div style={{ y: popY, opacity: popOp }} className="glass-dark p-4 rounded-3xl border border-white/10 shadow-2xl w-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl">💅</div>
                    <div><div className="text-xs font-black text-white leading-none">Nouvelle Résa !</div><div className="text-[9px] text-white/40 font-bold uppercase mt-1">Nails by Sarah</div></div>
                </div>
                <div className="space-y-1 mb-4">
                    <div className="text-xs font-black text-white">Léa M. - Demain 14:00</div>
                    <div className="text-[9px] text-white/60">Pose Gel + Nail Art • 15.00€ encaissés</div>
                </div>
                <div className="h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center text-[10px] font-black uppercase tracking-widest">Confirmer</div>
            </motion.div>
        </div>
    );
};

// 5. SCÈNE : MAP OPTIM (35-50%) - MARC (AUTO CLEAN)
const MotionScreenMapOptim = ({ progress }: { progress: any }) => {
    const pathLength = useTransform(progress, [0.35, 0.48], [0, 1]);
    const dotOp = useTransform(progress, [0.35, 0.38], [0, 1]);

    // Elite Timing: Stats appear much earlier (25% into path)
    const statsOp = useTransform(progress, [0.38, 0.42], [0, 1]);
    const statsY = useTransform(progress, [0.38, 0.42], [30, 0]);

    const savings = useTransform(progress, [0.40, 0.48], [12, 4.2]);
    const roundedSavings = useTransform(savings, v => v.toFixed(1));
    const percent = useTransform(progress, [0.40, 0.48], [0, 65]);
    const roundedPercent = useTransform(percent, v => Math.round(v));
    const minutes = useTransform(progress, [0.40, 0.48], [0, 45]);
    const roundedMinutes = useTransform(minutes, v => Math.round(v));

    const points = [
        { x: 40, y: 80, name: "Marc - Dépôt" },
        { x: 160, y: 140, name: "Dimitri L." },
        { x: 100, y: 240, name: "Sophie K." },
        { x: 210, y: 320, name: "Garage Elite" },
        { x: 150, y: 440, name: "Fin de Journée" }
    ];

    return (
        <div className="h-full w-full bg-[#0F172A] relative overflow-hidden flex flex-col">
            {/* STYLIZED MAP BACKGROUND (Simplified Street Map Layout) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none scale-110">
                <svg viewBox="0 0 300 600" className="w-full h-full stroke-slate-500/30 font-black">
                    {/* Horizontal/Vertical Streets */}
                    <path d="M 0 100 L 300 100 M 0 250 L 300 250 M 0 400 L 300 400 M 0 550 L 300 550" fill="none" strokeWidth="15" />
                    <path d="M 80 0 L 80 600 M 200 0 L 200 600 M 140 100 L 140 400" fill="none" strokeWidth="15" />
                    {/* Diagonals */}
                    <path d="M 0 0 L 300 300 M 300 0 L 0 600" fill="none" strokeWidth="10" />
                </svg>
            </div>

            {/* TOP UI - SEARCH BAR */}
            <div className="relative pt-12 px-4 z-20">
                <div className="glass-dark rounded-xl h-10 w-full flex items-center px-4 border border-white/10 gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Ma Tournée d'aujourd'hui</div>
                </div>
            </div>

            <svg className="absolute inset-0 w-full h-full p-0 z-10">
                {/* Navigation Line */}
                <motion.path
                    d="M 40 80 L 160 140 L 100 240 L 210 320 L 150 440"
                    fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                    style={{ pathLength, filter: 'drop-shadow(0 0 12px rgba(16,185,129,0.6))' }}
                />

                {/* Destination Markers */}
                {points.map((p, i) => (
                    <motion.g key={i} style={{ opacity: dotOp }}>
                        <circle cx={p.x} cy={p.y} r={i === 0 ? 8 : 6} fill="#1E293B" stroke={i === 0 ? "white" : "#10B981"} strokeWidth="2" />
                        <motion.circle
                            cx={p.x} cy={p.y} r={12}
                            fill="#10B981" initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="opacity-20"
                        />
                    </motion.g>
                ))}
            </svg>

            {/* FLOATING VEHICLE ICON */}
            <motion.div
                style={{
                    left: useTransform(progress, [0.35, 0.48], [40, 150]),
                    top: useTransform(progress, [0.35, 0.48], [80, 440]),
                    opacity: dotOp,
                    rotate: useTransform(progress, [0.35, 0.48], [30, -10])
                }}
                className="absolute w-10 h-10 -ml-5 -mt-5 bg-white rounded-full border-4 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center text-[18px] z-30"
            >
                🚗
            </motion.div>

            {/* BOTTOM CARD - NEXT DESTINATION */}
            <motion.div style={{ opacity: statsOp, y: statsY }} className="absolute bottom-6 left-4 right-4 glass-dark p-5 rounded-3xl border border-white/10 shadow-2xl z-40">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <ArrowRight size={20} className="text-emerald-500 -rotate-45" />
                    </div>
                    <div className="flex-1 text-left">
                        <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest mb-1">Économie de carburant</div>
                        <div className="text-xl font-black text-white tabular-nums">- <motion.span>{roundedPercent}</motion.span>% <span className="text-xs text-white/40 font-bold ml-1">TEMPS GAGNÉ ✓</span></div>
                        <div className="text-[11px] text-white/60 font-semibold mt-1 leading-tight">L'intelligence CleanDar fait gagner <span className="text-white font-black underline decoration-emerald-500"><motion.span>{roundedMinutes}</motion.span> min</span> à Marc.</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// 6. SCÈNE : REMINDER (48-58%) - ALEX (COACH SPORTIF)
const MotionScreenReminder = ({ progress }: { progress: any }) => {
    const smsOp = useTransform(progress, [0.48, 0.53], [0, 1]);
    const smsY = useTransform(progress, [0.48, 0.53], [20, 0]);

    return (
        <div className="h-full w-full bg-[#050507] p-5 flex flex-col relative text-left">
            <div className="pt-10 mb-8 border-b border-white/5 pb-4">
                <div className="text-xs font-black text-white/40 uppercase tracking-widest mb-1">Conversation SMS</div>
                <div className="text-base font-black text-white">Julien R.</div>
            </div>
            <motion.div style={{ opacity: smsOp, y: smsY }} className="bg-white/10 backdrop-blur-2xl p-6 rounded-[2.5rem] rounded-tl-none border border-white/10 max-w-[95%] font-medium shadow-2xl">
                <div className="text-[13px] text-white/95 leading-relaxed mb-6">⚡️ <b>Coach Alex</b> : Prêt pour ton HIIT de 11:30 ? Ta séance t'attend !</div>
                <div className="flex flex-col gap-2">
                    <div className="w-full py-3.5 bg-white/15 backdrop-blur-3xl text-white rounded-2xl text-[11px] font-black uppercase tracking-wider text-center border border-white/20 transition-all active:scale-95">Confirmation ✓</div>
                    <div className="w-full py-3.5 bg-white/5 text-white/40 rounded-2xl text-[11px] font-black uppercase tracking-wider text-center border border-white/5">Repousser</div>
                </div>
            </motion.div>
        </div>
    );
};

// 7. SCÈNE : DASHBOARD (60-68%)
const MotionScreenDashboard = ({ progress }: { progress: any }) => {
    const cash = useTransform(progress, [0.60, 0.68], [0, 840]);
    const roundedCash = useTransform(cash, v => Math.round(v));

    const barProgress = useTransform(progress, [0.60, 0.68], [0, 1]);
    const opacityOp = useTransform(progress, [0.60, 0.63], [0, 1]);

    return (
        <div className="h-full w-full bg-slate-50 flex flex-col p-6 text-left relative overflow-hidden">
            <motion.div style={{ opacity: opacityOp }} className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Analytics Elite</div>
                        <div className="text-xl font-black text-slate-900 leading-none mt-1">Total Semaine</div>
                    </div>
                    <div className="w-12 h-12 rounded-[1.25rem] bg-slate-900 flex items-center justify-center text-white shadow-xl">📈</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-2">Chiffre d'Affaires</div>
                        <div className="text-2xl font-black text-slate-900 tabular-nums">
                            <motion.span>{roundedCash}</motion.span><span className="text-indigo-600">€</span>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-2">Croissance</div>
                        <div className="text-2xl font-black text-emerald-500 tabular-nums">+42%</div>
                    </div>
                </div>

                <div className="flex-1 bg-slate-900 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />

                    <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-8">Volume d'activité</div>
                    <div className="flex-1 flex items-end justify-between gap-3 px-1 mb-2">
                        {[0.4, 0.6, 0.5, 0.9, 0.7, 0.8, 0.95].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                <motion.div
                                    style={{
                                        height: useTransform(barProgress, [i * 0.04, 0.3 + i * 0.08], ["0%", `${h * 100}%`]),
                                        opacity: useTransform(barProgress, [i * 0.04, 0.1 + i * 0.04], [0, 1])
                                    }}
                                    className={`w-full rounded-2xl ${i === 6 ? 'bg-gradient-to-t from-violet-500 to-fuchsia-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' : 'bg-white/10'}`}
                                />
                                <div className="text-[8px] font-black text-white/20">{['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// 8. SCÈNE : INSTAGRAM VISIBILITY (65-75%) - SARAH (BEAUTÉ)
const MotionScreenInstagram = ({ progress }: { progress: any }) => {
    const instaOp = useTransform(progress, [0.65, 0.70], [0, 1]);
    const linkOp = useTransform(progress, [0.72, 0.75], [0, 1]);

    return (
        <div className="h-full w-full bg-white flex flex-col relative overflow-hidden">
            <motion.div style={{ opacity: instaOp }} className="flex flex-col h-full">
                {/* Header Instagram */}
                <div className="px-4 pt-12 pb-4 flex items-center justify-between border-b border-slate-100">
                    <div className="font-black text-xl italic tracking-tighter">Instagram</div>
                    <div className="flex gap-4">
                        <div className="w-5 h-5 border-2 border-slate-900 rounded-lg" />
                        <div className="w-5 h-5 border-2 border-slate-900 rounded-full" />
                    </div>
                </div>

                {/* Profile */}
                <div className="p-5 flex flex-col items-start gap-4">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-white p-1">
                                <div className="w-full h-full rounded-full bg-pink-500 flex items-center justify-center text-white text-xl font-black">SB</div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <div className="text-sm font-black text-slate-900 leading-none">1.2k</div>
                                <div className="text-[10px] text-slate-400 font-bold">Posts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-black text-slate-900 leading-none">45k</div>
                                <div className="text-[10px] text-slate-400 font-bold">Followers</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left">
                        <div className="text-sm font-black text-slate-930 text-left">Sarah Beauty Lab 💅</div>
                        <div className="text-[11px] text-slate-600 font-medium leading-tight mt-1 text-left">
                            Studio Expert Look & Nails<br />
                            📍 Bordeaux - Sur RDV uniquement
                        </div>

                        {/* Link in Bio */}
                        <motion.div
                            style={{ opacity: linkOp, scale: useTransform(progress, [0.72, 0.75], [0.9, 1]) }}
                            className="bg-sky-50 py-3 px-4 rounded-xl border border-sky-100 mt-4 flex items-center gap-2 w-full"
                        >
                            <div className="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600">🔗</div>
                            <div className="text-[10px] font-black text-sky-600">cleandar.pro/sarah-beauty</div>
                        </motion.div>
                    </div>
                </div>

                {/* Feed Grid */}
                <div className="grid grid-cols-3 gap-0.5 mt-4 flex-1 bg-slate-50">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-slate-200 border-white border" />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

// 9. SCÈNE : INVOICE (78-88%) - ALEX (COACH)
const MotionScreenInvoice = ({ progress }: { progress: any }) => {
    const invoiceOp = useTransform(progress, [0.78, 0.82], [0, 1]);
    const invoiceY = useTransform(progress, [0.78, 0.82], [40, 0]);

    const mailOp = useTransform(progress, [0.83, 0.86], [0, 1]);
    const mailX = useTransform(progress, [0.83, 0.88], [-50, 400]);

    return (
        <div className="h-full w-full bg-slate-50 p-6 flex flex-col relative overflow-hidden">
            <motion.div style={{ opacity: invoiceOp, y: invoiceY }} className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center font-black text-xs italic">A</div>
                    <div className="text-right font-black"><div className="text-[8px] text-slate-900 tracking-tighter uppercase">Facture #ELITE-202</div><div className="text-[8px] text-slate-400 mt-1">15 Janvier 2026</div></div>
                </div>
                <div className="space-y-3 mb-8 text-[10px] font-bold text-slate-900 text-left">
                    <div className="flex justify-between"><span>Séance HIIT Solo</span><span>105.00€</span></div>
                    <div className="flex justify-between text-slate-400"><span>Acompte de résa.</span><span>-30.00€</span></div>
                    <div className="pt-3 border-t-2 border-slate-100 flex justify-between font-black text-xs"><span>Total TTC</span><span>75.00€</span></div>
                </div>

                {/* Action: Sending */}
                <div className="mt-auto">
                    <motion.div
                        style={{ scale: useTransform(progress, [0.82, 0.85], [1, 0.95]) }}
                        className="w-full py-3 rounded-xl bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
                    >
                        <span>Envoyer la facture</span>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[7px] font-black text-slate-300 uppercase tracking-widest opacity-40"
                >
                    Continuez ↓
                </motion.div>
            </motion.div>
            <motion.div style={{ opacity: mailOp, x: mailX }} className="absolute h-10 w-10 text-xl top-1/2">📩</motion.div>
        </div>
    );
};

// 10. SCÈNE : CALME DU SOIR (85-92%)
const MotionScreenPeace = ({ progress }: { progress: any }) => {
    const peaceOp = useTransform(progress, [0.85, 0.90], [0, 1]);

    return (
        <div className="h-full w-full bg-[#050507] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
            <motion.div style={{ opacity: peaceOp }} className="relative z-10 flex flex-col items-center">
                <div className="text-5xl mb-6">🥂</div>
                <div className="text-5xl font-light text-white/90 tabular-nums">19:30</div>
                <div className="glass-dark mt-8 p-4 rounded-3xl border border-white/5 shadow-2xl text-left max-w-[200px]">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px]">📈</div>
                        <div className="text-[9px] font-black text-white/30 uppercase tracking-widest">Bilan VIP</div>
                    </div>
                    <div className="text-[10px] font-bold text-white/80 leading-relaxed italic">6 Coupes Elite, 320€ encaissés.</div>
                    <div className="text-[10px] text-emerald-400 font-bold mt-2">Soirée relax. 🎉</div>
                </div>
            </motion.div>
        </div>
    );
};

// 11. SCÈNE : SYNTHÈSE (92-100%)
const MotionScreenComparison = ({ progress }: { progress: any }) => {
    const scale = useTransform(progress, [0.92, 0.96], [0.9, 1]);
    const opacity = useTransform(progress, [0.92, 0.94], [0, 1]);

    return (
        <div className="h-full w-full bg-[#050507] p-6 flex flex-col justify-center items-center overflow-hidden">
            <motion.div style={{ scale, opacity }} className="w-full space-y-4">
                <div className="text-center mb-6">
                    <div className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-2">Verdict</div>
                    <div className="text-xl font-black text-white">L'Excellence avec CleanDar</div>
                </div>
                <div className="space-y-2">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center text-left">
                        <div className="text-[10px] font-bold text-white/60">Gestion / Admin</div>
                        <div className="text-xs font-black text-red-500 line-through">2h / jour</div>
                        <div className="text-xs font-black text-emerald-400 font-black">0 min</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center text-left">
                        <div className="text-[10px] font-bold text-white/60">Satisfaction Client</div>
                        <div className="text-xs font-black text-white/40">Moyenne</div>
                        <div className="text-xs font-black text-amber-500 font-black text-xl">ELITE ★</div>
                    </div>
                    <div className="p-5 rounded-3xl bg-white text-black shadow-xl shadow-white/10 text-center transition-transform hover:scale-105">
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Passer à l'action</div>
                        <div className="text-[9px] text-black/40 font-bold uppercase">Essai 14 jours gratuit</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const PhoneFrame = ({ children, progress, scene }: { children: React.ReactNode; progress: any; scene: string }) => {
    const rotateY = useTransform(progress, [0, 1], [-5, 5]);
    const rotateX = useTransform(progress, [0, 1], [3, -3]);
    const y = useTransform(progress, [0, 0.5, 0.9, 1], [0, -30, -30, -100]); // Final Zoom effect logic coordinate
    const scale = useTransform(progress, [0, 0.5, 0.9, 1], [0.95, 1, 1, 1.4]); // Scale up significantly at end
    const opacity = useTransform(progress, [0.95, 1], [1, 0.5]); // Slight fade to blend into background

    return (
        <div className="relative w-full max-w-[320px] md:max-w-[400px] h-[520px] md:h-[600px] mx-auto">
            {/* Cropped phone container - shows top 3/4 */}
            <motion.div
                style={{
                    rotateY,
                    rotateX,
                    y,
                    scale,
                    transformStyle: "preserve-3d"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] md:w-[300px]"
            >
                {/* iPhone 15 Pro Frame */}
                <div className="relative bg-[#1C1C1E] rounded-[45px] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    {/* Titanium edge effect */}
                    <div className="absolute inset-0 rounded-[45px] bg-gradient-to-b from-[#3A3A3C] via-[#1C1C1E] to-[#0A0A0A] opacity-50" />

                    {/* Dynamic Island */}
                    <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-[100] flex items-center justify-center gap-2 shadow-inner">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#1C1C1E] ring-1 ring-[#2C2C2E]" />
                        <div className="w-[6px] h-[6px] rounded-full bg-[#0D7AFF]/20" />
                    </div>

                    {/* Screen */}
                    <div className="relative aspect-[9/19.5] bg-black rounded-[35px] overflow-hidden ring-1 ring-white/5">
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 z-50 flex items-end justify-between px-6 pb-1">
                            <span className="text-[10px] font-semibold text-white/80">9:41</span>
                            <div className="flex items-center gap-1">
                                <div className="w-5 h-2.5 bg-white rounded-sm relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-[2px] h-[4px] bg-white rounded-r-sm" />
                                </div>
                            </div>
                        </div>

                        {/* Screen content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={scene}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full w-full"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom fade removed - phone fully visible now */}
            </motion.div>
        </div>
    );
};

// =============================================================================
// FAQ ITEM
// =============================================================================

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/5 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left py-4 px-2 group"
            >
                <span className={`text-lg md:text-xl font-bold transition-colors ${open ? 'text-violet-400' : 'text-slate-300 group-hover:text-white'}`}>{q}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all flex-shrink-0 ${open ? 'rotate-45 bg-white text-black' : ''}`}>
                    <Plus size={18} />
                </div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="px-2 pb-6 text-slate-400 text-base md:text-lg leading-relaxed">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// =============================================================================
// PAGE PRINCIPALE
// =============================================================================

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [activeScene, setActiveScene] = useState("chaos");
    const [scrolled, setScrolled] = useState(false);
    const [showCookies, setShowCookies] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const consent = localStorage.getItem('cleandar-cookies');
        if (!consent) setShowCookies(true);
    }, []);

    useEffect(() => {
        if (!mounted || !containerRef.current) return;

        const handleGlobalScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleGlobalScroll, { passive: true });
        handleGlobalScroll();

        return () => {
            window.removeEventListener("scroll", handleGlobalScroll);
        };
    }, [mounted]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 30, restDelta: 0.001 });
    const progressHeight = useTransform(smoothScroll, [0, 1], ["0%", "100%"]);

    useMotionValueEvent(smoothScroll, "change", (v) => {
        if (!mounted) return;
        // Spaced out thresholds for better mobile pacing
        if (v < 0.10) setActiveScene("chaos");
        else if (v < 0.20) setActiveScene("creation");
        else if (v < 0.30) setActiveScene("booking");
        else if (v < 0.40) setActiveScene("notif");
        else if (v < 0.52) setActiveScene("map");
        else if (v < 0.62) setActiveScene("reminder");
        else if (v < 0.72) setActiveScene("dashboard");
        else if (v < 0.82) setActiveScene("crm");
        else if (v < 0.90) setActiveScene("invoice");
        else if (v < 0.95) setActiveScene("peace");
        else setActiveScene("comparison");
    });

    if (!mounted) {
        return <div className="bg-[#050507] min-h-screen" />;
    }

    return (
        <div className="bg-[#050507] text-slate-100 font-sans selection:bg-violet-600 selection:text-white no-scrollbar overflow-x-clip">

            {/* NOISE & GRADIENTS FIXES */}
            <div className="fixed inset-0 bg-mesh-violet opacity-30 pointer-events-none z-0" />
            <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-10" />

            {/* NAV BAR PREMUIM */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 glass-dark rounded-full z-[1000] transition-all duration-700 ${scrolled ? 'scale-90 bg-black/80 shadow-2xl shadow-black/50 border-white/20' : 'scale-100'}`}>
                <div className="flex items-center gap-2 pl-4 pr-3 border-r border-white/5 py-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-lg shadow-violet-500/20">C</div>
                    <span className="font-black text-lg tracking-tight text-white hidden sm:block">CleanDar</span>
                </div>
                <div className="hidden md:flex gap-1 px-2">
                    {["Impact", "Vision", "Outils", "Tarifs"].map(t => (
                        <a key={t} href={`#${t.toLowerCase()}`} className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
                            {t}
                        </a>
                    ))}
                </div>
                <button
                    onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-10 px-6 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                    Accès Anticipé
                </button>
            </nav>

            {/* SECTION 0: HERO - PREMIUM DESIGN */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 overflow-hidden">
                {/* INTENSE BACKGROUND GLOW */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/30 rounded-full blur-[200px]" />
                    <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
                </div>

                {/* SUBTLE GRID */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

                {/* FLOATING UI CARDS (DESKTOP) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[5%] w-72 glass-dark p-5 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                                <Check size={20} className="text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-sm font-black text-white">Réservation confirmée</div>
                                <div className="text-[10px] text-white/40 font-bold">Il y a 2 min</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                                />
                            </div>
                            <span className="text-[10px] font-black text-emerald-400">+45€</span>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -1, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[25%] right-[5%] w-80 glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Chiffre du mois</div>
                            <div className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black">+22%</div>
                        </div>
                        <div className="text-4xl font-black text-white tracking-tight">8,420€</div>
                        <div className="mt-6 h-20 flex items-end gap-1.5">
                            {[0.3, 0.5, 0.4, 0.7, 0.6, 0.8, 0.95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h * 100}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className={`flex-1 rounded-t-lg ${i === 6 ? 'bg-gradient-to-t from-violet-600 to-fuchsia-500' : 'bg-white/10'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* MAIN CONTENT */}
                <div className="relative z-20 max-w-5xl mx-auto">
                    <Reveal y={30}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
                            <Sparkles size={14} className="text-violet-400" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-violet-300">Le Système d'Exploitation des Indépendants</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1} y={40}>
                        <h1 className="text-[52px] sm:text-[72px] md:text-[100px] lg:text-[140px] font-black tracking-tighter leading-[0.9] mb-8">
                            <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">LE TEMPS</span>
                            <motion.span
                                className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent"
                                style={{
                                    backgroundSize: '200% auto',
                                }}
                                animate={{
                                    backgroundPosition: ['0% center', '200% center', '0% center']
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'linear'
                                }}
                            >
                                RETROUVÉ.
                            </motion.span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2} y={30}>
                        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 px-4">
                            Booking, Site Web, Facturation et Optimisation de Trajets.<br className="hidden md:block" />
                            <span className="text-white font-semibold">Tout votre business dans une seule application.</span>
                        </p>
                    </Reveal>

                    <Reveal delay={0.3} y={30}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 shadow-[0_20px_50px_-12px_rgba(139,92,246,0.5)] overflow-hidden"
                            >
                                <span className="relative z-10">Demander un accès</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                            <motion.button
                                onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-2xl font-black text-lg text-white/80 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                            >
                                Voir la démo
                            </motion.button>
                        </div>
                    </Reveal>

                    {/* SCROLL INDICATOR */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
                        />
                    </motion.div>
                </div>
            </header>

            {/* SECTION 2: SCROLLYTELLING (VISION) - DIRECT ENTRY */}
            <section id="vision" className="relative h-[1200vh]" ref={containerRef}>
                <div className="sticky top-0 h-[100dvh] w-full bg-[#020617] overflow-hidden">
                    <div className="h-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:grid md:grid-cols-2 items-center md:justify-center pt-24 md:pt-0 gap-4 md:gap-24 relative">

                        {/* DEVICE COLUMN - SECOND on mobile (text first) */}
                        <div className="flex-shrink-0 w-full md:w-auto order-2 md:order-2 relative flex items-center justify-center py-4 md:py-12 overflow-visible z-20">
                            {/* GLOW ATMOSPHERE */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-[80px] md:blur-[120px] transition-colors duration-1000 ${activeScene === "chaos" ? "bg-red-600" :
                                activeScene === "creation" ? "bg-violet-600" :
                                    activeScene === "booking" ? "bg-emerald-600" :
                                        activeScene === "notif" ? "bg-indigo-600" :
                                            activeScene === "map" ? "bg-teal-600" :
                                                activeScene === "reminder" ? "bg-amber-600" :
                                                    activeScene === "dashboard" ? "bg-violet-600" :
                                                        activeScene === "crm" ? "bg-pink-600" :
                                                            activeScene === "invoice" ? "bg-slate-600" :
                                                                activeScene === "peace" ? "bg-emerald-600" :
                                                                    "bg-violet-600"
                                } opacity-20 md:opacity-30 blur-[130px]`}
                            />

                            {/* PHONE FRAME */}
                            <PhoneFrame progress={smoothScroll} scene={activeScene}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeScene}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                        className="w-full h-full"
                                    >
                                        {activeScene === "chaos" && <MotionScreenChaos progress={smoothScroll} />}
                                        {activeScene === "creation" && <MotionScreenPageCreation progress={smoothScroll} />}
                                        {activeScene === "booking" && <MotionScreenClientBooking progress={smoothScroll} />}
                                        {activeScene === "notif" && <MotionScreenProNotif progress={smoothScroll} />}
                                        {activeScene === "map" && <MotionScreenMapOptim progress={smoothScroll} />}
                                        {activeScene === "reminder" && <MotionScreenReminder progress={smoothScroll} />}
                                        {activeScene === "dashboard" && <MotionScreenDashboard progress={smoothScroll} />}
                                        {activeScene === "crm" && <MotionScreenInstagram progress={smoothScroll} />}
                                        {activeScene === "invoice" && <MotionScreenInvoice progress={smoothScroll} />}
                                        {activeScene === "peace" && <MotionScreenPeace progress={smoothScroll} />}
                                        {activeScene === "comparison" && <MotionScreenComparison progress={smoothScroll} />}
                                    </motion.div>
                                </AnimatePresence>
                            </PhoneFrame>
                        </div>

                        {/* CONTENT COLUMN - FIRST on mobile (text above phone) */}
                        <div className="w-full max-w-md order-1 md:order-1 mt-2 md:mt-0 px-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeScene}
                                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-3 md:space-y-8 text-center md:text-left"
                                >
                                    {activeScene === "chaos" && (
                                        <>
                                            <Badge color="red">L'Enfer du quotidien</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                STOP AUX<br /><span className="text-red-500">INTERRUPTIONS.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Répondre aux SMS, aux appels manqués et aux prix... <span className="text-white font-bold italic text-xl md:text-2xl">Le métier d'indépendant ne devrait pas être une hotline.</span>
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "creation" && (
                                        <>
                                            <Badge color="violet">Mise en place (5 min)</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                VOTRE OFFRE<br /><span className="text-violet-400">EN LIGNE.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Services, tarifs et durées... <span className="text-white font-bold italic">Marc (Nettoyage Auto) a configuré son offre en 5 min.</span> C'est simple, beau et pro.
                                            </p>
                                            <a href="#outils" className="inline-flex items-center justify-center md:justify-start gap-2 text-violet-400 font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all w-full md:w-auto">Voir l'outil <ArrowRight size={14} /></a>
                                        </>
                                    )}
                                    {activeScene === "booking" && (
                                        <>
                                            <Badge color="emerald">Réservation VIP</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                3 CLICS POUR<br /><span className="text-emerald-400">UN COACHING.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Alex propose ses séances HIIT en ligne. Un créneau, un acompte, <span className="text-white font-bold italic">et c'est réservé.</span> Zéro perte de temps.
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "notif" && (
                                        <>
                                            <Badge color="indigo">Confirmation Instantanée</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                ENCAISSEZ MÊME<br /><span className="text-indigo-400">EN DORMANT.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Sarah reçoit un acompte pour sa pose de vernis. <span className="text-white font-bold italic">L'argent est sécurisé avant même le début de la prestation.</span>
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "map" && (
                                        <>
                                            <Badge color="teal">Logistique Intelligence</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                MOINS DE ROUTE,<br /><span className="text-teal-400">PLUS DE CLIENTS.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                CleanDar optimise les trajets de Marc. <span className="text-white font-bold italic text-teal-400">Économisez 65% de carburant</span> et gagnez une heure par jour.
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "reminder" && (
                                        <>
                                            <Badge color="amber">Protection du Temps</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                0% DE "LAPINS".<br /><span className="text-amber-400">AUTOMATIQUE.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Le SMS de rappel d'Alex réduit les oublis de 90%. <span className="text-white font-bold italic">Votre temps est trop précieux pour être gaspillé.</span>
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "dashboard" && (
                                        <>
                                            <Badge color="violet">Vision Business</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                PILOTEZ VOTRE<br /><span className="text-violet-400">CROISSANCE.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Chiffre d'affaires, nouveaux clients, prestations phares. <span className="text-white font-bold italic">Toutes vos datas en temps réel dans votre poche.</span>
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "crm" && (
                                        <>
                                            <Badge color="pink">Attraction Clients</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                VOTRE MARQUE,<br /><span className="text-pink-400">VOTRE LIEN Bio.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Sarah intègre son lien CleanDar partout. <span className="text-white font-bold italic">Instagram devient votre premier apporteur de clients,</span> directement dans votre agenda.
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "invoice" && (
                                        <>
                                            <Badge color="slate">Simplification Totale</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                VOS FACTURES<br /><span className="text-slate-400">EN 1 SECONDE.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Alex génère sa facture PDF en un clic. <span className="text-white font-bold italic">L'administratif n'est plus un fardeau, mais une formalité.</span>
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "peace" && (
                                        <>
                                            <Badge color="emerald">Le Prestige Retrouvé</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                ENFIN DU TEMPS<br /><span className="text-emerald-400">POUR VOUS.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                La journée est finie, tout est géré. <span className="text-white font-bold italic">Rentrez chez vous, profitez de vos proches.</span> CleanDar a tout fait.
                                            </p>
                                        </>
                                    )}
                                    {activeScene === "comparison" && (
                                        <>
                                            <Badge color="violet">Prêt à changer de dimension ?</Badge>
                                            <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[0.85] tracking-tighter">
                                                LIBÉREZ VOTRE<br /><span className="text-gradient">DROIT À L'EXCELLENCE.</span>
                                            </h3>
                                            <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium max-w-md mx-auto md:mx-0">
                                                Rejoignez l'élite des indépendants. <span className="text-white font-bold italic">Essai 14 jours gratuit (sans CB).</span>
                                            </p>
                                        </>
                                    )}
                                    <div className="flex gap-1.5 pt-6 justify-center md:justify-start">
                                        {["chaos", "creation", "booking", "notif", "map", "reminder", "dashboard", "crm", "invoice", "peace", "comparison"].map((s) => (
                                            <div
                                                key={s}
                                                className={`h-1.5 rounded-full transition-all duration-700 ease-out ${activeScene === s
                                                    ? 'w-8 bg-gradient-to-r from-white to-white/60'
                                                    : 'w-1.5 bg-white/10'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BENTO GRID (OUTILS) */}
            <section id="outils" className="py-40 px-6 relative z-10 bg-slate-50 text-slate-900 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <Badge color="violet">Technologie 360°</Badge>
                        <h2 className="text-4xl md:text-8xl font-black text-slate-900 leading-[0.9] mt-6 tracking-tighter mb-20 text-left">
                            TOUT POUR<br /><span className="text-violet-600 italic">DOMINER</span> VOTRE MARCHÉ.
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-12 gap-6">
                        {/* FEATURE 1: CRM */}
                        <div className="md:col-span-12 group p-10 bg-white rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center overflow-hidden h-full">
                            <div className="flex-1 text-left space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">👤</div>
                                <h3 className="text-4xl font-black tracking-tighter">Mémoire Client Infinie.</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                    CleanDar ne se contente pas de prendre des rendez-vous. Il crée un véritable <span className="text-slate-900 font-bold underline decoration-indigo-300">Cerveau Client</span>. Historique des prestations, préférences de Marc pour son nettoyage auto, ou habitudes de Sarah pour ses manucures. Tout est là, accessible en 1 seconde.
                                </p>
                                <div className="flex gap-4">
                                    <div className="bg-slate-100 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600">Fiches Clients PRO</div>
                                    <div className="bg-slate-100 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600">Notes Privées</div>
                                </div>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-3xl p-8 border border-slate-100 relative min-h-[300px] w-full">
                                <div className="absolute inset-x-8 top-8 space-y-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black">M{i}</div>
                                            <div className="flex-1">
                                                <div className="text-xs font-black text-slate-900 leading-none">Marc Dupont</div>
                                                <div className="text-[10px] text-slate-400 mt-1">Dernier passage: 12 Janv. • HIIT Solo</div>
                                            </div>
                                            <div className="text-[10px] font-black text-indigo-500">VOIR FICHE</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* FEATURE 2: AUTOMATION LEGAL */}
                        <div className="md:col-span-12 group p-10 bg-slate-900 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col md:flex-row-reverse gap-12 items-center overflow-hidden">
                            <div className="flex-1 text-left space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center text-3xl">📄</div>
                                <h3 className="text-4xl font-black tracking-tighter text-white">Adieu l'administratif.</h3>
                                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                                    La facturation est automatique. Vos factures sont générées dès l'encaissement, aux <span className="text-white font-black underline decoration-violet-500">normes françaises</span>. Exportez votre comptabilité en un clic à la fin du trimestre.
                                </p>
                                <ul className="space-y-3">
                                    {["Génération de PDF auto", "Gestion de la TVA", "Export Comptable (CSV, PDF)", "Suivi des impayés"].map(li => (
                                        <li key={li} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                                            <Check size={16} className="text-violet-500" /> {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 relative w-full flex items-center justify-center">
                                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-sm w-full -rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-8 h-8 rounded-full bg-slate-900" />
                                        <div className="text-right"><div className="text-[8px] font-black uppercase">Facture #PRO-99</div><div className="text-[8px] text-slate-400 mt-1">Status: Payée ✓</div></div>
                                    </div>
                                    <div className="space-y-2 border-t border-slate-100 pt-4">
                                        <div className="h-2 w-full bg-slate-100 rounded" />
                                        <div className="h-2 w-3/4 bg-slate-100 rounded" />
                                        <div className="h-2 w-1/2 bg-slate-100 rounded" />
                                    </div>
                                    <div className="mt-8 pt-4 border-t-2 border-slate-900 flex justify-between font-black">
                                        <div className="text-xs">TOTAL</div>
                                        <div className="text-xs">145.00€</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FEATURE 3: ANALYTICS */}
                        <div className="md:col-span-12 group p-10 bg-white rounded-[3rem] border border-slate-200 shadow-2xl flex flex-col md:flex-row gap-12 items-center overflow-hidden h-full">
                            <div className="flex-1 text-left space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl">📊</div>
                                <h3 className="text-4xl font-black tracking-tighter">Analysez. Croissez.</h3>
                                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                                    Sachez exactement d'où vient votre argent. Quels sont vos services les plus rentables ? Quels clients sont vos meilleurs ambassadeurs ? <span className="text-slate-900 font-black italic">Prenez des décisions basées sur des données, pas sur l'intuition.</span>
                                </p>
                            </div>
                            <div className="flex-1 flex items-end justify-between gap-4 h-64 w-full">
                                {[0.3, 0.6, 0.45, 0.8, 0.5, 0.9, 0.75].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-2xl bg-slate-100 hover:bg-emerald-500 transition-colors duration-300 relative group/bar" style={{ height: `${h * 100}%` }}>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">+{h * 100}€</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-40 px-6 relative z-10 bg-slate-50 text-slate-900 border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <Badge color="violet">Au-delà d'un simple agenda</Badge>
                        <h2 className="text-6xl md:text-[100px] font-black leading-[0.9] mt-6 tracking-tighter mb-20">
                            Tout est là.<br />En un seul clic.
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
                        {/* Featured card */}
                        <Reveal delay={0.1} className="md:col-span-2 md:row-span-1">
                            <div className="h-full p-10 bg-black rounded-[2.5rem] text-white flex flex-col justify-between group overflow-hidden relative">
                                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/20 to-transparent pointer-events-none" />
                                <div className="z-10">
                                    <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                        <Globe size={28} />
                                    </div>
                                    <h3 className="text-4xl font-black mb-4">Site Web Pro Inclus</h3>
                                    <p className="text-slate-400 text-lg max-w-sm">Générez un site de réservation optimisé pour Google en 30 secondes. Votre propre adresse : <span className="text-violet-400 underline italic">cleandar.eu/votre-nom</span></p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 font-black uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                                    Créez votre page <ChevronRight size={14} />
                                </div>
                            </div>
                        </Reveal>

                        {/* Small card 1 */}
                        <Reveal delay={0.2}>
                            <div className="h-full p-10 bg-slate-200 rounded-[2.5rem] flex flex-col justify-between hover:bg-slate-300 transition-colors">
                                <div>
                                    <BadgePercent size={32} className="text-black mb-6" />
                                    <h3 className="text-2xl font-black mb-2">Compta Auto</h3>
                                    <p className="text-slate-500 text-sm">Générez vos factures PDF et envoyez-les en un clic. Synchro bancaire totale.</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mt-6">
                                    <Zap size={18} />
                                </div>
                            </div>
                        </Reveal>

                        {/* Small card 2 */}
                        <Reveal delay={0.3}>
                            <div className="h-full p-10 bg-violet-100 rounded-[2.5rem] flex flex-col justify-between hover:bg-violet-200 transition-colors">
                                <div>
                                    <MessageSquare size={32} className="text-violet-600 mb-6" />
                                    <h3 className="text-2xl font-black mb-2">Rappels SMS</h3>
                                    <p className="text-slate-600 text-sm italic">"Bonjour Lucie, n'oubliez pas votre RDV..."</p>
                                    <p className="text-slate-500 text-xs mt-3 uppercase font-black tracking-widest">Inclus & illimités</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-violet-500/20 flex items-center justify-center mt-6">
                                    <Plus size={18} className="text-violet-600" />
                                </div>
                            </div>
                        </Reveal>

                        {/* Wide card */}
                        <Reveal delay={0.4} className="md:col-span-2">
                            <div className="h-full p-10 bg-white rounded-[2.5rem] border border-slate-200 flex flex-col sm:flex-row gap-10 items-center hover:shadow-2xl transition-all">
                                <div className="flex-1">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                        <CreditCard size={24} className="text-emerald-600" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4 tracking-tighter">Paiements par lien SMS</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-6">Encaissez vos clients directement en rayon ou après avoir rangé votre matériel avec un simple lien sécurisé <span className="font-bold text-black">(Apple Pay, Google Pay).</span></p>
                                    <button className="px-6 py-3 bg-black text-white rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform">
                                        Voir les terminaux
                                    </button>
                                </div>
                                <div className="flex-1 w-full h-[250px] bg-slate-100 rounded-3xl relative overflow-hidden border border-slate-200">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 w-full px-6">
                                        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200 animate-float">
                                            <div className="text-[8px] font-black uppercase text-slate-400">Paiement reçu</div>
                                            <div className="text-md font-black">Julie Martin • 45€</div>
                                        </div>
                                        <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg border border-emerald-600 animate-float" style={{ animationDelay: '1s' }}>
                                            <div className="text-[8px] font-black uppercase opacity-60">Succès</div>
                                            <div className="text-md font-black">Facture #842 envoyée 🚀</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* SECTION 4: VERTICALES (PROFESSIONS) */}
            <section className="py-40 px-6 relative z-10 overflow-hidden">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <Badge color="amber">Fait pour vous</Badge>
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mt-8 mb-20 tracking-tighter">
                            Adapté à votre<br />
                            <span className="text-amber-500">MÉTIER.</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "SANTÉ", icon: Zap, sub: "Infirmiers, kinés" },
                            { name: "BEAUTÉ", icon: Star, sub: "Coiffure, esthétique" },
                            { name: "COACHING", icon: Users, sub: "Sport, consulting" },
                            { name: "ARTISANS", icon: MapPin, sub: "Dépannage, clim" }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="p-8 glass rounded-3xl group cursor-pointer hover:border-amber-500/50 transition-all duration-300">
                                    <item.icon size={24} className="mx-auto mb-4 text-slate-500 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
                                    <div className="text-xs font-black tracking-widest text-white group-hover:text-amber-500 transition-colors uppercase">{item.name}</div>
                                    <div className="text-[10px] text-slate-500 mt-1 font-bold">{item.sub}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-20 p-12 glass rounded-[3rem] text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Star size={200} fill="white" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex gap-1 text-amber-500 mb-6">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-3xl font-black text-white italic leading-tight mb-8">
                                "Avant CleanDar, je passais 2h tous les soirs sur mes factures et mes trajets. Maintenant, je rentre chez moi à 18h pile et tout est déjà fait. C'est magique."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-700 font-black flex items-center justify-center">SM</div>
                                <div>
                                    <div className="text-lg font-black text-white">Sophie Martin</div>
                                    <div className="text-xs text-slate-500">Infirmière Libérale • Paris</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CLUB CLEANDAR & AFFILIATION */}
            <section className="py-40 px-6 relative z-10 bg-indigo-950 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center text-left">
                        <div>
                            <Badge color="indigo">Le Club CleanDar</Badge>
                            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mt-6 tracking-tighter">
                                PLUS QU'UNE APP. <br /><span className="text-indigo-400">UN RÉSEAU.</span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-lg mt-8 leading-relaxed">
                                Rejoignez une communauté d'élite. Profitez d'avantages négociés, de formations business, et de notre programme de parrainage exclusif <span className="text-white font-bold italic underline decoration-indigo-500">via Lemon Squeezy</span> pour générer des revenus passifs.
                            </p>
                            <div className="flex gap-4 mt-10">
                                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-indigo-500/20 active:scale-95">Rejoindre le Club</button>
                                <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">En savoir plus</button>
                            </div>
                        </div>
                        <div className="glass p-10 rounded-[3rem] border-indigo-500/20 bg-indigo-900/40">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl">🍋</div>
                                <div>
                                    <div className="text-xs font-black text-white uppercase tracking-widest leading-none">Powered by</div>
                                    <div className="text-3xl font-black text-white tracking-tighter mt-1">Lemon Squeezy</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <div className="text-slate-400 font-bold italic">Avantages Membres</div>
                                    <div className="text-white font-black">Actif ✓</div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <div className="text-slate-400 font-bold italic">Commissions Partenaires</div>
                                    <div className="text-emerald-400 font-black">15% à vie</div>
                                </div>
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="text-[10px] text-indigo-300 font-black uppercase tracking-widest">Places limitées pour la Beta</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* SECTION 5.5: BLOG / JOURNAL (SEO) */}
            <section id="blog" className="py-40 px-6 relative z-10 bg-[#050507]">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <Badge color="teal">Journal de Bord</Badge>
                        <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mt-6 tracking-tighter mb-20 text-left">
                            CONSEILS & <br /><span className="text-teal-400">STRATÉGIES.</span>
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Comment optimiser ses trajets pour gagner 5h par semaine",
                                desc: "Découvrez les secrets de l'IA CleanDar pour réduire vos temps de route de 40%.",
                                category: "Efficacité",
                                date: "12 Janv. 2026"
                            },
                            {
                                title: "Le guide ultime du SEO pour les indépendants",
                                desc: "Positionnez votre site de réservation en première page Google sans dépenser en pub.",
                                category: "Marketing",
                                date: "08 Janv. 2026"
                            },
                            {
                                title: "Gérer l'administratif sans stress en 2026",
                                desc: "Les meilleures pratiques pour automatiser vos factures et vos déclarations.",
                                category: "Gestion",
                                date: "03 Janv. 2026"
                            }
                        ].map((post, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group cursor-pointer bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all hover:translate-y-[-8px]">
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-lg text-[10px] font-black uppercase tracking-widest">{post.category}</div>
                                        <div className="text-[10px] text-slate-500 font-bold">{post.date}</div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-teal-400 transition-colors">{post.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">{post.desc}</p>
                                    <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
                                        Lire l'article <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: FAQ */}
            <section id="faq" className="py-40 px-6 relative z-10 bg-black">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <Badge color="violet">Transparent & simple</Badge>
                        <h2 className="text-6xl font-black text-white mb-20 tracking-tighter">Des Questions ?</h2>
                    </Reveal>

                    <div className="space-y-4">
                        <FAQItem q="Est-ce que je peux garder mon numéro ?" a="Oui, absolument. CleanDar s'intègre à votre matériel existant. Pour les SMS, les clients recevront vos notifications via notre centrale, mais pourront vous joindre sur votre numéro." />
                        <FAQItem q="Comment marche l'optimisation des trajets ?" a="Dès qu'un client veut réserver ou que vous entrez un rendez-vous manuel, notre IA regarde où vous êtes avant et après. Elle ne propose au client que des créneaux qui minimisent votre temps de route." />
                        <FAQItem q="C'est vraiment 29€ sans commissions ?" a="Oui. Nous ne prenons aucune commission sur vos ventes. Les seuls frais sont les frais bancaires classiques si vous utilisez le paiement en ligne (Stripe)." />
                        <FAQItem q="Puis-je l'utiliser avec un site WordPress existant ?" a="Tout à fait. Nous fournissons une ligne de code à copier-coller qui affichera votre widget de réservation CleanDar sur n'importe quel site existant." />
                        <FAQItem q="Est-ce sécurisé pour mes données ?" a="Vos données sont chiffrées et stockées sur des serveurs sécurisés en Europe. Nous sommes 100% conformes au RGPD : vos données vous appartiennent." />
                        <FAQItem q="Puis-je annuler mon compte facilement ?" a="Oui. CleanDar est sans engagement. Vous pouvez résilier votre abonnement à tout moment d'un simple clic depuis vos paramètres, sans justificatif." />
                        <FAQItem q="Dois-je installer une application ?" a="CleanDar est une Web-App ultra-légère. Pas besoin de passer par l'App Store. Vous l'ajoutez à votre écran d'accueil en 2 secondes et elle fonctionne comme une application native." />
                        <FAQItem q="Le Club est-il réservé aux gros business ?" a="Pas du tout. Le Club CleanDar est ouvert à tous les indépendants dès le premier client. C'est l'endroit idéal pour apprendre à scaler votre activité avec les meilleurs conseils." />
                        <FAQItem q="Comment fonctionne l'affiliation Lemon Squeezy ?" a="Une fois membre, vous recevez un lien spécial. Si un confrère s'inscrit via ce lien, vous touchez 15% de son abonnement chaque mois, tant qu'il reste client. C'est automatique." />
                        <FAQItem q="Proposez-vous une aide au démarrage ?" a="Oui ! Nous offrons une session de configuration de 15 minutes en visio à tous les nouveaux membres pour s'assurer que votre site et vos trajets sont parfaitement paramétrés." />
                    </div>
                </div>
            </section>

            {/* SECTION 7: PRICING (L'OFFRE ÉLITE) */}
            <section id="tarifs" className="py-40 px-6 bg-[#050507] relative z-10 overflow-hidden border-t border-white/5">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.05)_0%,_transparent_70%)] pointer-events-none" />

                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-24">
                        <Reveal>
                            <Badge color="amber">Places Limitées</Badge>
                            <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-8 italic">
                                L'INVESTISSEMENT<br />
                                <span className="text-amber-500 not-italic">DE VOTRE CARRIÈRE.</span>
                            </h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                                CleanDar n'est pas un coût, c'est l'outil qui libère votre potentiel. Une offre unique, sans frais cachés, pour ceux qui visent l'excellence.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-4xl mx-auto relative group">
                        {/* Interactive Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-[4rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

                        <div className="relative glass-dark p-12 md:p-20 rounded-[3.5rem] border border-white/5 overflow-hidden">
                            {/* Card Content */}
                            <div className="flex flex-col md:flex-row gap-16 items-center md:items-start text-left">
                                <div className="flex-1">
                                    <div className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4">MEMBRE FONDATEUR</div>
                                    <h3 className="text-4xl font-black text-white mb-8 tracking-tight">Accès Bêta<br />Vip Illimité.</h3>

                                    <div className="grid sm:grid-cols-1 gap-4">
                                        {[
                                            "Tous les outils inclus (Maps, SMS, Facturation)",
                                            "Mises à jour à vie prioritaires",
                                            "Support Hotline Personnel 7j/7",
                                            "0% Commission sur vos ventes",
                                            "Badge Fondateur Certifié"
                                        ].map((f, i) => (
                                            <div key={i} className="flex gap-3 items-center">
                                                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                                                    <Check size={12} className="text-amber-500" />
                                                </div>
                                                <span className="text-slate-400 font-bold text-xs">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full md:w-auto flex flex-col items-center md:items-end">
                                    <div className="flex items-start text-white mb-2">
                                        <span className="text-2xl font-black mt-2 mr-1 text-amber-500">€</span>
                                        <span className="text-9xl font-black leading-none tracking-tighter lg:text-[140px]">29</span>
                                        <div className="flex flex-col ml-3 mt-4">
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">/ mois</span>
                                            <span className="text-[8px] font-bold text-emerald-500 mt-1 uppercase">SANS ENGAGEMENT</span>
                                        </div>
                                    </div>

                                    <div className="mt-12 w-full md:w-auto">
                                        <button
                                            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="w-full md:px-12 h-20 bg-amber-500 text-black rounded-3xl font-black text-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-amber-500/20"
                                        >
                                            Devenir Fondateur
                                        </button>
                                        <p className="text-[10px] text-slate-600 font-bold mt-6 text-center md:text-right uppercase tracking-[0.2em]">Zéro frais caché • Zéro commission</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL SECTION */}
            <section className="py-40 px-6 bg-[#050507] text-white text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Reveal>
                        <h2 className="text-4xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-12">
                            REPRENEZ LE CONTRÔLE. <br />
                            <span className="text-violet-500">AUJOURD'HUI.</span>
                        </h2>
                        <button className="h-24 px-16 bg-violet-600 text-white rounded-[2rem] font-black text-2xl hover:bg-violet-500 transition-all transform hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.5)]">
                            Créer mon compte CleanDar
                        </button>
                    </Reveal>
                </div>
            </section>

            {/* FOOTER PREMUIM */}
            <footer className="bg-black text-white py-32 px-6 border-t border-white/5 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-16 mb-20">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 text-3xl font-black mb-8 tracking-tighter">
                                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center">C</div>
                                CleanDar
                            </div>
                            <p className="text-slate-500 text-xl max-w-sm leading-relaxed mb-8">
                                La plateforme tout-en-un pour les indépendants qui veulent automatiser leur business et retrouver du temps pour eux.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://instagram.com/cleandar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-violet-500/50 transition-all text-slate-400 hover:text-white">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://tiktok.com/@cleandar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-violet-500/50 transition-all text-slate-400 hover:text-white">
                                    <Music2 size={20} />
                                </a>
                                <a href="https://linkedin.com/company/cleandar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-violet-500/50 transition-all text-slate-400 hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="text-[10px] font-black uppercase tracking-widest text-white">Produit</div>
                            <div className="flex flex-col gap-4 text-slate-500 font-bold transition-all">
                                <a href="#vision" className="hover:text-white transition-colors">Démo</a>
                                <a href="#outils" className="hover:text-white transition-colors">Outils</a>
                                <a href="#blog" className="hover:text-white transition-colors">Journal</a>
                                <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="text-[10px] font-black uppercase tracking-widest text-white">Société</div>
                            <div className="flex flex-col gap-4 text-slate-500 font-bold">
                                <a href="#" className="hover:text-white transition-colors">À propos</a>
                                <a href="#" className="hover:text-white transition-colors">Contact</a>
                                <a href="#" className="hover:text-white transition-colors">Manifesto</a>
                                <a href="#" className="hover:text-white transition-colors">Support</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
                        <div className="text-[10px] text-slate-800 uppercase font-black tracking-[0.3em]">© 2026 CLEANDAR • DROITS RÉSERVÉS <span className="text-violet-500 ml-4">VERSION BÊTA 0.1</span></div>
                        <div className="flex gap-8 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">Politique</a>
                            <a href="#" className="hover:text-white transition-colors">Conditions</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* COOKIE BANNER .EU COMPLIANCE */}
            <AnimatePresence>
                {showCookies && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] glass-dark p-6 rounded-[2rem] border-white/20 shadow-2xl z-[5000] flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-xl">🍪</div>
                            <h4 className="text-sm font-black text-white uppercase tracking-widest">Gestion des Cookies</h4>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                            Nous utilisons des cookies pour optimiser votre expérience sur <span className="text-white font-bold">cleandar.eu</span>. En continuant, vous acceptez notre politique de confidentialité d'élite.
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    localStorage.setItem('cleandar-cookies', 'true');
                                    setShowCookies(false);
                                }}
                                className="flex-1 bg-white text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all transform active:scale-95"
                            >
                                Accepter Tout
                            </button>
                            <button
                                onClick={() => setShowCookies(false)}
                                className="px-4 py-3 bg-white/5 text-slate-400 rounded-xl font-black text-[10px] uppercase tracking-widest hover:text-white transition-all"
                            >
                                Refuser
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
