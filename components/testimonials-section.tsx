"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Testimonial data with real reviews
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wedding Client",
    quote:
      "Dar Dmana transformed our wedding reception into an unforgettable Moroccan feast. The flavors were authentic and the presentation was stunning. Our guests are still talking about it months later!",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Event Planner",
    quote:
      "Working with Dar Dmana for our annual client appreciation dinner was a fantastic decision. Their attention to detail and ability to accommodate our dietary restrictions while maintaining authentic Moroccan flavors impressed everyone. The chef's presentation was both educational and entertaining.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Amina Boutaleb",
    role: "Private Dining Client",
    quote:
      "As someone who grew up in Morocco, I'm very particular about Moroccan cuisine. Dar Dmana exceeded my expectations with their authentic flavors and traditional cooking methods. It was like being transported back to my grandmother's kitchen in Marrakech.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Birthday Celebration",
    quote:
      "The team at Dar Dmana created a memorable birthday celebration for my wife. The food was exceptional, and the Moroccan tea ceremony was a beautiful touch. Their passion for Moroccan cuisine and culture shines through in everything they do.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Rodriguez",
    role: "Engagement Party",
    quote:
      "Our engagement party catered by Dar Dmana was absolutely perfect. The flavors were bold yet balanced, and the presentation was stunning. Chef Hisham took the time to explain each dish, adding a personal touch that our guests loved.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <section id="testimonials" className="py-20 bg-morocco-prairie-dark pattern-overlay scroll-mt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-morocco-amber mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-morocco-amber fill-morocco-amber" />
              ))}
            </div>
            <Link
              href="https://www.google.com/search?q=Dar+Dmana+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-morocco-givry hover:text-white transition-colors"
            >
              <span className="font-medium">5.0</span> on Google Reviews
            </Link>
          </div>
          <p className="text-lg max-w-2xl mx-auto text-morocco-givry mb-4">
            Hear from those who have experienced the authentic flavors and exceptional service of Dar Dmana.
          </p>
          <Link
            href="https://g.page/r/CXNzeDJG56RRECA/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-morocco-amber hover:text-morocco-amber-light transition-colors"
          >
            <span className="mr-2">Leave us a review on Google</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative max-w-4xl mx-auto testimonial-carousel">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-morocco-amber/20 bg-morocco-charcoal/90 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <Quote className="h-10 w-10 text-morocco-amber mb-6" />
                        <p className="text-lg mb-6 italic text-morocco-givry">"{testimonial.quote}"</p>
                        <div className="flex items-center mt-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-morocco-copper">{testimonial.role}</p>
                            <div className="flex mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-morocco-amber fill-morocco-amber" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-morocco-charcoal rounded-full p-2 shadow-md hover:bg-morocco-charcoal-light focus:outline-none focus:ring-2 focus:ring-morocco-amber/50 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-morocco-amber" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-morocco-charcoal rounded-full p-2 shadow-md hover:bg-morocco-charcoal-light focus:outline-none focus:ring-2 focus:ring-morocco-amber/50 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-morocco-amber" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                  setTimeout(() => setAutoplay(true), 5000)
                }}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-morocco-amber" : "bg-morocco-amber/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
