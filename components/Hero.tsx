"use client"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Zap, ShieldCheck } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#050507]"
    >
      {/* Decorative gradient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-cyber-indigo/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.07] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Copy Column */}
        <motion.div 
          className="lg:col-span-7 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-green/10 border border-cyber-green/20 text-xs font-semibold uppercase tracking-wider text-cyber-green mb-6"
          >
            <Bot className="w-4 h-4" />
            Sistemas de Flujo Impulsados por IA
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Escala tu negocio con <span className="text-gradient-cyber font-extrabold">automatizaciones</span> inteligentes
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
          >
            Diseño e implemento flujos de trabajo con Inteligencia Artificial que eliminan tareas repetitivas, mejoran el seguimiento de tus clientes y aceleran tus ventas sin contratar más personal.
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-black bg-cyber-green hover:bg-cyber-green-light transition-all shadow-lg shadow-cyber-green/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              Hablemos de tu Proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("calculator")}
              className="px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Ver Calculadora de Ahorro
            </button>
          </motion.div>
          
          {/* Trust points */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-cyber-green flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">Eficacia 10x</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Bot className="w-5 h-5 text-cyber-blue flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">IA Integrada</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyber-indigo flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">Soporte Continuo</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right Dashboard Visualization Column */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Main glass box */}
          <div className="glass-glow rounded-3xl p-6 relative w-full aspect-square sm:aspect-auto overflow-hidden">
            {/* Header of dashboard */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyber-green animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-text-secondary">AI Flow Operator Active</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Procesos Activos</span>
                <div className="text-2xl font-bold text-white mt-1">24</div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <span className="text-[10px] uppercase tracking-wider text-text-muted">Tareas Ejecutadas</span>
                <div className="text-2xl font-bold text-cyber-green mt-1">128.4K</div>
              </div>
            </div>
            
            {/* Simulated log output stream */}
            <div className="bg-[#030304]/80 rounded-2xl p-4 font-mono text-[10px] text-text-secondary h-44 overflow-hidden relative border border-white/5 flex flex-col justify-end gap-2">
              <div className="absolute top-3 left-4 text-[9px] text-text-muted uppercase tracking-wider">AI Operations Log</div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="flex items-center gap-2 text-cyber-green/90"
              >
                <span>[OK]</span> <span>Lead capturing workflow triggered</span>
              </motion.div>
              <div className="flex items-center gap-2 text-cyber-blue">
                <span>[INFO]</span> <span>AI Agent parsed customer request: 94% confidence</span>
              </div>
              <div className="flex items-center gap-2">
                <span>[SYS]</span> <span>Syncing contact data with Hubspot CRM</span>
              </div>
              <div className="flex items-center gap-2 text-cyber-indigo">
                <span>[AUTO]</span> <span>Created follow-up task + WhatsApp trigger</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <span>[SYS]</span> <span>Waiting for client interactions...</span>
              </div>
            </div>
            
            {/* Micro-interactive badge */}
            <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
              <span>Velocidad de Respuesta</span>
              <span className="font-mono text-white bg-cyber-green/10 border border-cyber-green/20 px-2 py-1 rounded-md">&lt; 1.2 segundos</span>
            </div>
          </div>
          
          {/* Underlay glow element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-cyber-indigo/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}