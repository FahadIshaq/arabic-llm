import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, password)</li>
                  <li>Profile information (learning preferences, goals, progress)</li>
                  <li>Payment information (billing address, payment method details)</li>
                  <li>Communications with us (support requests, feedback)</li>
                  <li>Learning data (lesson progress, conversation transcripts, vocabulary mastery)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your learning experience</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the
                  following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist us in operating our platform</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services, comply with
                  legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your
                  account and associated data at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your personal information</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our service is designed for users of all ages, including children. For users under 13, we require
                  parental consent before collecting personal information. Parents can review, modify, or delete their
                  child's information at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place to protect your personal information in accordance with this
                  privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect and use personal information about you.
                  You can control cookies through your browser settings, though this may affect the functionality of our
                  service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@arabicai.com
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
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
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
