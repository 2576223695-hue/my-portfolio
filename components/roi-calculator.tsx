"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Calculator, Clock, DollarSign, Zap } from "lucide-react";

export function ROICalculator() {
  const [weeklyHours, setWeeklyHours] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [efficiencyBoost, setEfficiencyBoost] = useState(50);
  const [displayedSavings, setDisplayedSavings] = useState(0);
  const [displayedHours, setDisplayedHours] = useState(0);

  // Calculate actual values
  const annualSavings = Math.round((weeklyHours * hourlyCost * 52) * (efficiencyBoost / 100));
  const hoursReclaimed = Math.round(weeklyHours * 52 * (efficiencyBoost / 100));

  // Animate numbers counting up
  useEffect(() => {
    const duration = 500;
    const steps = 20;
    const savingsStep = (annualSavings - displayedSavings) / steps;
    const hoursStep = (hoursReclaimed - displayedHours) / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayedSavings(annualSavings);
        setDisplayedHours(hoursReclaimed);
        clearInterval(interval);
      } else {
        setDisplayedSavings(prev => Math.round(prev + savingsStep));
        setDisplayedHours(prev => Math.round(prev + hoursStep));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [annualSavings, hoursReclaimed]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div>
      {/* Section Title */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900">Why Hire Me?</h2>
        <p className="text-slate-500 mt-1">Calculate the ROI of AI-powered workflow automation.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-[#6366f1]" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">AI ROI Calculator</h3>
            <p className="text-xs text-slate-500">See how much AI automation can save you</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Input Section */}
          <div className="p-6 space-y-6">
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
                className="w-full [&_[role=slider]]:bg-[#6366f1] [&_[data-orientation=horizontal]>[data-orientation=horizontal]]:bg-[#6366f1]"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>20%</span>
                <span>80%</span>
              </div>
              <p className="text-xs text-slate-500 italic">
                Based on Aethery & KarNetWork experience, standard workflow automation achieves ~40-60% efficiency.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-6 flex flex-col justify-center items-center text-center border-l border-slate-100">
            <p className="text-sm font-medium text-slate-500 mb-2">Annual Savings</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={displayedSavings}
                initial={{ scale: 0.95, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#6366f1] mb-4"
              >
                {formatCurrency(displayedSavings)}
              </motion.div>
            </AnimatePresence>
            
            <div className="w-16 h-px bg-slate-200 my-4" />
            
            <p className="text-sm font-medium text-slate-500 mb-1">Hours Reclaimed Annually</p>
            <motion.div
              key={displayedHours}
              initial={{ scale: 0.95, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-semibold text-slate-700"
            >
              {displayedHours.toLocaleString()} hours
            </motion.div>
            
            <p className="text-xs text-slate-400 mt-4 max-w-[200px]">
              Based on {efficiencyBoost}% efficiency improvement through AI automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
