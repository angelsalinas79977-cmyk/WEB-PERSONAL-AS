"use client"
import { Search, Map, Construction, LineChart } from "lucide-react"

export function Process() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-6 h-6 text-cyber-green" />,
      title: "Auditoría Operativa",
      description: "Analizamos en detalle tu día a día, mapeamos tus flujos de información manuales e identificamos dónde estás perdiendo tiempo y dinero."
    },
    {
      num: "02",
      icon: <Map className="w-6 h-6 text-cyber-blue" />,
      title: "Diseño del Sistema",
      description: "Estructuramos un mapa visual del nuevo flujo propuesto, detallando qué herramientas se conectarán y dónde intervendrá la Inteligencia Artificial."
    },
    {
      num: "03",
      icon: <Construction className="w-6 h-6 text-cyber-indigo" />,
      title: "Construcción e Integración",
      description: "Desarrollamos tu sitio web premium, programamos las automatizaciones (Make/Zapier) e integramos los agentes de IA con tu CRM."
    },
    {
      num: "04",
      icon: <LineChart className="w-6 h-6 text-cyber-green" />,
      title: "Pruebas y Lanzamiento",
      description: "Realizamos simulaciones completas para asegurar que el sistema responda en segundos y quede listo para operar 24/7 sin fallas."
    }
  ]

  return (
    <section id="process" className="relative py-24 bg-[#050507]">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyber-green/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-green">Metodología</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Cómo transformamos tu operación
          </h2>
          <p className="text-text-secondary">
            Un proceso estructurado, transparente y ágil diseñado para minimizar tu esfuerzo y maximizar la eficiencia de tu negocio.
          </p>
        </div>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Horizontal line for desktop, hidden on mobile */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-cyber-green via-cyber-indigo to-cyber-blue opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                {/* Step circle / icon */}
                <div className="relative z-10 w-24 h-24 rounded-full glass border border-white/5 flex items-center justify-center mb-6 group-hover:border-cyber-green/30 group-hover:bg-cyber-green/[0.02] transition-all duration-300">
                  <span className="absolute top-2 right-4 text-[10px] font-mono font-bold text-text-muted">{step.num}</span>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed px-4 md:px-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}