"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BookOpen, ArrowRight, Check, BookText, MessageSquare, BarChart3 } from "lucide-react"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Redirect to dashboard when completed
      window.location.href = "/dashboard"
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Skip</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="mb-8">
            <Progress value={(step / totalSteps) * 100} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Getting started</span>
              <span>
                Step {step} of {totalSteps}
              </span>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Welcome to ArabicAI!</CardTitle>
                <CardDescription>Let's personalize your learning experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>How much time can you dedicate to learning Arabic each week?</Label>
                  <RadioGroup defaultValue="moderate" className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="minimal" id="minimal" />
                      <Label htmlFor="minimal" className="flex-1 cursor-pointer">
                        <div className="font-medium">Just a few minutes</div>
                        <div className="text-sm text-muted-foreground">Less than 30 minutes per week</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                        <div className="font-medium">A few hours</div>
                        <div className="text-sm text-muted-foreground">1-3 hours per week</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border p-4">
                      <RadioGroupItem value="dedicated" id="dedicated" />
                      <Label htmlFor="dedicated" className="flex-1 cursor-pointer">
                        <div className="font-medium">Dedicated learner</div>
                        <div className="text-sm text-muted-foreground">More than 3 hours per week</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-teal-600 hover:bg-teal-700" onClick={handleNext}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Choose your learning focus</CardTitle>
                <CardDescription>Select the areas you want to prioritize</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>What aspects of Arabic do you want to focus on?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="speaking" className="mt-1" />
                      <Label htmlFor="speaking" className="flex-1 cursor-pointer">
                        <div className="font-medium">Speaking</div>
                        <div className="text-sm text-muted-foreground">Practice pronunciation and conversation</div>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="reading" className="mt-1" />
                      <Label htmlFor="reading" className="flex-1 cursor-pointer">
                        <div className="font-medium">Reading</div>
                        <div className="text-sm text-muted-foreground">Learn to read Arabic script</div>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="vocabulary" className="mt-1" />
                      <Label htmlFor="vocabulary" className="flex-1 cursor-pointer">
                        <div className="font-medium">Vocabulary</div>
                        <div className="text-sm text-muted-foreground">Build your Arabic word bank</div>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="grammar" className="mt-1" />
                      <Label htmlFor="grammar" className="flex-1 cursor-pointer">
                        <div className="font-medium">Grammar</div>
                        <div className="text-sm text-muted-foreground">Master Arabic sentence structure</div>
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Which topics interest you the most?</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="travel" className="mt-1" />
                      <Label htmlFor="travel" className="cursor-pointer">
                        Travel
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="culture" className="mt-1" />
                      <Label htmlFor="culture" className="cursor-pointer">
                        Culture
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="business" className="mt-1" />
                      <Label htmlFor="business" className="cursor-pointer">
                        Business
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="daily-life" className="mt-1" />
                      <Label htmlFor="daily-life" className="cursor-pointer">
                        Daily Life
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="food" className="mt-1" />
                      <Label htmlFor="food" className="cursor-pointer">
                        Food
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2 rounded-lg border p-4">
                      <input type="checkbox" id="entertainment" className="mt-1" />
                      <Label htmlFor="entertainment" className="cursor-pointer">
                        Entertainment
                      </Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-teal-600 hover:bg-teal-700" onClick={handleNext}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">You're all set!</CardTitle>
                <CardDescription>We've personalized your learning path</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="rounded-full bg-teal-100 p-4 mb-4">
                    <Check className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Your personalized plan is ready</h3>
                  <p className="text-center text-muted-foreground max-w-md">
                    Based on your preferences, we've created a customized learning path to help you achieve your Arabic
                    language goals.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="rounded-full bg-teal-100 p-2">
                        <BookText className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="font-medium">Beginner Lessons</h4>
                    <p className="text-sm text-muted-foreground">Start with the basics</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="rounded-full bg-teal-100 p-2">
                        <MessageSquare className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="font-medium">Daily Practice</h4>
                    <p className="text-sm text-muted-foreground">15 minutes per day</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <div className="rounded-full bg-teal-100 p-2">
                        <BarChart3 className="h-5 w-5 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="font-medium">Track Progress</h4>
                    <p className="text-sm text-muted-foreground">Weekly goals and reviews</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleNext}>
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
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
