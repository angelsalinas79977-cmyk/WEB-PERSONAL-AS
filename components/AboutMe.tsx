"use client"
import { Brain, Layers, GitBranch, Target } from "lucide-react"

export function AboutMe() {
  const specialties = [
    {
      icon: <Brain className="w-6 h-6 text-cyber-green" />,
      title: "Integración de IA",
      description: "Conecto agentes y modelos de IA (OpenAI, Anthropic) para razonar, clasificar y responder en tus canales de negocio de forma autónoma."
    },
    {
      icon: <GitBranch className="w-6 h-6 text-cyber-blue" />,
      title: "Flujos Automatizados",
      description: "Diseño y opero conexiones automáticas complejas entre herramientas como Make, Zapier y n8n, reduciendo errores humanos a cero."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyber-indigo" />,
      title: "Sistemas CRM & Datos",
      description: "Estructuro bases de datos y pipelines de clientes para que todo lead reciba seguimiento automático e inmediato en tiempo récord."
    },
    {
      icon: <Target className="w-6 h-6 text-cyber-green" />,
      title: "Webs de Conversión",
      description: "Desarrollo sitios web modernos (Next.js, Tailwind CSS) diseñados estratégicamente para captar leads e iniciar tus flujos de venta."
    }
  ]

  return (
    <section id="about" className="relative py-24 bg-[#070709]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-green/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Profile */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-cyber-green">Mi Filosofía</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Orquesto tecnología para que tu negocio trabaje por ti
            </h2>
            
            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                Hola, soy <strong className="text-white">Angel Salinas</strong>. Me especializo en diseñar y operar sistemas de flujo de trabajo integrados con Inteligencia Artificial.
              </p>
              <p>
                No considero que mi trabajo sea solo escribir código o conectar APIs. Mi verdadero valor reside en analizar la estructura operativa de tu negocio, identificar los procesos lentos o repetitivos y rediseñarlos para que funcionen solos de forma automatizada y sin fricciones.
              </p>
              <p className="border-l-2 border-cyber-green pl-4 italic text-text-primary bg-white/[0.01] py-2 rounded-r-lg">
                "Automatizar no es solo ahorrar tiempo, es crear una experiencia consistente y sin fallas para tus clientes."
              </p>
            </div>
          </div>
          
          {/* Right Column: Specialties Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialties.map((item, idx) => (
              <div 
                key={idx}
                className="glass hover:border-white/10 hover:bg-white/[0.02] p-6 rounded-2xl transition-all duration-300 group"
              >
                <div className="p-3 w-fit rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}