"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      });

      gsap.from(infoRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    gsap.to(e.target, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 bg-gradient-to-b from-[#CDB4DB] to-[#FFD6BA]"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-[family-name:var(--font-poppins)] font-bold text-5xl md:text-6xl text-[#5a4a6a] mb-16 text-center text-balance"
        >
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={formRef}>
            <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)] text-3xl text-[#5a4a6a]">
                  Schedule a Visit
                </CardTitle>
                <CardDescription className="text-[#6a5a7a] text-base">
                  We&apos;d love to show you around and answer any questions!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="rounded-2xl border-2 border-[#CDB4DB]/30 focus:border-[#CDB4DB] transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="rounded-2xl border-2 border-[#CDB4DB]/30 focus:border-[#CDB4DB] transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="rounded-2xl border-2 border-[#CDB4DB]/30 focus:border-[#CDB4DB] transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your child and any questions you have..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      className="rounded-2xl border-2 border-[#CDB4DB]/30 focus:border-[#CDB4DB] transition-colors min-h-32"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#CDB4DB] hover:bg-[#CDB4DB]/90 text-white font-semibold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div ref={infoRef} className="space-y-8">
            <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)] text-2xl text-[#5a4a6a] flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6a5a7a] leading-relaxed">
                  123 Rainbow Lane
                  <br />
                  Sunshine Valley, SV 12345
                  <br />
                  United Kingdom
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)] text-2xl text-[#5a4a6a] flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6a5a7a] leading-relaxed">
                  Phone: +44 (0) 123 456 7890
                  <br />
                  Email: hello@totifroti.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-poppins)] text-2xl text-[#5a4a6a] flex items-center gap-3">
                  <span className="text-3xl">🕐</span>
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6a5a7a] leading-relaxed">
                  Monday - Friday: 7:30 AM - 6:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
