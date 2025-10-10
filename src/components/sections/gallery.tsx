"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    query: "happy children playing in colorful nursery classroom",
    alt: "Children playing together",
    src: "/gallery/children-playing.jpg",
  },
  {
    query: "kids doing arts and crafts painting in nursery",
    alt: "Arts and crafts time",
    src: "/gallery/arts-crafts.jpg",
  },
  {
    query: "toddlers reading books in cozy nursery corner",
    alt: "Story time",
    src: "/gallery/story-time.jpg",
  },
  {
    query: "children playing with educational toys in bright nursery",
    alt: "Learning through play",
    src: "/gallery/learning-through-play.jpg",
  },
  {
    query: "kids having fun outdoor playground nursery",
    alt: "Outdoor adventures",
    src: "/gallery/outdoor-adventures.jpg",
  },
  {
    query: "children singing and dancing in nursery music class",
    alt: "Music and movement",
    src: "/gallery/music-and-movement.jpg",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

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
      });

      imagesRef.current.forEach((img, index) => {
        if (img) {
          const yOffset = index % 2 === 0 ? -50 : 50;
          gsap.from(img, {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotation: index % 2 === 0 ? -3 : 3,
            duration: 1,
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "top 55%",
              scrub: 1,
            },
          });

          // Parallax effect
          gsap.to(img, {
            y: yOffset,
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#A0E7E5] to-[#CDB4DB] relative overflow-hidden"
    >
      {/* Floating decorations */}
      <div
        className="absolute top-20 left-10 text-5xl animate-float"
        style={{ animationDelay: "0s" }}
      >
        🌟
      </div>
      <div
        className="absolute top-40 right-20 text-5xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        🎨
      </div>
      <div
        className="absolute bottom-40 left-1/4 text-5xl animate-float"
        style={{ animationDelay: "2s" }}
      >
        🎵
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="font-[family-name:var(--font-poppins)] font-bold text-5xl md:text-6xl text-white mb-16 text-center drop-shadow-lg text-balance"
        >
          Moments of Joy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 aspect-square bg-white/20 backdrop-blur-sm">
                <Image
                  // src={`/.jpg?height=400&width=400&query=${encodeURIComponent(item.query)}`}
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#CDB4DB]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
