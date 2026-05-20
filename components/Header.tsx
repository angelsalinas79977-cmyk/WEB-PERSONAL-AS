"use client"
import { useState, useEffect } from "react"
import { Cpu, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#050507]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection("hero")} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-cyber-green/10 border border-cyber-green/20 group-hover:border-cyber-green/50 transition-colors">
            <Cpu className="w-5 h-5 text-cyber-green" />
          </div>
          <span className="font-bold text-lg tracking-wider text-white">
            AS<span className="text-cyber-green">.OPERATOR</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Mi Proceso
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-sm font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Calculadora de Ahorro
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="relative px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-cyber-green hover:bg-cyber-green-light transition-all shadow-md shadow-cyber-green/10 cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10">Optimizar mi Negocio</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyber-green-light to-cyber-blue transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 bg-[#050507] border-b border-white/5 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-5 duration-200">
          <button
            onClick={() => scrollToSection("about")}
            className="text-base font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-base font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-base font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Mi Proceso
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-base font-medium text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            Calculadora de Ahorro
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-[80%] py-3 rounded-xl font-semibold text-sm text-center text-white bg-cyber-green hover:bg-cyber-green-light transition-all shadow-md cursor-pointer"
          >
            Optimizar mi Negocio
          </button>
        </div>
      )}
    </header>
  )
}