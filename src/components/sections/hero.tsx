"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cloudLeftRef = useRef<HTMLDivElement>(null)
  const cloudRightRef = useRef<HTMLDivElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      })

      // Parallax effects on scroll
      gsap.to(cloudLeftRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(cloudRightRef.current, {
        y: 150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(sunRef.current, {
        y: 80,
        scale: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #A0E7E5 0%, #FFE066 50%, #FFD6BA 100%)`,
      }}
    >
      {/* Sun */}
      <div
        ref={sunRef}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#FFE066] shadow-[0_0_60px_rgba(255,224,102,0.6)] animate-float"
        style={{ animationDelay: "0s" }}
      />

      {/* Clouds */}
      <div ref={cloudLeftRef} className="absolute top-32 left-10 w-48 h-24 opacity-80">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-4 w-16 h-16 bg-white rounded-full" />
          <div className="absolute bottom-2 left-12 w-20 h-20 bg-white rounded-full" />
          <div className="absolute bottom-0 left-24 w-16 h-16 bg-white rounded-full" />
        </div>
      </div>

      <div ref={cloudRightRef} className="absolute top-48 right-32 w-40 h-20 opacity-80">
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 left-2 w-12 h-12 bg-white rounded-full" />
          <div className="absolute bottom-1 left-8 w-16 h-16 bg-white rounded-full" />
          <div className="absolute bottom-0 left-20 w-12 h-12 bg-white rounded-full" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 text-4xl animate-float" style={{ animationDelay: "1s" }}>
        🍎
      </div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 text-4xl animate-float" style={{ animationDelay: "2s" }}>
        🎈
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>
        ⭐
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-poppins)] font-bold text-6xl md:text-8xl text-white mb-6 drop-shadow-lg text-balance"
        >
          Welcome to Toti Froti Nursery
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-white/90 mb-8 font-medium drop-shadow text-pretty">
          Where little dreams grow and curiosity blooms every day
        </p>
        <div ref={ctaRef}>
          <Button
            size="lg"
            className="bg-[#CDB4DB] hover:bg-[#CDB4DB]/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join Our Family
          </Button>
        </div>
      </div>
    </section>
  )
}
