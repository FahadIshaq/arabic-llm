import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/help">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Help</span>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with our team. We're here to help you with any questions or concerns.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">support@arabicai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Learning Street
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM PST
                          <br />
                          Saturday - Sunday: 10:00 AM - 4:00 PM PST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>Quick answers to common questions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium text-sm">How quickly will I receive a response?</p>
                      <p className="text-xs text-muted-foreground">
                        We typically respond to emails within 24 hours during business days.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Do you offer phone support?</p>
                      <p className="text-xs text-muted-foreground">
                        Yes, phone support is available for Premium subscribers during business hours.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Can I schedule a demo?</p>
                      <p className="text-xs text-muted-foreground">
                        Contact us to schedule a personalized demo of ArabicAI.
                      </p>
                    </div>
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
            <Link href="/help" className="text-sm font-medium hover:underline underline-offset-4">
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
