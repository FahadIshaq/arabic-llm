import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, GraduationCap, Shield, BarChart3, Headphones, Check } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

export default function ForEducationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">ArabicAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground">
              Home
            </Link>
            <Link
              href="/lessons"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
            >
              Learning
            </Link>
            <Link
              href="/for-business"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
            >
              For Business
            </Link>
            <Link
              href="/for-education"
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground"
            >
              For Education
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-primary-foreground/90 hover:text-primary-foreground">
                Log In
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="sm" className="text-secondary-foreground hover:bg-secondary/90">
                Contact Sales
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Arabic Learning for Schools & Universities
                </h1>
                <p className="max-w-[600px] text-gray-500 text-base sm:text-lg md:text-xl">
                  Transform Arabic education with our AI-powered platform. Engage students with interactive lessons,
                  real-time feedback, and comprehensive progress tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students learning Arabic"
                  className="rounded-lg shadow-xl w-full h-auto"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">Educational Features</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Everything educators need to teach Arabic effectively
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Classroom Management</CardTitle>
                  <CardDescription>
                    Manage multiple classes, assign homework, and track student progress with ease
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Student Analytics</CardTitle>
                  <CardDescription>
                    Detailed insights into student performance, engagement, and learning patterns
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>COPPA Compliant</CardTitle>
                  <CardDescription>
                    Safe learning environment with privacy protection for students under 13
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Curriculum Integration</CardTitle>
                  <CardDescription>
                    Align with educational standards and integrate with existing curriculum
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Collaborative Learning</CardTitle>
                  <CardDescription>
                    Group activities, peer learning, and collaborative projects for enhanced engagement
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Headphones className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Teacher Support</CardTitle>
                  <CardDescription>
                    Professional development resources and dedicated support for educators
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Why Choose ArabicAI for Education?
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Proven results in educational settings worldwide
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Improved Engagement</h3>
                <p className="text-gray-500">
                  Students show 85% higher engagement compared to traditional Arabic learning methods
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3x</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Faster Progress</h3>
                <p className="text-gray-500">
                  Students learn Arabic 3x faster with our AI-powered personalized learning approach
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Teacher Satisfaction</h3>
                <p className="text-gray-500">95% of teachers report improved teaching effectiveness with ArabicAI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Perfect for All Educational Levels
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                From elementary schools to universities, ArabicAI adapts to every learning environment
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Elementary Schools</h3>
                <p className="text-gray-500">
                  Fun, interactive lessons designed for young learners with age-appropriate content
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">High Schools</h3>
                <p className="text-gray-500">Comprehensive curriculum preparing students for advanced Arabic studies</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Universities</h3>
                <p className="text-gray-500">
                  Advanced Arabic courses with specialized content for academic and professional use
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Language Centers</h3>
                <p className="text-gray-500">
                  Flexible programs for adult learners and professional development courses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">Educational Pricing</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Special pricing for educational institutions
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Classroom</CardTitle>
                  <CardDescription>Perfect for individual classrooms</CardDescription>
                  <div className="mt-4 text-3xl font-bold">$8</div>
                  <p className="text-sm text-muted-foreground">per student/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Up to 30 students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Teacher dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Progress tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Email support</span>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-md relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>School</CardTitle>
                  <CardDescription>Ideal for entire schools</CardDescription>
                  <div className="mt-4 text-3xl font-bold">$6</div>
                  <p className="text-sm text-muted-foreground">per student/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Up to 500 students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Multiple teachers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Contact Sales</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>District</CardTitle>
                  <CardDescription>For school districts</CardDescription>
                  <div className="mt-4 text-3xl font-bold">Custom</div>
                  <p className="text-sm text-muted-foreground">Contact for pricing</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Professional development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Dedicated support</span>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
              Transform Arabic Education Today
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-6">
              Join thousands of educators who trust ArabicAI to enhance their Arabic language programs. Start with a
              free demo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  View All Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0 bg-gray-100">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-bold">ArabicAI</span>
          </div>
          <p className="text-sm text-gray-500">© 2025 ArabicAI. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
