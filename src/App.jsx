import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-violet-200">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-5 border-b sticky top-0 bg-white/80 backdrop-blur z-50">
        <h1 className="font-black text-xl tracking-tighter">RUKHSANA<span className="text-violet-600">.SEO</span></h1>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <a href="#skills" className="hover:text-violet-600">Skills</a>
          <a href="#services" className="hover:text-violet-600">Services</a>
          <a href="#projects" className="hover:text-violet-600">Projects</a>
          <a href="#contact" className="bg-zinc-900 text-white px-6 py-2.5 rounded-full hover:bg-violet-600 transition">Hire Me</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available for Projects
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-5">
            I Rank Websites <br/> <span className="text-violet-600">& Build Them.</span>
          </h2>
          <p className="text-zinc-500 text-[15px] leading-6 max-w-lg mb-8">
            Hi, I'm <b className="text-zinc-900">Rukhsana Maqsood</b> - SEO Specialist & Web Developer. I help businesses grow with On-Page, Off-Page SEO and High-Converting Websites. I also know how to hunt high-paying clients.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-medium">Let's Talk</a>
            <a href="#projects" className="border px-8 py-3 rounded-full text-sm font-medium">View Work</a>
          </div>
          <div className="flex gap-8 mt-10">
            <div><p className="text-2xl font-black">50+</p><p className="text-xs text-zinc-500">Websites Ranked</p></div>
            <div><p className="text-2xl font-black">30+</p><p className="text-xs text-zinc-500">Websites Developed</p></div>
            <div><p className="text-2xl font-black">100%</p><p className="text-xs text-zinc-500">Client Satisfaction</p></div>
          </div>
        </div>
        <div className="bg-zinc-50 border rounded-[32px] p-6 md:p-8">
          <div className="bg-white border rounded-2xl p-5 shadow-sm mb-4">
            <p className="text-xs font-bold text-zinc-400 mb-3">CORE SKILLS</p>
            <div className="space-y-3">
              <div><div className="flex justify-between text-sm mb-1"><span>On-Page SEO</span><span>95%</span></div><div className="h-2 bg-zinc-100 rounded-full"><div className="h-2 bg-violet-600 w-[95%] rounded-full"></div></div></div>
              <div><div className="flex justify-between text-sm mb-1"><span>Off-Page SEO</span><span>90%</span></div><div className="h-2 bg-zinc-100 rounded-full"><div className="h-2 bg-zinc-900 w-[90%] rounded-full"></div></div></div>
              <div><div className="flex justify-between text-sm mb-1"><span>Client Hunting</span><span>92%</span></div><div className="h-2 bg-zinc-100 rounded-full"><div className="h-2 bg-green-500 w-[92%] rounded-full"></div></div></div>
              <div><div className="flex justify-between text-sm mb-1"><span>Web Development</span><span>85%</span></div><div className="h-2 bg-zinc-100 rounded-full"><div className="h-2 bg-orange-400 w-[85%] rounded-full"></div></div></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-900 text-white p-4 rounded-2xl"><p className="text-xs opacity-60">Tools</p><p className="font-bold text-sm mt-1">Ahrefs, SEMrush, GSC, GA4, Screaming Frog</p></div>
            <div className="bg-violet-600 text-white p-4 rounded-2xl"><p className="text-xs opacity-80">Stack</p><p className="font-bold text-sm mt-1">React, Tailwind, WordPress, Next.js</p></div>
          </div>
        </div>
      </section>

      {/* SKILLS DETAILED */}
      <section id="skills" className="bg-zinc-50 border-y px-6 md:px-20 py-16">
        <h3 className="text-3xl font-black tracking-tighter mb-10">My Expertise</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border p-6 rounded-[24px]">
            <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center mb-4">🔍</div>
            <h4 className="font-bold">On-Page SEO</h4>
            <p className="text-sm text-zinc-500 mt-2 leading-6">Keyword Research, Content Optimization, Meta Tags, Internal Linking, Schema Markup, Page Speed, Core Web Vitals.</p>
          </div>
          <div className="bg-white border p-6 rounded-[24px]">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-4">🔗</div>
            <h4 className="font-bold">Off-Page SEO</h4>
            <p className="text-sm text-zinc-500 mt-2 leading-6">High Authority Link Building, Guest Posting, Profile Backlinks, Brand Mentions, Competitor Backlink Analysis.</p>
          </div>
          <div className="bg-white border p-6 rounded-[24px] border-violet-200 bg-violet-50/50">
            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">💼</div>
            <h4 className="font-bold">Client Hunting Skill</h4>
            <p className="text-sm text-zinc-600 mt-2 leading-6">Upwork, Fiverr, LinkedIn Outreach, Cold Emailing, Portfolio Building, Proposal Writing - I know how to get high-paying clients.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-20 py-16">
        <h3 className="text-3xl font-black tracking-tighter mb-2">Services</h3>
        <p className="text-zinc-500 mb-8 text-sm">Jo kaam main karti hu</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-6 rounded-2xl hover:bg-zinc-900 hover:text-white transition group"><h4 className="font-bold">SEO Audit</h4><p className="text-sm opacity-70 mt-2">Full website SEO audit with action plan.</p></div>
          <div className="border p-6 rounded-2xl hover:bg-zinc-900 hover:text-white transition group"><h4 className="font-bold">Website SEO</h4><p className="text-sm opacity-70 mt-2">Rank your site on Google's 1st page.</p></div>
          <div className="border p-6 rounded-2xl hover:bg-zinc-900 hover:text-white transition group"><h4 className="font-bold">Web Development</h4><p className="text-sm opacity-70 mt-2">Modern, fast & responsive websites.</p></div>
          <div className="border p-6 rounded-2xl bg-violet-600 text-white"><h4 className="font-bold">Client Hunting Coaching</h4><p className="text-sm opacity-80 mt-2">I teach how to find clients from scratch.</p></div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 pb-20">
        <div className="bg-zinc-900 rounded-[32px] p-8 md:p-14 text-white grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-black tracking-tighter">Have an idea? <br/> Let's rank it.</h3>
            <p className="text-zinc-400 mt-4 text-sm">SEO ya Website ke liye contact karein. 24 hours me reply.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-zinc-900">
            <p className="font-bold mb-4">Contact Info</p>
            <p className="text-sm">📧 rukhsana.seo@gmail.com</p>
            <p className="text-sm mt-2">📍 Lahore, Pakistan - Available Worldwide</p>
            <div className="flex gap-2 mt-5">
              <span className="bg-zinc-100 px-3 py-1 rounded-full text-xs">Upwork</span>
              <span className="bg-zinc-100 px-3 py-1 rounded-full text-xs">Fiverr</span>
              <span className="bg-zinc-100 px-3 py-1 rounded-full text-xs">LinkedIn</span>
            </div>
            <a href="mailto:rukhsana.seo@gmail.com" className="block text-center bg-zinc-900 text-white py-3 rounded-full mt-6 text-sm">Send Message</a>
          </div>
        </div>
        <p className="text-center text-xs text-zinc-400 mt-8">© 2026 Rukhsana Maqsood - SEO & Web Developer</p>
      </section>

    </div>
  )
}

export default App