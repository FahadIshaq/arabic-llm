"use client"

import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowLeft, Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { api } from "@/lib/api"

export default function VerifyOTPPage() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [isOTPSent, setIsOTPSent] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Pre-fill email if passed in URL
  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      await api.request<{ message: string }>('/auth/send-otp', {
        method: 'POST',
        body: JSON.stringify({ email }),
      })
      setMessage("OTP sent to your email!")
      setIsOTPSent(true)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to send OTP")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      await api.request<{ message: string }>('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ email, otp }),
      })
      setMessage("Email verified successfully! Redirecting to login...")
      setTimeout(() => {
        router.push("/login?verified=1")
      }, 2000)
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to verify OTP")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between container-padding">
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to Login</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">ArabicAI</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center py-12">
          <div className="container container-padding flex justify-center">
            <div className="w-full max-w-md">
              <Card className="shadow-large border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl md:text-3xl font-bold gradient-text">Verify Your Email</CardTitle>
                  <CardDescription className="text-lg">Enter the verification code sent to your email</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {!isOTPSent ? (
                    <form onSubmit={handleSendOTP} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="form-input"
                          required
                        />
                      </div>
                      {message && <div className="text-green-600 text-sm text-center">{message}</div>}
                      <Button type="submit" className="btn-primary w-full h-12 text-lg" disabled={isLoading}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        Send Verification Code
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOTP} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="otp" className="text-sm font-medium">
                          Verification Code
                        </Label>
                        <Input
                          id="otp"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 6-digit code"
                          className="form-input text-center text-2xl tracking-widest"
                          maxLength={6}
                          required
                        />
                        <p className="text-sm text-gray-600 text-center">
                          Enter the 6-digit code sent to {email}
                        </p>
                      </div>
                      {message && (
                        <div className={`text-sm text-center ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                          {message}
                        </div>
                      )}
                      <Button type="submit" className="btn-primary w-full h-12 text-lg" disabled={isLoading}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                        Verify Code
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => setIsOTPSent(false)}
                        disabled={isLoading}
                      >
                        Change Email
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  )
} 