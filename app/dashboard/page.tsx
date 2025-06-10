"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageSquare, BookText, Award, ArrowRight, Play, Mic, Target, Clock, Flame } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import { useNotifications } from "@/lib/notifications"
import { useEffect } from "react"

export default function DashboardPage() {
  const { addNotification } = useNotifications()

  // Update last study time when user visits dashboard
  useEffect(() => {
    localStorage.setItem("arabicai_last_study", new Date().toISOString())
  }, [])

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50/30 via-white to-teal-50/30">
        <DashboardHeader />

        <main className="flex-1 section-padding">
          <div className="container container-padding">
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="gradient-text">مرحباً</span>, Ahmed! 👋
                  </h1>
                  <p className="text-lg text-gray-600">Ready to continue your Arabic learning journey?</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                    <Flame className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-700">7 day streak</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-purple-700">Level 3</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold gradient-text">12/25</div>
                    <p className="text-xs text-gray-600 mt-1">48% of beginner course</p>
                    <Progress value={48} className="mt-3 h-2" />
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI Conversations</CardTitle>
                    <MessageSquare className="h-4 w-4 text-teal-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-600">18</div>
                    <p className="text-xs text-gray-600 mt-1">5 this week</p>
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Vocabulary Mastered</CardTitle>
                    <BookText className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">127</div>
                    <p className="text-xs text-gray-600 mt-1">23 words this week</p>
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                    <Clock className="h-4 w-4 text-pink-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-pink-600">4.2h</div>
                    <p className="text-xs text-gray-600 mt-1">45m today</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Continue Learning */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-600" />
                        Continue Learning
                      </CardTitle>
                      <CardDescription>Pick up where you left off</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Current Lesson */}
                      <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-6 border border-purple-200">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                            <BookOpen className="h-8 w-8" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-semibold">Lesson 13: Family & Relationships</h3>
                              <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                                65% complete
                              </span>
                            </div>
                            <Progress value={65} className="h-3" />
                            <p className="text-gray-600">
                              Learn vocabulary for family members and practice describing relationships in Arabic.
                            </p>
                            <Link href="/lessons/13">
                              <Button className="btn-primary">
                                Continue Lesson
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                              <MessageSquare className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="font-semibold">Practice Conversation</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Practice speaking with our AI tutor about family topics
                          </p>
                          <Link href="/practice">
                            <Button variant="outline" size="sm" className="w-full">
                              Start Conversation
                              <Mic className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                              <BookText className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="font-semibold">Review Vocabulary</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Review and practice words from recent lessons</p>
                          <Link href="/vocabulary">
                            <Button variant="outline" size="sm" className="w-full">
                              Review Words
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommended for You */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle>Recommended for You</CardTitle>
                      <CardDescription>Based on your progress and interests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-colors">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold mb-2">Numbers & Counting</h3>
                          <p className="text-sm text-gray-600 mb-3">Master Arabic numbers from 1-100</p>
                          <Link href="/lessons/numbers">
                            <Button variant="outline" size="sm" className="w-full">
                              Start Lesson
                            </Button>
                          </Link>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 transition-colors">
                          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-3">
                            <MessageSquare className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold mb-2">Restaurant Dialogue</h3>
                          <p className="text-sm text-gray-600 mb-3">Practice ordering food in Arabic</p>
                          <Link href="/practice/restaurant">
                            <Button variant="outline" size="sm" className="w-full">
                              Practice
                            </Button>
                          </Link>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 transition-colors">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-semibold mb-2">Cultural Stories</h3>
                          <p className="text-sm text-gray-600 mb-3">Learn through Arabic folktales</p>
                          <Link href="/stories">
                            <Button variant="outline" size="sm" className="w-full">
                              Watch
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Recent Vocabulary */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Vocabulary</CardTitle>
                      <CardDescription>Words you've learned recently</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-4">
                          <TabsTrigger value="all" className="text-xs">
                            All
                          </TabsTrigger>
                          <TabsTrigger value="new" className="text-xs">
                            New
                          </TabsTrigger>
                          <TabsTrigger value="review" className="text-xs">
                            Review
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className="space-y-3">
                          <div className="space-y-3">
                            {[
                              { arabic: "عائلة", english: "Family", mastered: true },
                              { arabic: "أب", english: "Father", mastered: true },
                              { arabic: "أم", english: "Mother", mastered: false },
                              { arabic: "أخ", english: "Brother", mastered: false },
                              { arabic: "أخت", english: "Sister", mastered: true },
                            ].map((word, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                  <p className="font-arabic text-lg font-medium">{word.arabic}</p>
                                  <p className="text-sm text-gray-600">{word.english}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  {word.mastered && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Play className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Link href="/vocabulary">
                            <Button variant="link" className="w-full text-purple-600">
                              View all vocabulary →
                            </Button>
                          </Link>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  {/* Weekly Goal */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Weekly Goal</CardTitle>
                      <CardDescription>Keep up the great work!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">5/7</div>
                        <p className="text-sm text-gray-600">Days completed this week</p>
                      </div>
                      <Progress value={71} className="h-3" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>280 minutes</span>
                        <span>Goal: 350 min</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                          <div
                            key={index}
                            className={`h-8 rounded flex items-center justify-center text-xs font-medium ${
                              index < 5
                                ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievements */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Recent Achievements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <Flame className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Week Warrior</p>
                          <p className="text-xs text-gray-600">7-day learning streak</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <BookText className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Vocabulary Master</p>
                          <p className="text-xs text-gray-600">100+ words learned</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
