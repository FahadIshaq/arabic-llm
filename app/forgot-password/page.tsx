"use client"
import Link from "next/link"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, Loader2 } from "lucide-react"
import { useState } from "react"
import { AuthProvider, useAuth } from "@/lib/auth";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const { resetPassword, isLoading } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await resetPassword(email)
    if (success) {
      setMessage("Password reset link sent to your email!")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Login</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/login" className="text-teal-600 hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Reset your password</CardTitle>
              <CardDescription>
                Enter your email address and we'll send you a link to reset your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                {message && <div className="text-green-600 text-sm text-center">{message}</div>}
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isLoading}>
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  Send reset link
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4"></CardFooter>
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
