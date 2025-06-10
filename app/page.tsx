"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  MessageCircle,
  Star,
  Award,
  ChevronRight,
  CheckCircle,
  Brain,
  Headphones,
  PenTool,
  Target,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Student",
      content: "ArabicAI transformed my Arabic learning journey. The AI conversations feel so natural!",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mohammed Ali",
      role: "Professional",
      content: "Perfect for busy professionals. I can practice during my commute and see real progress.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Fatima Hassan",
      role: "Teacher",
      content: "I recommend ArabicAI to all my students. The structured approach is excellent.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized lessons that adapt to your learning style and pace",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MessageCircle,
      title: "Conversation Practice",
      description: "Practice speaking with our advanced AI conversation partner",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Headphones,
      title: "Listening Comprehension",
      description: "Improve your listening skills with native speaker audio",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: PenTool,
      title: "Writing Practice",
      description: "Master Arabic script with guided writing exercises",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and achieve your learning goals with detailed progress tracking",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Earn badges and certificates as you progress through levels",
      color: "from-green-500 to-green-600",
    },
  ]

  const stats = [
    { number: "50K+", label: "Active Learners" },
    { number: "95%", label: "Success Rate" },
    { number: "30+", label: "Countries" },
    { number: "4.9", label: "App Rating" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">ArabicAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/lessons" className="nav-link">
                Lessons
              </Link>
              <Link href="/practice" className="nav-link">
                Practice
              </Link>
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/login" className="nav-link">
                Sign In
              </Link>
              <Link href="/signup">
                <Button className="btn-primary">Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container-padding py-4 space-y-4">
              <Link href="/lessons" className="block nav-link">
                Lessons
              </Link>
              <Link href="/practice" className="block nav-link">
                Practice
              </Link>
              <Link href="/pricing" className="block nav-link">
                Pricing
              </Link>
              <Link href="/about" className="block nav-link">
                About
              </Link>
              <Link href="/login" className="block nav-link">
                Sign In
              </Link>
              <Link href="/signup" className="block">
                <Button className="btn-primary w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  🚀 AI-Powered Arabic Learning
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Master Arabic with
                  <span className="block text-yellow-300">Artificial Intelligence</span>
                </h1>
                <p className="text-xl text-purple-100 max-w-lg">
                  Experience the future of language learning with personalized AI tutoring, real-time conversation
                  practice, and adaptive learning paths.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                  >
                    Start Learning Free
                    <ChevronRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-purple-600 hover:bg-white/10 px-8 py-4 text-lg"
                  >
                    <Play className="mr-2" size={20} />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-purple-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Free 7-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="glass-card p-8 floating-element">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">AI Conversation</h3>
                        <p className="text-sm text-purple-200">Practice speaking naturally</p>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 font-arabic text-right">
                      <p className="text-lg">مرحباً! كيف حالك اليوم؟</p>
                      <p className="text-sm text-purple-200 mt-2">Hello! How are you today?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to master Arabic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with proven language learning methodologies
              to accelerate your Arabic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card card-hover">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-teal-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Learning Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your path to Arabic fluency</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning path designed by language experts and powered by AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Take our AI-powered placement test to determine your starting level</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">Progress through personalized lessons adapted to your learning style</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice</h3>
              <p className="text-gray-600">Apply your knowledge through AI conversations and real-world scenarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by learners worldwide</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your Arabic journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering Arabic with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Start Free Trial
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-purple-600 hover:bg-white/10 px-8 py-4 text-lg"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold">ArabicAI</span>
              </div>
              <p className="text-gray-400">The most advanced AI-powered Arabic learning platform</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/lessons" className="block hover:text-white">
                  Lessons
                </Link>
                <Link href="/practice" className="block hover:text-white">
                  Practice
                </Link>
                <Link href="/vocabulary" className="block hover:text-white">
                  Vocabulary
                </Link>
                <Link href="/pricing" className="block hover:text-white">
                  Pricing
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white">
                  About
                </Link>
                <Link href="/contact" className="block hover:text-white">
                  Contact
                </Link>
                <Link href="/careers" className="block hover:text-white">
                  Careers
                </Link>
                <Link href="/blog" className="block hover:text-white">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/help" className="block hover:text-white">
                  Help Center
                </Link>
                <Link href="/privacy" className="block hover:text-white">
                  Privacy
                </Link>
                <Link href="/terms" className="block hover:text-white">
                  Terms
                </Link>
                <Link href="/status" className="block hover:text-white">
                  Status
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArabicAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
