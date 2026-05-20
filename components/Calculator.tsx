"use client"
import { useState } from "react"
import { Sparkles, Calendar, Clock, DollarSign } from "lucide-react"

interface TaskOption {
  id: string;
  name: string;
  hoursSavedPerLead: number;
  baseHoursPerMonth: number;
}

export function Calculator() {
  const [selectedTasks, setSelectedTasks] = useState<string[]>([
    "lead-followup",
    "crm-sync"
  ])
  const [monthlyLeads, setMonthlyLeads] = useState<number>(30)
  const [hourlyRate, setHourlyRate] = useState<number>(25)

  const tasks: TaskOption[] = [
    {
      id: "lead-followup",
      name: "Seguimiento personalizado de leads (email/WhatsApp)",
      hoursSavedPerLead: 0.5,
      baseHoursPerMonth: 5
    },
    {
      id: "crm-sync",
      name: "Sincronización manual de contactos en CRM y hojas de cálculo",
      hoursSavedPerLead: 0.2,
      baseHoursPerMonth: 2
    },
    {
      id: "ai-inquiries",
      name: "Clasificación y respuesta inicial automatizada con IA",
      hoursSavedPerLead: 0.4,
      baseHoursPerMonth: 8
    },
    {
      id: "report-gen",
      name: "Generación de reportes semanales y facturación automática",
      hoursSavedPerLead: 0,
      baseHoursPerMonth: 12
    }
  ]

  const handleTaskToggle = (id: string) => {
    setSelectedTasks(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id) 
        : [...prev, id]
    )
  }

  // Calculate savings
  let totalHoursSavedPerMonth = 0
  selectedTasks.forEach(taskId => {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
      totalHoursSavedPerMonth += task.baseHoursPerMonth + (task.hoursSavedPerLead * monthlyLeads)
    }
  })
  totalHoursSavedPerMonth = Math.round(totalHoursSavedPerMonth * 10) / 10

  const moneySavedPerMonth = Math.round(totalHoursSavedPerMonth * hourlyRate)
  const moneySavedPerYear = moneySavedPerMonth * 12
  const workDaysRecoveredPerYear = Math.round((totalHoursSavedPerMonth * 12) / 8)

  return (
    <section id="calculator" className="relative py-24 bg-[#070709] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyber-indigo/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-green">Interactividad</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Calcula cuánto te cuesta la operación manual
          </h2>
          <p className="text-text-secondary">
            Selecciona las tareas que realizas hoy de forma manual y descubre cuántas horas y dinero recuperarías implementando sistemas automáticos con IA.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left panel: Config */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyber-green" />
                Configurar Tareas Operativas
              </h3>
              
              {/* Checkboxes */}
              <div className="space-y-4 mb-8">
                {tasks.map(task => {
                  const isChecked = selectedTasks.includes(task.id)
                  return (
                    <div 
                      key={task.id}
                      onClick={() => handleTaskToggle(task.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-center gap-4 ${
                        isChecked 
                          ? "bg-cyber-green/5 border-cyber-green/30" 
                          : "bg-white/[0.01] border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked 
                          ? "bg-cyber-green border-cyber-green text-black" 
                          : "border-white/20"
                      }`}>
                        {isChecked && (
                          <svg className="w-3.5 h-3.5 fill-current font-bold" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm text-text-primary leading-tight">{task.name}</span>
                    </div>
                  )
                })}
              </div>
              
              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-text-secondary mb-2">
                    <span>Volumen de Prospectos/Clientes por mes</span>
                    <span className="text-white">{monthlyLeads} leads</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="200" 
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyber-green"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-text-secondary mb-2">
                    <span>Costo estimado de tu hora laboral</span>
                    <span className="text-white">${hourlyRate} USD / hr</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="100" 
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyber-green"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right panel: Results */}
          <div className="lg:col-span-5 glass-glow rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/10 rounded-full blur-2xl" />
            
            <div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs text-text-muted">
                Resultados de Ahorro Estimados
              </h3>
              
              {/* Core metrics */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyber-green/10 border border-cyber-green/20">
                    <Clock className="w-6 h-6 text-cyber-green" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Horas Libres al Mes</span>
                    <span className="text-3xl font-extrabold text-white">{totalHoursSavedPerMonth} hrs</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/20">
                    <DollarSign className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Dinero Ahorrado al Mes</span>
                    <span className="text-3xl font-extrabold text-white">${moneySavedPerMonth} USD</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyber-indigo/10 border border-cyber-indigo/20">
                    <Calendar className="w-6 h-6 text-cyber-indigo" />
                  </div>
                  <div>
                    <span className="text-xs text-text-secondary block">Días Recuperados al Año</span>
                    <span className="text-3xl font-extrabold text-white">{workDaysRecoveredPerYear} días</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Impact Statement */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-text-secondary leading-relaxed">
                Automatizando estas tareas ahorrarías <strong className="text-cyber-green">${moneySavedPerYear.toLocaleString()} USD al año</strong>. Dinero y tiempo que puedes enfocar en cerrar más ventas u operar estratégicamente tu empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}