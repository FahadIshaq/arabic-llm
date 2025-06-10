"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, Award, ArrowRight, ArrowLeft, RotateCcw, Volume2, Mic } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes

  const assessment = {
    title: "Arabic Fundamentals Assessment",
    description: "Test your knowledge of basic Arabic concepts",
    duration: 30,
    totalQuestions: 20,
    passingScore: 70,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the Arabic word for 'hello'?",
        options: [
          { id: "a", text: "مرحبا", correct: true },
          { id: "b", text: "شكرا", correct: false },
          { id: "c", text: "مع السلامة", correct: false },
          { id: "d", text: "أهلا وسهلا", correct: false },
        ],
        explanation: "مرحبا (Marhaba) is the most common way to say 'hello' in Arabic.",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "How many letters are in the Arabic alphabet?",
        options: [
          { id: "a", text: "26", correct: false },
          { id: "b", text: "28", correct: true },
          { id: "c", text: "30", correct: false },
          { id: "d", text: "32", correct: false },
        ],
        explanation: "The Arabic alphabet consists of 28 letters.",
      },
      {
        id: 3,
        type: "audio",
        question: "Listen to the audio and select the correct Arabic word:",
        audio: "/placeholder-audio.mp3",
        options: [
          { id: "a", text: "بيت", correct: true },
          { id: "b", text: "كتاب", correct: false },
          { id: "c", text: "مدرسة", correct: false },
          { id: "d", text: "سيارة", correct: false },
        ],
        explanation: "The audio says 'بيت' which means 'house'.",
      },
      {
        id: 4,
        type: "reading",
        question: "What does this Arabic text mean: 'أنا طالب'?",
        options: [
          { id: "a", text: "I am a teacher", correct: false },
          { id: "b", text: "I am a student", correct: true },
          { id: "c", text: "I am a doctor", correct: false },
          { id: "d", text: "I am a worker", correct: false },
        ],
        explanation: "'أنا طالب' means 'I am a student' in Arabic.",
      },
      {
        id: 5,
        type: "pronunciation",
        question: "Record yourself pronouncing the word 'شكرا' (thank you):",
        targetWord: "شكرا",
        phonetic: "shukran",
        explanation: "شكرا is pronounced 'shukran' and means 'thank you'.",
      },
    ],
  }

  const currentQ = assessment.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessment.totalQuestions) * 100

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    assessment.questions.forEach((q, index) => {
      if (q.type === "multiple-choice" || q.type === "audio" || q.type === "reading") {
        const userAnswer = answers[index]
        const correctOption = q.options?.find((opt) => opt.correct)
        if (userAnswer === correctOption?.id) {
          correct++
        }
      }
    })
    return Math.round((correct / assessment.questions.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const renderQuestion = () => {
    switch (currentQ.type) {
      case "multiple-choice":
      case "reading":
        return (
          <div className="space-y-6">
            <div className="text-lg font-medium">{currentQ.question}</div>
            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer} className="space-y-3">
              {currentQ.options?.map((option) => (
                <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer font-arabic text-lg">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case "audio":
        return (
          <div className="space-y-6">
            <div className="text-lg font-medium">{currentQ.question}</div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Play Audio
              </Button>
            </div>
            <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer} className="space-y-3">
              {currentQ.options?.map((option) => (
                <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer font-arabic text-lg">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )

      case "pronunciation":
        return (
          <div className="space-y-6 text-center">
            <div className="text-lg font-medium">{currentQ.question}</div>
            <div className="space-y-4">
              <div className="text-6xl font-arabic text-purple-600">{currentQ.targetWord}</div>
              <div className="text-muted-foreground">Pronunciation: {currentQ.phonetic}</div>
            </div>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Listen
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600">
                <Mic className="h-5 w-5" />
                Record
              </Button>
            </div>
          </div>
        )

      default:
        return <div>Question type not supported</div>
    }
  }

  if (showResults) {
    const score = calculateScore()
    const passed = score >= assessment.passingScore

    return (
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 py-6 md:py-10">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
                    passed ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {passed ? (
                    <Award className="h-10 w-10 text-green-600" />
                  ) : (
                    <AlertCircle className="h-10 w-10 text-red-600" />
                  )}
                </div>
                <h1 className="text-3xl font-bold">{passed ? "Congratulations!" : "Keep Practicing!"}</h1>
                <p className="text-muted-foreground">
                  {passed
                    ? "You've successfully completed the assessment!"
                    : "You need more practice to pass this assessment."}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Your Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{score}%</div>
                    <div className="text-muted-foreground">
                      {passed ? "Passed" : "Failed"} • Passing score: {assessment.passingScore}%
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Correct Answers</span>
                      <span>
                        {Math.round((score / 100) * assessment.questions.length)}/{assessment.questions.length}
                      </span>
                    </div>
                    <Progress value={score} className="h-3" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round((score / 100) * assessment.questions.length)}
                      </div>
                      <div className="text-sm text-muted-foreground">Correct</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-2xl font-bold text-red-600">
                        {assessment.questions.length - Math.round((score / 100) * assessment.questions.length)}
                      </div>
                      <div className="text-sm text-muted-foreground">Incorrect</div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" className="flex items-center gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Retake Assessment
                    </Button>
                    <Link href="/dashboard">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        Continue Learning
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {passed && (
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Certificate Earned!</h3>
                    <p className="text-green-700 mb-4">
                      You've earned a certificate for completing Arabic Fundamentals
                    </p>
                    <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                      Download Certificate
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Assessment Header */}
            <div className="space-y-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>

              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{assessment.title}</h1>
                  <p className="text-muted-foreground">{assessment.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                  <Badge variant="outline">
                    Question {currentQuestion + 1} of {assessment.totalQuestions}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </div>

            {/* Question Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Question {currentQuestion + 1}</CardTitle>
                  <Badge variant="outline" className="capitalize">
                    {currentQ.type.replace("-", " ")}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">{renderQuestion()}</CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                {Object.keys(answers).length} of {assessment.totalQuestions} answered
              </div>

              <Button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion]}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {currentQuestion === assessment.questions.length - 1 ? "Finish" : "Next"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
