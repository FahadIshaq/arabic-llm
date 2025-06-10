import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle, ArrowLeft } from "lucide-react"

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-teal-600" />
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
                <div className="rounded-full bg-teal-100 p-3">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-center">Check your email</CardTitle>
              </div>
              <CardDescription className="text-center">
                We've sent a verification link to your email address. Please check your inbox and click the link to
                verify your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/50">
                <p className="text-sm text-center">
                  If you don't see the email, check your spam folder or{" "}
                  <Link href="/resend-verification" className="text-teal-600 hover:underline">
                    click here to resend
                  </Link>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Back to login
                </Button>
              </Link>
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
