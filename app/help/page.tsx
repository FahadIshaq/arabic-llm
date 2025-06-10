import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, ArrowLeft, Search, MessageCircle, Mail, Phone } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Dashboard</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Help Center</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Find answers to common questions and get help with ArabicAI
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search for help..." className="pl-10" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Get instant help from our support team</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full">Start Chat</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Send us an email and we'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Phone Support</CardTitle>
                  <CardDescription>Call us during business hours for immediate assistance</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full">
                    +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I start learning Arabic with ArabicAI?</AccordionTrigger>
                    <AccordionContent>
                      Getting started is easy! First, create your account and complete the onboarding process to
                      personalize your learning experience. Then, choose your preferred Arabic dialect and begin with
                      our beginner lessons. Our AI tutor will guide you through the basics of Arabic alphabet,
                      pronunciation, and common phrases.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What Arabic dialects do you support?</AccordionTrigger>
                    <AccordionContent>
                      We support Modern Standard Arabic (MSA), Egyptian Arabic, Levantine Arabic, Gulf Arabic, Maghrebi
                      Arabic, and Iraqi Arabic. You can choose your preferred dialect during signup or switch between
                      dialects in your account settings.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How does the AI conversation feature work?</AccordionTrigger>
                    <AccordionContent>
                      Our AI conversation feature uses advanced language models to simulate real conversations in
                      Arabic. You can practice speaking, get pronunciation feedback, and engage in various scenarios
                      like ordering at a café or shopping at a market. The AI adapts to your skill level and provides
                      personalized feedback.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I use ArabicAI on my mobile device?</AccordionTrigger>
                    <AccordionContent>
                      Yes! ArabicAI is fully responsive and works great on all devices including smartphones, tablets,
                      and desktop computers. You can access all features through your web browser without needing to
                      download a separate app.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What's included in the free plan?</AccordionTrigger>
                    <AccordionContent>
                      The free plan includes 10 minutes of AI conversation per day, access to 5 basic lessons, and
                      limited vocabulary practice. You can upgrade to Premium for unlimited access to all features,
                      including unlimited AI conversations, the complete lesson library, and advanced pronunciation
                      feedback.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                    <AccordionContent>
                      You can cancel your subscription at any time from your account settings. Go to Profile →
                      Subscription and click "Cancel subscription". You'll continue to have access to premium features
                      until the end of your current billing period.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>Is ArabicAI suitable for children?</AccordionTrigger>
                    <AccordionContent>
                      Yes! ArabicAI offers content suitable for learners of all ages. We have special kid-friendly
                      lessons and activities. Parents can create accounts for their children and monitor their progress.
                      Our platform is designed to be safe and educational for young learners.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>Do you offer certificates or credentials?</AccordionTrigger>
                    <AccordionContent>
                      Currently, we provide progress tracking and achievement badges to recognize your learning
                      milestones. We're working on implementing formal certificates and credentials that you can use to
                      demonstrate your Arabic proficiency. Stay tuned for updates!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Getting Started Guide</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">1. Create Your Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Sign up for free and choose your learning goals and preferred Arabic dialect.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">2. Complete Onboarding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tell us about your experience level and learning preferences to personalize your journey.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">3. Start with Basics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Begin with the Arabic alphabet and basic pronunciation to build a strong foundation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">4. Practice Daily</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Use our AI conversation feature and vocabulary trainer to practice regularly and track progress.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
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
