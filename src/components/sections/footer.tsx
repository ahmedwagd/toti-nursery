"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Footer() {
  const cloudsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cloudsRef.current) return

    const clouds = cloudsRef.current.querySelectorAll(".cloud")

    clouds.forEach((cloud, index) => {
      gsap.to(cloud, {
        x: index % 2 === 0 ? 100 : -100,
        duration: 20 + index * 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    })
  }, [])

  return (
    <footer className="relative bg-[#5a4a6a] text-white py-12 px-4 overflow-hidden">
      <div ref={cloudsRef} className="absolute inset-0 pointer-events-none opacity-20">
        <div className="cloud absolute top-10 left-[10%] w-24 h-12 bg-white/30 rounded-full blur-xl" />
        <div className="cloud absolute top-20 right-[15%] w-32 h-14 bg-white/25 rounded-full blur-xl" />
        <div className="cloud absolute bottom-20 left-[20%] w-28 h-12 bg-white/20 rounded-full blur-xl" />
        <div className="cloud absolute bottom-10 right-[25%] w-36 h-16 bg-white/30 rounded-full blur-xl" />
        <div className="cloud absolute top-1/2 left-[40%] w-20 h-10 bg-white/25 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h3 className="font-[family-name:var(--font-poppins)] font-bold text-3xl mb-4">Toti Froti Nursery</h3>
        <p className="text-white/80 mb-6">Where little dreams grow 🌱</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-[#FFE066] transition-colors duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-[#FFE066] transition-colors duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-[#FFE066] transition-colors duration-300">
            Twitter
          </a>
        </div>
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Toti Froti Nursery. All rights reserved.</p>
      </div>
    </footer>
  )
}
