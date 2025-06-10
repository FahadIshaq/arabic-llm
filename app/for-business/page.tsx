import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, BarChart3, Shield, Globe, Headphones, Check } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

export default function ForBusinessPage() {
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
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground"
            >
              For Business
            </Link>
            <Link
              href="/for-education"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
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
                  Arabic Training for Your Business
                </h1>
                <p className="max-w-[600px] text-gray-500 text-base sm:text-lg md:text-xl">
                  Empower your team with professional Arabic language skills. Our enterprise solution provides
                  comprehensive training for businesses operating in Arabic-speaking markets.
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
                  alt="Business team learning Arabic"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">Enterprise Features</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Everything your business needs to succeed in Arabic-speaking markets
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>
                    Manage multiple learners with admin dashboard, progress tracking, and team analytics
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Detailed reporting on team progress, engagement metrics, and learning outcomes
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    SOC 2 compliance, SSO integration, and enterprise-grade data protection
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Custom Content</CardTitle>
                  <CardDescription>
                    Industry-specific vocabulary and scenarios tailored to your business needs
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Headphones className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Dedicated Support</CardTitle>
                  <CardDescription>
                    Priority customer support with dedicated account manager and training resources
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Flexible Learning</CardTitle>
                  <CardDescription>
                    Self-paced learning with live instructor sessions and group training options
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Perfect for Every Industry
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Companies across industries trust ArabicAI for their language training needs
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Corporate</h3>
                <p className="text-gray-500">
                  Prepare executives and employees for business operations in the Middle East and North Africa
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-500">
                  Train medical professionals to communicate effectively with Arabic-speaking patients
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Government</h3>
                <p className="text-gray-500">
                  Equip government employees and diplomats with essential Arabic communication skills
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Travel & Hospitality</h3>
                <p className="text-gray-500">
                  Enhance customer service capabilities for Arabic-speaking guests and travelers
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
                <p className="text-gray-500">
                  Support international operations and partnerships in Arabic-speaking regions
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consulting</h3>
                <p className="text-gray-500">
                  Enable consultants to work effectively with clients across the Arab world
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4">Enterprise Pricing</h2>
              <p className="max-w-[900px] mx-auto text-gray-500 text-sm sm:text-base md:text-lg">
                Flexible pricing options to fit your organization's needs
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>Perfect for small teams</CardDescription>
                  <div className="mt-4 text-3xl font-bold">$25</div>
                  <p className="text-sm text-muted-foreground">per user/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Up to 25 users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Admin dashboard</span>
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
                  <CardTitle>Business</CardTitle>
                  <CardDescription>Ideal for growing companies</CardDescription>
                  <div className="mt-4 text-3xl font-bold">$20</div>
                  <p className="text-sm text-muted-foreground">per user/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Up to 100 users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">SSO integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Custom content</span>
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
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4 text-3xl font-bold">Custom</div>
                  <p className="text-sm text-muted-foreground">Contact for pricing</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">24/7 phone support</span>
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
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-6">
              Join leading companies that trust ArabicAI for their Arabic language training needs. Get started with a
              free demo today.
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
