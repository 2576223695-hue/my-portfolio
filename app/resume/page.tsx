import { ArrowLeft, Mail, Phone, MessageCircle, Briefcase, GraduationCap, Lightbulb, Wrench, Users, Bot, Target } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">黄文嵩</h1>
              <p className="text-lg text-slate-600">21岁 | 男 | 本科</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#6366f1]" />
                <span>18805090313</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6366f1]" />
                <span>z2576223695@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#6366f1]" />
                <span>WeChat: DaddyVerzide</span>
              </div>
            </div>
          </div>
        </header>

        {/* Core Competencies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#6366f1]/10">
              <Target className="w-5 h-5 text-[#6366f1]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">核心优势</h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">项目全生命周期统筹</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                具备 3 年创业主理经验，精通从 0 到 1 的产品研发与商业化落地。擅长经济系统设计与数值风险把关，拥有在激烈竞争中通过精细化运营超越头部竞品、实现高 ROI（投资回报率）增长的实战成功案例。
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">AI 驱动的工程化思维</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                熟练掌握 Cursor / Windsurf 与 v0.dev，具备"代码级"问题解决能力。能独立完成从需求分析、UI 原型绘制到自动化脚本优化的全流程闭环，打破非技术岗位的执行边界。
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">产品落地与创业经验</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                拥有从 0 到 1 搭建产品生态的完整经历，主导 Minecraft 服务器与实体店转型项目，实现用户与商业价值双增长。
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-2">跨文化社群运营</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                具备 Discord / Reddit 国际社区搭建经验，成功构建多语言社群生态，有效管控跨时区舆情风险。
              </p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#6366f1]/10">
              <Briefcase className="w-5 h-5 text-[#6366f1]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">工作经历</h2>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="font-semibold text-slate-900">深圳数乐有限公司</h3>
              <span className="text-sm text-slate-500">2025-08 至 2025-11</span>
            </div>
            <p className="text-[#6366f1] text-sm font-medium mb-4">Discord 运营（实习）</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-[#6366f1] mt-1">•</span>
                <span><strong>社群运营：</strong>负责 Discord 海外游戏社群的日常运营与维护，包括用户活跃度提升、内容策划及社区氛围营造。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#6366f1] mt-1">•</span>
                <span><strong>用户服务：</strong>处理玩家工单与反馈，协调解决游戏问题与账号相关事务，确保用户满意度。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#6366f1] mt-1">•</span>
                <span><strong>活动策划：</strong>参与策划并执行社群活动，通过线上互动提升用户粘性与社区活跃度。</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#6366f1] mt-1">•</span>
                <span><strong>跨部门协作：</strong>与产品、技术团队紧密配合，及时反馈用户需求与问题，推动产品优化迭代。</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Project Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#6366f1]/10">
              <Lightbulb className="w-5 h-5 text-[#6366f1]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">项目经历</h2>
          </div>
          <div className="space-y-6">
            {/* KarNetWork */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-slate-900">KarNetWork (自主创业：我的世界服务器)</h3>
                <span className="text-sm text-slate-500">2020-06 至 2022-07</span>
              </div>
              <p className="text-[#6366f1] text-sm font-medium mb-4">创始人/总运营</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>大型项目统筹与商业化落地：</strong>作为 KarNetWork 项目主负责人，带领团队完成产品从 0 到 1 的研发与生态搭建。在数值策划与经济系统构建中起到核心把关审核作用，有效规避了私服行业常见的"神权滥用"与"数值失衡"风险。通过精细化运营，实现同时在线人数突破 450+（超越当时头部竞品 syuu），以极低的投流成本实现了高 ROI 的用户增长与留存。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>冲突解决与建设：</strong>针对团队年轻化特点，首创"思法互换"（角色互换）情景模拟机制，有效化解策划与技术岗位的协同矛盾，团队留存率显著提升。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>UGC 生态构建：</strong>搭建玩家二创激励体系，制定皮肤与场景渲染的标准 S.O.P.，降低创作门槛，引导玩家在 B 站自发产出海量视频，覆盖 20 个搜索页，实现 0 成本流量获取。</span>
                </li>
              </ul>
            </div>

            {/* Aethery */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-slate-900">Aethery (海外游戏社群运营)</h3>
                <span className="text-sm text-slate-500">2025-03 至 2025-07</span>
              </div>
              <p className="text-[#6366f1] text-sm font-medium mb-4">顾问</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>社群冷启动：</strong>从 0 到 1 搭建 Discord 社群架构，精准挖掘并维护 100 名核心种子用户，奠定产品初期用户基础。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>AI 工作流提效：</strong>策划《Soul-Sync》AI 音乐节，利用 Midjourney 生成主视觉、Suno 生成预热音频，将物料制作周期缩短 50%。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>可视化需求沟通：</strong>利用 v0.dev 快速输出高保真 React/UI 原型替代传统文字文档，解决开发与市场部信息壁垒，跨部门对齐效率提升 50%。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>智能化文档建设：</strong>使用 Gemini 1.5 Pro 处理非结构化会议记录，自动提炼并生成标准化的 Kickstarter / Product Hunt 上架 SOP 文档。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>自动化服务流：</strong>结合 ChatGPT + Discord Bot 接口优化工单逻辑，实现 24 小时无时差意图识别（游戏问题/账号租赁）与即时响应。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>跨平台联动：</strong>策划 Reddit x Discord 跨平台联动活动，创建 #Guild Aethery 话题标签，通过 UGC 内容裂变提升社区活跃度，社群最大人数达到 1200 人。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>跨语言沟通：</strong>利用 Windsurf 制作基于 BetterDiscord 的翻译插件，辅助人工处理多语言工单，将跨语言沟通效率提升 40%。</span>
                </li>
              </ul>
            </div>

            {/* 时间书屋 */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="font-semibold text-slate-900">时间书屋 (学校大创)</h3>
                <span className="text-sm text-slate-500">2023-03 至今</span>
              </div>
              <p className="text-[#6366f1] text-sm font-medium mb-4">店长</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>经营转型与增长：</strong>主导店铺从自习室向综合文化空间转型，优化供应链使物料成本降低 20%，同期客流量提升 35%。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>团队梯队搭建：</strong>从 0 组建 6 人学生运营小组，建立"老带新"排班机制，确保日常运营标准化。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>SOP 标准化：</strong>利用 LLM (Claude/GPT) 辅助编写《服务标准手册》，将非标业务结构化，新员工培训周期从 7 天缩短至 3 天。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>项目影响力：</strong>商业模式创新获《沧州晚报》专题报道（2024.04），被誉为"校园空间改造的创新典范"。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#6366f1]/10">
              <GraduationCap className="w-5 h-5 text-[#6366f1]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">教育背景</h2>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-semibold text-slate-900">沧州师范学院</h3>
              <span className="text-sm text-slate-500">2022-07 至 2026-07</span>
            </div>
            <p className="text-slate-600 text-sm mt-2">本科</p>
          </div>
        </section>

        {/* Professional Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#6366f1]/10">
              <Wrench className="w-5 h-5 text-[#6366f1]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">专业技能</h2>
          </div>
          <div className="space-y-6">
            {/* AIGC */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-[#6366f1]" />
                <h3 className="font-semibold text-slate-900">AIGC 与智能化工作流</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>提示词工程：</strong>精通 Gemini / ChatGPT，擅长设计结构化 Prompt 进行竞品分析、多语言公文撰写及逻辑推演。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>辅助开发：</strong>熟练使用 Cursor / Windsurf 智能编辑器，具备阅读/修改基础代码（Python/Web）及部署自动化脚本的能力。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>原型设计：</strong>掌握 v0.dev 生成高保真界面代码，能将抽象需求在 10 分钟内转化为可视化原型。</span>
                </li>
              </ul>
            </div>

            {/* Product & Operations */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#6366f1]" />
                <h3 className="font-semibold text-slate-900">产品与运营技能</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>团队管理：</strong>精通 OKR 目标拆解、分布式团队协作、青少年/跨代际沟通及冲突调解。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>全栈运营：</strong>熟悉产品全生命周期（0-1），精通 Discord/Reddit 生态搭建、私域流量运营及危机公关。</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1] mt-1">•</span>
                  <span><strong>综合能力：</strong>具备供应链优化意识，熟练制作商业报表及进行竞品数据分析。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-slate-500">
              © 2025 黄文嵩. Built with passion and AI.
            </p>
            <Link 
              href="/" 
              className="text-sm text-[#6366f1] hover:text-[#4f46e5] transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
