"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDown, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MezArkWebsite() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const heroContent = [
    {
      image: "/black-architect-team-modern-office.png",
      title: "Innovative Design",
      subtitle: "Creating spaces that inspire and transform communities through bold architectural vision",
    },
    {
      image: "/black-architects-construction-site.png",
      title: "Sustainable Future",
      subtitle: "Building tomorrow's world with eco-conscious design and cutting-edge technology",
    },
    {
      image: "/diverse-architecture-team-meeting.png",
      title: "Collaborative Excellence",
      subtitle: "Where creativity meets functionality in every project we undertake",
    },
    {
      image: "/black-female-architect-blueprints.png",
      title: "Visionary Spaces",
      subtitle: "Transforming ideas into architectural masterpieces that stand the test of time",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    console.log("[v0] GSAP animations starting")

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ repeat: -1 })

      // Initial setup
      gsap.set(heroImageRef.current, { opacity: 1 })
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 1 })

      // Create rotation timeline
      heroContent.forEach((_, index) => {
        if (index > 0) {
          heroTl
            .to([titleRef.current, subtitleRef.current], {
              duration: 0.5,
              opacity: 0,
              y: -20,
              ease: "power2.inOut",
            })
            .to(
              heroImageRef.current,
              {
                duration: 0.8,
                opacity: 0,
                scale: 1.1,
                ease: "power2.inOut",
              },
              "-=0.3",
            )
            .call(() => setCurrentHeroIndex(index))
            .to(heroImageRef.current, {
              duration: 0.8,
              opacity: 1,
              scale: 1,
              ease: "power2.inOut",
            })
            .to(
              [titleRef.current, subtitleRef.current],
              {
                duration: 0.5,
                opacity: 1,
                y: 0,
                ease: "power2.inOut",
              },
              "-=0.3",
            )
            .to({}, { duration: 4 }) // Hold for 4 seconds
        } else {
          heroTl.to({}, { duration: 5 }) // Initial hold
        }
      })

      // Reset to first slide
      heroTl.call(() => setCurrentHeroIndex(0))

      // Initial hero entrance animations
      const entranceTl = gsap.timeline({ delay: 0.5 })
      entranceTl
        .from(titleRef.current, {
          duration: 1.5,
          y: 100,
          opacity: 0,
          ease: "power3.out",
        })
        .from(
          subtitleRef.current,
          {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ctaRef.current,
          {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.6",
        )

      // Hero animations
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ctaRef.current,
          {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.6",
        )

      gsap.utils.toArray(".gsap-fade-up").forEach((element: any) => {
        // Set initial state to visible as fallback
        gsap.set(element, { opacity: 1, y: 0 })

        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              onEnter: () => console.log("[v0] Fade-up animation triggered"),
            },
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out",
          },
        )
      })

      gsap.utils.toArray(".gsap-scale").forEach((element: any) => {
        // Set initial state to visible as fallback
        gsap.set(element, { opacity: 1, scale: 1 })

        gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            duration: 1.2,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
          },
        )
      })

      gsap.utils.toArray(".gsap-stagger").forEach((element: any, index) => {
        // Set initial state to visible as fallback
        gsap.set(element, { opacity: 1, y: 0 })

        gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          {
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            duration: 1,
            opacity: 1,
            y: 0,
            delay: index * 0.2,
            ease: "power3.out",
          },
        )
      })

      // Parallax effect for hero background
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: -50,
        ease: "none",
      })

      console.log("[v0] All GSAP animations initialized")
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-amber-600" : "text-white"
              }`}
              style={{ fontFamily: "Georgia, serif", letterSpacing: "2px" }}
            >
              MezArk
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(
                      item === "About"
                        ? aboutRef
                        : item === "Services"
                          ? servicesRef
                          : item === "Projects"
                            ? projectsRef
                            : contactRef,
                    )
                  }
                  className={`transition-colors font-medium ${
                    isScrolled ? "text-slate-700 hover:text-amber-600" : "text-white hover:text-amber-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen overflow-hidden">
        <div ref={heroRef} className="absolute inset-0">
          <div
            ref={heroImageRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${heroContent[currentHeroIndex].image}')`,
            }}
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "3px" }}
            >
              <span className="text-amber-400">Mez</span>
              <span className="text-white">Ark</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
              {heroContent[currentHeroIndex].title}
            </h2>
            <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 font-light">
              {heroContent[currentHeroIndex].subtitle}
            </p>
            <div ref={ctaRef}>
              <Button
                onClick={() => scrollToSection(aboutRef)}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg shadow-lg"
              >
                Discover Our Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="gsap-fade-up">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-800"
                style={{ fontFamily: "Georgia, serif" }}
              >
                About MezArk
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Founded on the principles of innovative design and sustainable architecture, MezArk has been
                transforming spaces and communities for over a decade. Our diverse team of visionary architects and
                designers brings together creativity, functionality, and environmental consciousness.
              </p>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                We believe that great architecture doesn't just shelter—it inspires, connects, and elevates the human
                experience. Every project we undertake is a testament to our commitment to excellence and our passion
                for creating spaces that matter.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="gsap-scale">
              <img
                src="/diverse-architecture-team-office.png"
                alt="MezArk diverse team at work"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800" style={{ fontFamily: "Georgia, serif" }}>
              What We Do
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive architectural services that bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Design",
                description: "Creating beautiful, functional homes that reflect your lifestyle and values",
                image: "/modern-house-clean-lines.png",
              },
              {
                title: "Commercial Architecture",
                description: "Innovative commercial spaces that enhance productivity and brand identity",
                image: "/contemporary-office-building.png",
              },
              {
                title: "Sustainable Design",
                description: "Eco-friendly solutions that minimize environmental impact while maximizing efficiency",
                image: "/sustainable-green-building.png",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="gsap-scale overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-amber-200"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-slate-800" style={{ fontFamily: "Georgia, serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 gsap-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800" style={{ fontFamily: "Georgia, serif" }}>
              Featured Projects
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Explore our portfolio of exceptional architectural achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skyline Residence",
                location: "Downtown District",
                image: "/luxury-residential-tower.png",
              },
              {
                title: "Innovation Hub",
                location: "Tech Quarter",
                image: "/futuristic-office-complex.png",
              },
              {
                title: "Cultural Center",
                location: "Arts District",
                image: "/contemporary-cultural-building.png",
              },
              {
                title: "Eco Village",
                location: "Green Valley",
                image: "/sustainable-community.png",
              },
              {
                title: "Corporate Headquarters",
                location: "Business Park",
                image: "/modern-corporate-atrium.png",
              },
              {
                title: "Urban Loft Complex",
                location: "Historic Quarter",
                image: "/modern-urban-loft.png",
              },
            ].map((project, index) => (
              <div key={index} className="gsap-stagger group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
            {/* Left side - Image with overlay text */}
            <div className="relative h-96 md:h-auto">
              <img
                src="/black-architects-consultation-meeting.png"
                alt="MezArk team consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
                    Get In Touch
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Ready to bring your architectural vision to life? Let's start the conversation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">FREE CONSULTATION</h3>
                <p className="text-slate-600">No obligation, it only takes a few minutes to get started!</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Name</label>
                  <Input placeholder="Enter your name" className="border-amber-200 focus:border-amber-600" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Email Address</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-amber-200 focus:border-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Phone Number</label>
                  <Input placeholder="Enter your phone number" className="border-amber-200 focus:border-amber-600" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-800">Message</label>
                  <Textarea
                    placeholder="Write your project details"
                    className="min-h-[120px] border-amber-200 focus:border-amber-600"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Submit →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4" style={{ fontFamily: "Georgia, serif", letterSpacing: "2px" }}>
                <span className="text-amber-400">Mez</span>
                <span className="text-white">Ark</span>
              </div>
              <p className="text-slate-300 mb-6">Crafting Architectural Excellence Through Innovation & Vision</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>hello@mezark.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4" />
                  <span>
                    123 Architecture Ave
                    <br />
                    Design District, NY 10001
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2024 MezArk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
