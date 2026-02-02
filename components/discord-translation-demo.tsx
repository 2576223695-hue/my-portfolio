"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
} from "lucide-react";

interface Message {
  id: number;
  username: string;
  userColor: string;
  avatar: string;
  timestamp: string;
  content: string;
  translation?: string;
}

const messages: Message[] = [
  {
    id: 1,
    username: "ServerAdmin",
    userColor: "#F0B232",
    avatar: "SA",
    timestamp: "Today at 3:42 PM",
    content: "Important: The server will restart in 5 minutes for the anti-cheat update.",
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

export function DiscordTranslationDemo() {
  const [hoveredMessage, setHoveredMessage] = useState<number | null>(null);
  const [translatedMessages, setTranslatedMessages] = useState<Set<number>>(new Set());
  const [loadingMessage, setLoadingMessage] = useState<number | null>(null);

  const handleTranslate = async (messageId: number) => {
    setLoadingMessage(messageId);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoadingMessage(null);
    setTranslatedMessages((prev) => new Set(prev).add(messageId));
  };

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-2xl border border-[#1e1f22]" 
      style={{ fontFamily: "'gg sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* Discord Window Container */}
      <div className="bg-[#313338] flex flex-col h-[420px] relative">
        
        {/* Header Bar - 48px */}
        <div className="h-12 bg-[#313338] border-b border-[#26272b] flex items-center justify-between px-4 shrink-0">
          {/* Left: Channel Info */}
          <div className="flex items-center gap-2">
            <Hash className="w-6 h-6 text-[#80848E]" strokeWidth={2.5} />
            <span className="text-white font-semibold text-[15px]">general</span>
          </div>
          
          {/* Right: Toolbar Icons */}
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
            <Pin className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
            <Users className="w-5 h-5 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
            <div className="flex items-center bg-[#1e1f22] rounded px-2 py-1 gap-1">
              <Search className="w-4 h-4 text-[#949BA4]" />
              <span className="text-[#949BA4] text-xs">Search</span>
            </div>
          </div>
        </div>

        {/* Chat Area - Scrollable */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {messages.map((message) => (
            <div key={message.id}>
              {/* Message Row */}
              <div
                className={`group relative flex gap-4 py-1 px-2 -mx-2 rounded transition-colors duration-100 ${
                  hoveredMessage === message.id ? "bg-[#2e3035]" : ""
                }`}
                onMouseEnter={() => setHoveredMessage(message.id)}
                onMouseLeave={() => setHoveredMessage(null)}
              >
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                  style={{ backgroundColor: message.userColor }}
                >
                  {message.avatar}
                </div>

                {/* Message Content */}
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

                {/* Action Bar - Floating on Hover (Discord Style) */}
                <AnimatePresence>
                  {hoveredMessage === message.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.1 }}
                      className="absolute -top-4 right-0 flex items-center bg-[#313338] border border-[#1e1f22] rounded shadow-lg"
                    >
                      <button className="p-1.5 hover:bg-[#36373d] rounded-l transition-colors" title="Add Reaction">
                        <Laugh className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
                      </button>
                      <button className="p-1.5 hover:bg-[#36373d] transition-colors" title="Reply">
                        <Reply className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
                      </button>
                      {message.translation && (
                        <button
                          onClick={() => handleTranslate(message.id)}
                          disabled={translatedMessages.has(message.id) || loadingMessage === message.id}
                          className="p-1.5 hover:bg-[#36373d] transition-colors disabled:opacity-50"
                          title="Translate"
                        >
                          <Languages className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
                        </button>
                      )}
                      <button className="p-1.5 hover:bg-[#36373d] rounded-r transition-colors" title="More">
                        <MoreHorizontal className="w-5 h-5 text-[#B5BAC1] hover:text-[#DBDEE1]" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Translation Result - DOM Injection Style */}
              <AnimatePresence>
                {translatedMessages.has(message.id) && message.translation && (
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
                {loadingMessage === message.id && (
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
          ))}
        </div>

        {/* Input Bar - Bottom */}
        <div className="px-4 pb-6 pt-2 shrink-0">
          <div className="bg-[#383A40] rounded-lg flex items-center px-4 py-2.5">
            {/* Plus Button */}
            <button className="text-[#B5BAC1] hover:text-[#DBDEE1] transition-colors">
              <PlusCircle className="w-6 h-6" />
            </button>

            {/* Input Area */}
            <div className="flex-1 mx-4">
              <span className="text-[#949BA4] text-[15px]">Message #general</span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <Gift className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
              <span className="text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] text-xs font-bold transition-colors">GIF</span>
              <Sticker className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
              <Smile className="w-6 h-6 text-[#B5BAC1] cursor-pointer hover:text-[#DBDEE1] transition-colors" />
            </div>
          </div>
        </div>

        {/* Plugin Status Badge - Bottom Left */}
        <div className="absolute bottom-2 left-2">
          <div className="flex items-center gap-1.5 bg-[#2b2d31]/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] border border-[#1e1f22]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23A559] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#23A559]" />
            </span>
            <span className="text-[#949BA4] font-medium">Translation Plugin Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
