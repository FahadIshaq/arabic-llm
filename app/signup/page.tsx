"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, ArrowRight, ArrowLeft, Check, Users, User, Baby } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const dialect = searchParams.get("dialect") || "msa"

  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState("adult")
  const [formData, setFormData] = useState({
    accountType: "adult",
    level: "beginner",
    goal: "general",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    childName: "",
    childAge: "",
    childLevel: "beginner",
  })

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const getDialectName = (code: string) => {
    const dialectMap: Record<string, string> = {
      msa: "Modern Standard Arabic",
      egy: "Egyptian Arabic",
      lev: "Levantine Arabic",
      gulf: "Gulf Arabic",
      mag: "Maghrebi Arabic",
      irq: "Iraqi Arabic",
    }
    return dialectMap[code] || "Modern Standard Arabic"
  }

  const totalSteps = accountType === "parent" ? 4 : 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between container-padding">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ArabicAI</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:underline font-medium">
              Log in
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container container-padding flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm text-gray-500">{Math.round((step / totalSteps) * 100)}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-teal-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <Card className="shadow-large border-0">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold gradient-text">
                  {step === 1
                    ? "Welcome to ArabicAI"
                    : step === 2
                      ? "Tell us about yourself"
                      : step === 3
                        ? "Create your account"
                        : "Add your child's information"}
                </CardTitle>
                <CardDescription className="text-lg">
                  {step === 1
                    ? `Get started learning ${getDialectName(dialect)}`
                    : step === 2
                      ? "Help us personalize your learning experience"
                      : step === 3
                        ? "Set up your account credentials"
                        : "We'll create a safe learning environment for your child"}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-4 block">I am signing up as:</Label>
                      <RadioGroup value={accountType} onValueChange={setAccountType} className="space-y-4">
                        <div className="flex items-start space-x-4 rounded-xl border-2 border-gray-200 p-4 hover:border-purple-300 transition-colors cursor-pointer">
                          <RadioGroupItem value="adult" id="adult" className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <User className="h-5 w-5 text-purple-600" />
                              <Label htmlFor="adult" className="text-lg font-medium cursor-pointer">
                                Adult Learner
                              </Label>
                            </div>
                            <p className="text-gray-600">I want to learn Arabic for myself</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rounded-xl border-2 border-gray-200 p-4 hover:border-purple-300 transition-colors cursor-pointer">
                          <RadioGroupItem value="child" id="child" className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Baby className="h-5 w-5 text-teal-600" />
                              <Label htmlFor="child" className="text-lg font-medium cursor-pointer">
                                Child Learner
                              </Label>
                            </div>
                            <p className="text-gray-600">I am a child learning Arabic (with parent permission)</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rounded-xl border-2 border-gray-200 p-4 hover:border-purple-300 transition-colors cursor-pointer">
                          <RadioGroupItem value="parent" id="parent" className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Users className="h-5 w-5 text-orange-600" />
                              <Label htmlFor="parent" className="text-lg font-medium cursor-pointer">
                                Parent
                              </Label>
                            </div>
                            <p className="text-gray-600">I'm signing up for my child to learn Arabic</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-4 block">What is your Arabic proficiency level?</Label>
                      <RadioGroup defaultValue="beginner" className="space-y-3">
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <div className="flex-1">
                            <Label htmlFor="beginner" className="font-medium cursor-pointer">
                              Beginner
                            </Label>
                            <p className="text-sm text-gray-600">I'm new to Arabic or know very little</p>
                          </div>
                        </div>
                        {/* <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="intermediate" id="intermediate" />
                          <div className="flex-1">
                            <Label htmlFor="intermediate" className="font-medium cursor-pointer">
                              Intermediate
                            </Label>
                            <p className="text-sm text-gray-600">I can understand and form basic sentences</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <div className="flex-1">
                            <Label htmlFor="advanced" className="font-medium cursor-pointer">
                              Advanced
                            </Label>
                            <p className="text-sm text-gray-600">I can have conversations but want to improve</p>
                          </div>
                        </div> */}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-4 block">What is your primary goal?</Label>
                      <RadioGroup defaultValue="general" className="space-y-3">
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="general" id="general" />
                          <div className="flex-1">
                            <Label htmlFor="general" className="font-medium cursor-pointer">
                              General Learning
                            </Label>
                            <p className="text-sm text-gray-600">I want to learn Arabic for personal interest</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="travel" id="travel" />
                          <div className="flex-1">
                            <Label htmlFor="travel" className="font-medium cursor-pointer">
                              Travel
                            </Label>
                            <p className="text-sm text-gray-600">I want to learn Arabic for traveling</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="work" id="work" />
                          <div className="flex-1">
                            <Label htmlFor="work" className="font-medium cursor-pointer">
                              Work/Professional
                            </Label>
                            <p className="text-sm text-gray-600">I need Arabic for my job or career</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="academic" id="academic" />
                          <div className="flex-1">
                            <Label htmlFor="academic" className="font-medium cursor-pointer">
                              Academic
                            </Label>
                            <p className="text-sm text-gray-600">I'm studying Arabic in school or university</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="form-input"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="form-input"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="form-input"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <p className="text-xs text-gray-500">Password must be at least 8 characters long</p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox id="terms" className="mt-1" />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-purple-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-purple-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>
                )}

                {step === 4 && accountType === "parent" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="child-first-name" className="text-sm font-medium">
                          Child's first name
                        </Label>
                        <Input
                          id="child-first-name"
                          placeholder="Alex"
                          className="form-input"
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="child-age" className="text-sm font-medium">
                          Child's age
                        </Label>
                        <Select
                          value={formData.childAge}
                          onValueChange={(value) => setFormData({ ...formData, childAge: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 13 }, (_, i) => i + 5).map((age) => (
                              <SelectItem key={age} value={age.toString()}>
                                {age} years old
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-4 block">Child's Arabic proficiency level</Label>
                      <RadioGroup defaultValue="beginner" className="space-y-3">
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="beginner" id="child-beginner" />
                          <div className="flex-1">
                            <Label htmlFor="child-beginner" className="font-medium cursor-pointer">
                              Beginner
                            </Label>
                            <p className="text-sm text-gray-600">New to Arabic</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="some-knowledge" id="child-some-knowledge" />
                          <div className="flex-1">
                            <Label htmlFor="child-some-knowledge" className="font-medium cursor-pointer">
                              Some Knowledge
                            </Label>
                            <p className="text-sm text-gray-600">Knows some words or phrases</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex flex-col space-y-4 pt-6">
                <div className="flex w-full justify-between">
                  {step > 1 ? (
                    <Button variant="outline" onClick={handleBack} className="px-6">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {step < totalSteps ? (
                    <Button className="btn-primary px-6" onClick={handleNext}>
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Link href="/onboarding">
                      <Button className="btn-primary px-6">
                        Create Account
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>

                {step === 1 && (
                  <>
                    <div className="relative flex items-center my-6">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <span className="mx-4 flex-shrink text-sm text-gray-500">OR CONTINUE WITH</span>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-12">
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="h-12">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </Button>
                    </div>
                  </>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
