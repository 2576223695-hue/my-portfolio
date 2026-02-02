"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  Clock,
  DollarSign,
  Zap,
  Hash,
  Bell,
  Pin,
  Users,
  Search,
  PlusCircle,
  Gift,
  Smile,
  Sticker,
  Languages,
  MoreHorizontal,
  Laugh,
  Reply,
  BarChart3,
  Wrench,
} from "lucide-react";

// ROI Calculator Content
function ROICalculatorContent() {
  const [weeklyHours, setWeeklyHours] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [efficiencyBoost, setEfficiencyBoost] = useState(50);
  const annualSavings = Math.round((weeklyHours * hourlyCost * 52) * (efficiencyBoost / 100));
  const hoursReclaimed = Math.round(weeklyHours * 52 * (efficiencyBoost / 100));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[420px]">
      {/* Input Section */}
      <div className="p-6 space-y-5 overflow-y-auto">
        {/* Weekly Hours Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              Weekly Manual Hours
            </label>
            <span className="text-sm font-semibold text-[#6366f1] bg-[#6366f1]/10 px-2.5 py-1 rounded-lg">
              {weeklyHours}h
            </span>
          </div>
          <Slider
            value={[weeklyHours]}
            onValueChange={(value) => setWeeklyHours(value[0])}
            min={10}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>10h</span>
            <span>100h</span>
          </div>
        </div>

        {/* Hourly Cost Input */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-slate-400" />
            Hourly Operational Cost
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <Input
              type="number"
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value) || 0)}
              className="pl-8 h-11 text-slate-900 font-medium"
              min={1}
            />
          </div>
        </div>

        {/* Efficiency Boost Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#6366f1]" />
              AI Efficiency Boost
            </label>
            <span className="text-sm font-semibold text-[#6366f1] bg-[#6366f1]/10 px-2.5 py-1 rounded-lg">
              {efficiencyBoost}%
            </span>
          </div>
          <Slider
            value={[efficiencyBoost]}
            onValueChange={(value) => setEfficiencyBoost(value[0])}
            min={20}
            max={80}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>20%</span>
            <span>80%</span>
          </div>
          <p className="text-xs text-slate-500 italic">
            Based on Aethery & KarNetWork experience, ~40-60% efficiency is typical.
          </p>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-6 flex flex-col justify-center items-center text-center border-l border-slate-100">
        <p className="text-sm font-medium text-slate-500 mb-2">Annual Savings</p>
        <div className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-4">
          {formatCurrency(annualSavings)}
        </div>
        
        <div className="w-16 h-px bg-slate-200 my-4" />
        
        <p className="text-sm font-medium text-slate-500 mb-1">Hours Reclaimed Annually</p>
        <div className="text-2xl font-semibold text-slate-700">
          {hoursReclaimed.toLocaleString()} hours
        </div>
        
        <p className="text-xs text-slate-400 mt-4 max-w-[200px]">
          Based on {efficiencyBoost}% efficiency improvement through AI automation
        </p>
      </div>
    </div>
  );
}

// Discord Demo Content
interface Message {
  id: number;
  username: string;
  userColor: string;
  avatar: string;
  timestamp: string;
  content: string;
  translation: string;
}

const messages: Message[] = [
  {
    id: 1,
    username: "ServerAdmin",
    userColor: "#F0B232",
    avatar: "SA",
    timestamp: "Today at 3:42 PM",
    content: "Important: The server will restart in 5 minutes.",
    translation: "重要通知：服务器将在5分钟后重启。",
  },
  {
    id: 2,
    username: "Steve_Pro",
    userColor: "#5865F2",
    avatar: "SP",
    timestamp: "Today at 3:43 PM",
    content: "Roger that. Will the economy data be wiped?",
    translation: "收到。经济数据会被清空吗？",
  },
];

// Reusable Message Row Component
function MessageRow({
  message,
  isHovered,
  isTranslated,
  isLoading,
  onMouseEnter,
  onMouseLeave,
  onTranslate,
}: {
  message: Message;
  isHovered: boolean;
  isTranslated: boolean;
  isLoading: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTranslate: () => void;
}) {
  return (
    <div>
      <div
        className={`group relative flex gap-4 py-1 px-2 -mx-2 rounded transition-colors duration-100 ${
          isHovered ? "bg-[#2e3035]" : ""
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
          style={{ backgroundColor: message.userColor }}
        >
          {message.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span
              className="font-medium text-[15px] hover:underline cursor-pointer"
              style={{ color: message.userColor }}
            >
              {message.username}
            </span>
            <span className="text-[0.7rem] text-[#949BA4]">{message.timestamp}</span>
          </div>
          <p className="text-[#DBDEE1] text-[15px] leading-[1.375rem] mt-0.5">{message.content}</p>
        </div>

        {/* Action Toolbar - appears on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.1 }}
              className="absolute -top-2 right-4 flex items-center bg-[#313338] border border-[#1e1f22] rounded shadow-lg"
            >
              <button className="p-1.5 hover:bg-[#36373d] rounded-l transition-colors" title="Add Reaction">
                <Laugh className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
              </button>
              <button className="p-1.5 hover:bg-[#36373d] transition-colors" title="Reply">
                <Reply className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
              </button>
              <button
                onClick={onTranslate}
                disabled={isTranslated || isLoading}
                className="p-1.5 hover:bg-[#36373d] transition-colors disabled:opacity-50"
                title="Translate"
              >
                <Languages className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
              </button>
              <button className="p-1.5 hover:bg-[#36373d] rounded-r transition-colors" title="More">
                <MoreHorizontal className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Translation Result */}
      <AnimatePresence>
        {isTranslated && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="ml-14 mb-3"
          >
            <div className="bg-[#2B2D31] border-l-4 border-[#5865F2] rounded-r px-3 py-2 mt-1">
              <div className="flex items-center gap-1.5 mb-1">
                <Languages className="w-3.5 h-3.5 text-[#5865F2]" />
                <span className="text-[10px] text-[#949BA4] uppercase tracking-wider font-semibold">
                  Translated by DeepSeek
                </span>
              </div>
              <p className="text-[#DBDEE1] text-[15px] leading-[1.375rem]">{message.translation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ml-14 mb-3"
          >
            <div className="bg-[#2B2D31] border-l-4 border-[#5865F2] rounded-r px-3 py-2 mt-1">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 border-2 border-[#5865F2] border-t-transparent rounded-full animate-spin" />
                <span className="text-[12px] text-[#949BA4]">Translating...</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DiscordDemoContent() {
  const [hoveredMessage, setHoveredMessage] = useState<number | null>(null);
  const [translatedMessages, setTranslatedMessages] = useState<Set<number>>(new Set());
  const [loadingMessage, setLoadingMessage] = useState<number | null>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const handleTranslate = async (messageId: number) => {
    if (translatedMessages.has(messageId) || loadingMessage === messageId) return;
    setLoadingMessage(messageId);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoadingMessage(null);
    setTranslatedMessages((prev) => new Set(prev).add(messageId));
  };

  return (
    <div 
      className="h-[420px] flex flex-col"
      style={{ fontFamily: "'gg sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Discord Header */}
      <div className="h-12 bg-[#313338] border-b border-[#26272b] flex items-center justify-between px-4 shrink-0 rounded-t-lg">
        <div className="flex items-center gap-2">
          <Hash className="w-6 h-6 text-[#80848E] cursor-pointer hover:text-[#DBDEE1] transition-colors" strokeWidth={2.5} title="Channel" />
          <span className="text-white font-semibold text-[15px]">general</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Notification Settings" />
          <Pin className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Pinned Messages" />
          <Users className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Member List" />
          <div className="flex items-center bg-[#1e1f22] rounded px-2 py-1 gap-1 cursor-pointer hover:bg-[#26272b] transition-colors" title="Search">
            <Search className="w-4 h-4 text-[#949BA4]" />
            <span className="text-[#949BA4] text-xs">Search</span>
          </div>
          {/* Plugin Status - Moved to Header */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px]" title="Translation Plugin Status">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23A559] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#23A559]" />
            </span>
            <span className="text-[#23A559] font-medium">Plugin Active</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-[#313338]">
        {messages.map((message) => (
          <MessageRow
            key={message.id}
            message={message}
            isHovered={hoveredMessage === message.id}
            isTranslated={translatedMessages.has(message.id)}
            isLoading={loadingMessage === message.id}
            onMouseEnter={() => setHoveredMessage(message.id)}
            onMouseLeave={() => setHoveredMessage(null)}
            onTranslate={() => handleTranslate(message.id)}
          />
        ))}
      </div>

      {/* Input Bar */}
      <div className="px-4 pb-4 pt-2 shrink-0 bg-[#313338] rounded-b-lg">
        <div 
          className={`rounded-lg flex items-center px-4 py-2.5 transition-colors ${
            inputFocused ? "bg-[#40444b]" : "bg-[#383A40]"
          }`}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          tabIndex={0}
        >
          <button className="text-[#B5BAC1] hover:text-[#DBDEE1] transition-colors cursor-pointer" title="Upload File">
            <PlusCircle className="w-6 h-6" />
          </button>
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Message #general"
              className="w-full bg-transparent text-[#DBDEE1] text-[15px] outline-none placeholder-[#949BA4]"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Gift className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Send Gift" />
            <span className="text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] text-xs font-bold transition-colors" title="Send GIF">GIF</span>
            <Sticker className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Send Sticker" />
            <Smile className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" title="Pick Emoji" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Tabbed Component
export function DualInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<"roi" | "discord">("roi");

  const tabs = [
    { id: "roi" as const, label: "AI ROI Calculator", icon: BarChart3, subtitle: "Business Value" },
    { id: "discord" as const, label: "Discord Plugin Demo", icon: Wrench, subtitle: "Technical Execution" },
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Impact & Execution</h2>
        <p className="text-slate-500 mt-1">Switch tabs to see how I calculate business value and build real products.</p>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Segmented Control Tabs */}
        <div className="px-6 pt-5 pb-4 border-b border-slate-100">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content with Animation */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "roi" && (
              <motion.div
                key="roi"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ROICalculatorContent />
              </motion.div>
            )}
            {activeTab === "discord" && (
              <motion.div
                key="discord"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <DiscordDemoContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
