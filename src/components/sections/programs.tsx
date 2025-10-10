"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const programs = [
  {
    title: "Tiny Tots",
    age: "6 months - 2 years",
    description: "Gentle care and sensory exploration for our youngest learners.",
    color: "#FFD6BA",
    emoji: "👶",
  },
  {
    title: "Little Explorers",
    age: "2 - 3 years",
    description: "Hands-on activities that build confidence and social skills.",
    color: "#B8F2E6",
    emoji: "🧸",
  },
  {
    title: "Creative Minds",
    age: "3 - 4 years",
    description: "Art, music, and storytelling to ignite imagination.",
    color: "#CDB4DB",
    emoji: "🎨",
  },
  {
    title: "Ready for School",
    age: "4 - 5 years",
    description: "Pre-literacy, numeracy, and independence skills for kindergarten.",
    color: "#FFE066",
    emoji: "📚",
  },
]

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      })

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 100,
            opacity: 0,
            rotation: -5,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="programs" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-[#B8F2E6] to-[#A0E7E5]">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-[family-name:var(--font-poppins)] font-bold text-5xl md:text-6xl text-[#5a4a6a] mb-16 text-center text-balance"
        >
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group"
            >
              <Card
                className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ backgroundColor: program.color }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {program.emoji}
                  </div>
                  <CardTitle className="font-[family-name:var(--font-poppins)] text-2xl text-[#5a4a6a] mb-2">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-[#6a5a7a] font-semibold text-base">{program.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6a5a7a] text-center leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
