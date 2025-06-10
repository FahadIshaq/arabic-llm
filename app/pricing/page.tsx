import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, ArrowLeft, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground"
            >
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-primary-foreground">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-primary-foreground/90 hover:text-primary-foreground">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" size="sm" className="text-secondary-foreground hover:bg-secondary/90">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Upgrade to unlock unlimited Arabic practice and full content access
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl mt-8">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Basic access to get started</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">Forever free</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">AI chat: 10 minutes/day</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Basic lessons: 5 lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Vocabulary: Limited</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-muted-foreground">Pronunciation feedback</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-gray-300" />
                      <span className="text-sm text-muted-foreground">Progress tracking</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button variant="outline" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="border-primary/20 shadow-md relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium Monthly</CardTitle>
                  <CardDescription>Full access with monthly billing</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$12.99</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited AI conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">All lessons (100+ lessons)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Full vocabulary trainer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Pronunciation feedback</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">New content weekly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Priority email support</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=monthly" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Start 14-Day Free Trial</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Yearly</CardTitle>
                  <CardDescription>Save 20% with annual billing</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$124.99</div>
                  <p className="text-sm text-muted-foreground">per year ($10.42/month)</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited AI conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">All lessons (100+ lessons)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Full vocabulary trainer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Pronunciation feedback</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">New content weekly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Priority email support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Best value</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/signup?plan=yearly" className="w-full">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Start 14-Day Free Trial
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What happens after I subscribe?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      After subscribing, you'll immediately gain access to all premium features including unlimited AI
                      conversations, the full lesson library, and advanced vocabulary training. Your subscription will
                      automatically renew unless canceled.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Yes, you can cancel your subscription at any time. You'll continue to have access to premium
                      features until the end of your current billing period.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer family or school plans?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Yes, we offer special family plans for up to 4 users and educational licenses for schools. Please
                      contact our sales team for more information on bulk pricing.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How does the free trial work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      New users can try all premium features free for 14 days. No credit card is required to start your
                      trial. At the end of the trial, you can choose to subscribe or continue with the free plan.
                    </p>
                  </CardContent>
                </Card>
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
