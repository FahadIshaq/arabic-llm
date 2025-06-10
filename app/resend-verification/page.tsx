import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, Mail } from "lucide-react"

export default function ResendVerificationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/verify-email">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Verification</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex flex-col items-center space-y-2">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">Resend Verification</CardTitle>
              </div>
              <CardDescription className="text-center">
                Enter your email address and we'll send you a new verification link
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">Resend Verification Email</Button>
              <div className="text-center">
                <Link href="/login" className="text-sm text-primary hover:underline">
                  Back to login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
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
