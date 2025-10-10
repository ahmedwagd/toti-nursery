"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-[#FFD6BA] to-[#B8F2E6]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="font-[family-name:var(--font-poppins)] font-bold text-5xl md:text-6xl text-[#5a4a6a] mb-8 text-balance"
        >
          Nurturing Creativity & Wonder
        </h2>
        <div ref={contentRef} className="space-y-6">
          <p className="text-lg md:text-xl text-[#6a5a7a] leading-relaxed text-pretty">
            At Toti Froti, we believe every child is a unique masterpiece waiting to unfold. Our warm, inviting space is
            designed to spark imagination, encourage exploration, and foster a lifelong love of learning.
          </p>
          <p className="text-lg md:text-xl text-[#6a5a7a] leading-relaxed text-pretty">
            With experienced educators, a play-based curriculum, and a focus on emotional well-being, we create a home
            away from home where your little one can thrive, make friends, and discover the joy of childhood.
          </p>
        </div>
      </div>
    </section>
  )
}
