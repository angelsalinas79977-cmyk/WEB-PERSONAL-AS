"use client"
import { Zap, Layout, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react"

export function Services() {
  const servicesList = [
    {
      badge: "Más Solicitado",
      badgeColor: "bg-cyber-green/10 text-cyber-green border-cyber-green/20",
      icon: <Zap className="w-8 h-8 text-cyber-green" />,
      title: "Automatización de Procesos con IA",
      subtitle: "Elimina tareas manuales y repetitivas",
      description: "Creamos flujos automatizados que conectan tus herramientas cotidianas y usan inteligencia artificial para clasificar, redactar respuestas, procesar datos y notificar en tiempo real.",
      features: [
        "Respuestas automáticas inteligentes por email o chat",
        "Conexión e integración completa entre tus apps (Make/Zapier)",
        "Generación automática de reportes y documentos",
        "Sistemas de alertas automáticas para tu equipo"
      ]
    },
    {
      badge: "Alta Conversión",
      badgeColor: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
      icon: <Layout className="w-8 h-8 text-cyber-blue" />,
      title: "Desarrollo Web Premium",
      subtitle: "Tu mejor carta de presentación digital",
      description: "Diseñamos y desarrollamos sitios web estéticos, rápidos y adaptados a dispositivos móviles. El primer paso crucial para captar clientes interesados en tus servicios.",
      features: [
        "Arquitectura de conversión optimizada",
        "Velocidad extrema y SEO técnico avanzado",
        "Diseño estético y profesional (Modo Oscuro/Claro)",
        "Integración nativa con formularios de contacto automáticos"
      ]
    },
    {
      badge: "Retención y Ventas",
      badgeColor: "bg-cyber-indigo/10 text-cyber-indigo border-cyber-indigo/20",
      icon: <HeartHandshake className="w-8 h-8 text-cyber-indigo" />,
      title: "Sistemas de Seguimiento (CRM)",
      subtitle: "Nunca pierdas un cliente potencial",
      description: "Implementamos sistemas de seguimiento para automatizar la relación con tus leads desde el primer contacto hasta el cierre de la venta, garantizando una atención 24/7.",
      features: [
        "Estructura y configuración de pipelines de ventas",
        "Recordatorios automáticos para que ningún lead se enfríe",
        "Envío programado de seguimientos personalizados",
        "Historial unificado y centralizado de contactos"
      ]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="relative py-24 bg-[#050507]">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyber-blue/[0.02] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyber-indigo/[0.02] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-green">Lo que hago</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Soluciones diseñadas para generar resultados
          </h2>
          <p className="text-text-secondary">
            Estructuro sistemas integrados que no solo se ven profesionales, sino que optimizan tu tiempo y aumentan tus tasas de conversión.
          </p>
        </div>
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="glass hover:border-white/10 hover:bg-white/[0.01] p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                    {service.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-green transition-colors">{service.title}</h3>
                <span className="text-xs text-text-muted font-medium block mb-4">{service.subtitle}</span>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">{service.description}</p>
                
                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-cyber-green flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.03] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                Solicitar este Servicio
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}