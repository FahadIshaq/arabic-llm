"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Volume2,
  Mic,
  Target,
  Clock,
} from "lucide-react"

export default function LearnPage({ params }: { params: { id: string } }) {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [completed, setCompleted] = useState<number[]>([0, 1, 2])

  const lessons = [
    {
      id: 1,
      title: "Introduction to Arabic Script",
      type: "video",
      duration: "15 min",
      content: {
        video: "/placeholder.svg?height=400&width=600",
        description: "Learn about the Arabic writing system, its history, and basic characteristics.",
        objectives: [
          "Understand Arabic script direction",
          "Learn about connected letters",
          "Recognize Arabic letter shapes",
        ],
      },
    },
    {
      id: 2,
      title: "Letters Alif to Taa",
      type: "interactive",
      duration: "20 min",
      content: {
        letters: [
          { arabic: "ا", name: "Alif", sound: "/a/" },
          { arabic: "ب", name: "Baa", sound: "/b/" },
          { arabic: "ت", name: "Taa", sound: "/t/" },
        ],
        description: "Practice writing and pronouncing the first three letters of the Arabic alphabet.",
      },
    },
    {
      id: 3,
      title: "Letters Thaa to Khaa",
      type: "interactive",
      duration: "18 min",
      content: {
        letters: [
          { arabic: "ث", name: "Thaa", sound: "/θ/" },
          { arabic: "ج", name: "Jeem", sound: "/dʒ/" },
          { arabic: "ح", name: "Haa", sound: "/ħ/" },
          { arabic: "خ", name: "Khaa", sound: "/x/" },
        ],
        description: "Continue learning Arabic letters with proper pronunciation.",
      },
    },
    {
      id: 4,
      title: "Practice: Writing Letters",
      type: "practice",
      duration: "25 min",
      content: {
        description: "Practice writing the letters you've learned with guided exercises.",
        exercises: ["Trace the letter shapes", "Write letters independently", "Connect letters in words"],
      },
    },
  ]

  const currentLessonData = lessons[currentLesson]
  const isCompleted = completed.includes(currentLesson)
  const progress = (completed.length / lessons.length) * 100

  const markComplete = () => {
    if (!completed.includes(currentLesson)) {
      setCompleted([...completed, currentLesson])
    }
  }

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
    }
  }

  const renderLessonContent = () => {
    switch (currentLessonData.type) {
      case "video":
        return (
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden bg-black">
              <img
                src={currentLessonData.content.video || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white/90 text-black hover:bg-white"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Lesson Objectives</h3>
              <ul className="space-y-2">
                {currentLessonData.content.objectives?.map((objective, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-purple-600" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case "interactive":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Arabic Letters</h3>
              <p className="text-muted-foreground mb-6">{currentLessonData.content.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {currentLessonData.content.letters?.map((letter, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl font-arabic mb-4 text-purple-600">{letter.arabic}</div>
                    <h4 className="text-lg font-semibold mb-2">{letter.name}</h4>
                    <p className="text-muted-foreground mb-4">Sound: {letter.sound}</p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="outline" size="sm">
                        <Volume2 className="h-4 w-4 mr-1" />
                        Listen
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mic className="h-4 w-4 mr-1" />
                        Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "practice":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Writing Practice</h3>
              <p className="text-muted-foreground mb-6">{currentLessonData.content.description}</p>
            </div>
            <div className="space-y-4">
              {currentLessonData.content.exercises?.map((exercise, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span>{exercise}</span>
                      <Button variant="outline" size="sm">
                        Start Exercise
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return <div>Content not available</div>
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/courses/${params.id}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Course
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">Arabic Fundamentals</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Lesson {currentLesson + 1} of {lessons.length}
            </div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
            <div className="text-sm font-medium">{Math.round(progress)}%</div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-80 border-r bg-muted/30 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Course Progress</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Completed</span>
                  <span>
                    {completed.length}/{lessons.length}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="font-semibold">Lessons</h3>
              <div className="space-y-1">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      currentLesson === index ? "bg-purple-50 border-purple-200" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {completed.includes(index) ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : currentLesson === index ? (
                          <div className="h-5 w-5 rounded-full bg-purple-600" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{lesson.title}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.duration}</span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Lesson Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{currentLessonData.type}</Badge>
                  <Badge variant="outline">{currentLessonData.duration}</Badge>
                  {isCompleted && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold">{currentLessonData.title}</h1>
              </div>

              {/* Lesson Content */}
              {renderLessonContent()}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="border-t p-4">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Button variant="outline" onClick={prevLesson} disabled={currentLesson === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {!isCompleted && (
                  <Button
                    variant="outline"
                    onClick={markComplete}
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark Complete
                  </Button>
                )}
                <Button variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart
                </Button>
              </div>

              <Button
                onClick={nextLesson}
                disabled={currentLesson === lessons.length - 1}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
