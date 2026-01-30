"use client";

import React from "react"

import { Mail, MessageCircle, Send, Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CopyableFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function CopyableField({ icon, label, value }: CopyableFieldProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        description: "Copied to clipboard!",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        description: "Failed to copy",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group text-left"
    >
      <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900">{label}</p>
        <p className="text-sm text-slate-500 truncate">{value}</p>
      </div>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="h-4 w-4 text-[#6366f1]" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </div>
    </button>
  );
}

export function ContactCard() {
  return (
    <div className="rounded-2xl bg-card border border-slate-200 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Let's Build Something Great</h2>
      <p className="text-slate-600 mb-6 leading-relaxed">
        Looking for someone who understands both the product and the people? 
        I'm open to conversations about exciting opportunities.
      </p>
      
      <div className="space-y-4 mb-6">
        <CopyableField
          icon={<Mail className="h-5 w-5 text-slate-600" />}
          label="Email"
          value="z25762236395@hotmail.com"
        />
        
        <CopyableField
          icon={<MessageCircle className="h-5 w-5 text-slate-600" />}
          label="Discord"
          value="daddy_verzide"
        />
        
        <CopyableField
          icon={<MessageCircle className="h-5 w-5 text-slate-600" />}
          label="WeChat"
          value="DaddyVerzide"
        />
        
        <CopyableField
          icon={<Send className="h-5 w-5 text-slate-600" />}
          label="Phone"
          value="188-0509-0313"
        />
      </div>
      
      <p className="text-xs text-slate-400">
        Available for: Product consulting, startup advisory, community building, or full-time roles at mission-driven companies.
      </p>
    </div>
  );
}
