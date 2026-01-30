import { HeroSection } from "@/components/hero-section";
import { StatsCard } from "@/components/stats-card";
import { SkillCard } from "@/components/skill-card";
import { CoreCompetencyCard } from "@/components/core-competency-card";
import { ProjectCard } from "@/components/project-card";
import { ContactCard } from "@/components/contact-card";
import { TechStackCard } from "@/components/tech-stack-card";
import { ROICalculator } from "@/components/roi-calculator";
import { Lightbulb, Bot, Users, Code, Gamepad2, Globe, Store, MessageSquare, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6366f1]" />
            <span className="text-sm font-medium text-slate-600">Wensong Huang</span>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Hero Section - Spans 2 columns on lg */}
          <div className="md:col-span-2 lg:col-span-2">
            <HeroSection />
          </div>

          {/* Tech Stack Card */}
          <div className="lg:col-span-1">
            <TechStackCard />
          </div>

          {/* Stats Card - Full width on mobile, 3 cols on lg */}
          <div className="md:col-span-2 lg:col-span-3">
            <StatsCard />
          </div>

          {/* Section Title */}
          <div id="skills" className="md:col-span-2 lg:col-span-3 mt-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900">What I Do Best</h2>
            <p className="text-slate-500 mt-1">A unique blend of product thinking, technical execution, and operational excellence.</p>
          </div>

          {/* Skill Cards */}
          <SkillCard
            icon={Lightbulb}
            title="Product Strategy"
            description="Lifecycle management from 0-1, economic system design, OKR frameworks"
            skills={["Product Roadmap", "Market Analysis", "User Research", "Metrics Design"]}
          />
          
          <SkillCard
            icon={Bot}
            title="AI & Automation"
            description="Prompt engineering, workflow automation, AIGC integration"
            skills={["Cursor/Windsurf", "ChatGPT/Gemini", "Midjourney", "Suno", "v0.dev"]}
          />
          
          <SkillCard
            icon={Users}
            title="Community Growth"
            description="Discord/Reddit operations, cross-platform campaigns, UGC ecosystems"
            skills={["Discord.js", "Community Scaling", "Crisis Management", "Multi-language Ops"]}
          />
          
          <SkillCard
            icon={Code}
            title="Technical Execution"
            description="Full-stack development prototyping, process automation"
            skills={["React/Web Dev", "Python Scripting", "Bot Development", "Data Analysis"]}
          />

          {/* Core Competency - Spans 2 columns */}
          <div className="md:col-span-2">
            <CoreCompetencyCard />
          </div>

          {/* ROI Calculator */}
          <div className="md:col-span-2 lg:col-span-3 mt-4">
            <ROICalculator />
          </div>

          {/* Work Experience Section Title */}
          <div className="md:col-span-2 lg:col-span-3 mt-4">
            <h2 className="text-2xl font-bold text-slate-900">Work Experience</h2>
            <p className="text-slate-500 mt-1">Professional experience in community operations and product management.</p>
          </div>

          {/* Work Experience Card */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 hover:shadow-lg transition-all duration-300">
              {/* Background Image - Banner style */}
              <div className="absolute inset-0">
                <img 
                  src="/images/souler-banner.png" 
                  alt="Souler - The World's First AI Live Speaker"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900/95" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 pt-8">
                {/* Header with company info and button */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Shenzhen Shule Co., Ltd.</h3>
                      <p className="text-[#818cf8] text-sm font-medium">Discord Operations Intern</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-sm text-slate-300">Aug 2025 - Nov 2025</span>
                    <a 
                      href="https://souler.ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1] hover:bg-[#4f46e5] rounded-lg text-sm font-medium text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit souler.ai
                    </a>
                  </div>
                </div>
                
                {/* Responsibilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/40 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#c7d2fe]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Community Cold Start</p>
                      <p className="text-xs text-slate-300 mt-1">Built Discord community architecture from 0 to 1, precisely identifying and retaining 100 core seed users to lay the foundation for the product launch.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/40 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-[#c7d2fe]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">AI Workflow Efficiency</p>
                      <p className="text-xs text-slate-300 mt-1">Orchestrated the "Soul-Sync" AI Music Festival. Leveraged Midjourney for key visual generation and Suno for promotional audio, reducing asset production time by 50%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/40 flex items-center justify-center shrink-0">
                      <Code className="w-4 h-4 text-[#c7d2fe]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Visualized Communication (v0.dev)</p>
                      <p className="text-xs text-slate-300 mt-1">Utilized v0.dev to rapidly generate high-fidelity React/UI prototypes to replace traditional text requirements, bridging the information gap between Dev and Marketing and improving alignment efficiency by 50%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#6366f1]/40 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4 text-[#c7d2fe]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Intelligent Documentation</p>
                      <p className="text-xs text-slate-300 mt-1">Used Gemini 1.5 Pro to process unstructured meeting records, automatically distilling and generating standardized Kickstarter / Product Hunt launch SOP documents.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section Title */}
          <div className="md:col-span-2 lg:col-span-3 mt-4">
            <h2 className="text-2xl font-bold text-slate-900">Project Experience</h2>
            <p className="text-slate-500 mt-1">Building products and communities from the ground up.</p>
          </div>

          {/* Project Cards */}
          <ProjectCard
            icon={Gamepad2}
            iconBg="bg-slate-100"
            title="KarNetWork"
            role="Founder & Lead Operator"
            period="2020 - 2022"
            description="Minecraft server ecosystem built from scratch, achieving market-leading performance through precise numerical planning and economic system design."
            highlights={[
              "450+ concurrent players, surpassing top competitor Syuu",
              "Built UGC creator incentive system with standardized SOP",
              "Achieved 0-cost traffic through B站 organic content coverage",
              "Created role-swap mechanism to resolve team conflicts"
            ]}
            thumbnail="/images/karnetwork.gif"
            caseStudyUrl="https://www.bilibili.com/video/BV1vz4y1X7Es/?spm_id_from=333.337.search-card.all.click"
          />
          
          <ProjectCard
            icon={Globe}
            iconBg="bg-slate-100"
            title="Aethery"
            role="Community Consultant"
            period="2025"
            description="International gaming community operations on Discord, building cross-cultural engagement and automated service workflows."
            highlights={[
              "Built Discord community from 0 to 1.2K members",
              "Deployed ChatGPT + Discord Bot for 24/7 intent recognition",
              "Created Reddit x Discord cross-platform campaigns",
              "Built BetterDiscord translation plugin via Windsurf"
            ]}
            thumbnail="/images/aethery.png"
            caseStudyUrl="https://discord.gg/vPPVQPrRZ7"
          />
          
          <ProjectCard
            icon={Store}
            iconBg="bg-slate-100"
            title="Yosen Club"
            role="Store Manager"
            period="2023 - Present"
            description="Led transformation of campus study room into cultural space, optimizing operations and building student team."
            highlights={[
              "35% traffic increase with 20% cost reduction",
              "Built 6-person student operations team",
              "Created service manual with LLM assistance",
              "Reduced new employee training from 7 to 3 days"
            ]}
            thumbnail="/images/yosen-club.jpg"
            caseStudyUrl="https://www.douyin.com/user/MS4wLjABAAAAEP_IaZbGLI8prPAMTOhHvKd0N_pVmh8Y5AltFKVUYpnQi9CJ5NBHTvuRQn5vvTRl?from_tab_name=main"
          />

          {/* Contact Card - Spans 2 columns */}
          <div id="contact" className="md:col-span-2 lg:col-span-2 scroll-mt-24">
            <ContactCard />
          </div>

          {/* Footer note with Resume button */}
          <div className="rounded-2xl bg-slate-100 border border-slate-200 p-6 flex flex-col justify-center">
            <p className="text-sm text-slate-600 leading-relaxed">
              Let's discuss how we can create impact together.
            </p>
            <p className="text-xs text-slate-400 mt-2 mb-4">
              21 y/o • Male • Bachelor's Candidate
            </p>
            <a 
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-slate-50 px-4 py-2.5 text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" x2="8" y1="13" y2="13"/>
                <line x1="16" x2="8" y1="17" y2="17"/>
                <line x1="10" x2="8" y1="9" y2="9"/>
              </svg>
              View Full Resume
            </a>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-slate-500">
              © 2025 Wensong Huang. Built with passion and AI.
            </p>
            <p className="text-xs text-slate-400">
              Designed with v0.dev, Refined with Cursor, Deployed on Vercel. 100% AI-Assisted Workflow.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
