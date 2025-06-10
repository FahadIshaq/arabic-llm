import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using ArabicAI ("the Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  ArabicAI is an AI-powered Arabic language learning platform that provides interactive lessons,
                  conversation practice, vocabulary training, and progress tracking. The service is available through
                  web browsers and is designed to help users learn Arabic effectively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features of the Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>
                <p className="text-muted-foreground mb-4">ArabicAI offers both free and premium subscription plans:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Free accounts have limited access to features and content</li>
                  <li>Premium subscriptions provide unlimited access to all features</li>
                  <li>Subscription fees are billed in advance on a monthly or yearly basis</li>
                  <li>You may cancel your subscription at any time</li>
                  <li>Refunds are provided according to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. User Content and Conduct</h2>
                <p className="text-muted-foreground mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Upload, post, or transmit any content that is unlawful, harmful, or offensive</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Use the Service for any commercial purpose without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Privacy Policy</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                  Service, to understand our practices regarding the collection and use of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of ArabicAI and its licensors. The Service is protected by copyright, trademark, and other
                  laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior
                  notice or liability, under our sole discretion, for any reason whatsoever, including without
                  limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The information on this Service is provided on an "as is" basis. To the fullest extent permitted by
                  law, this Company excludes all representations, warranties, conditions and terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes
                  via email or through the Service. Your continued use of the Service after such modifications
                  constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@arabicai.com
                  <br />
                  Address: 123 Learning Street, San Francisco, CA 94105
                </p>
              </section>
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
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/help" className="text-sm font-medium hover:underline underline-offset-4">
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
