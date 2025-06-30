"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageSquare, BookText, Award, ArrowRight, Play, Mic, Target, Clock, Flame } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import { useApp } from "@/contexts/AppContext"
import { useEffect } from "react"

export default function DashboardPage() {
  const { 
    user, 
    courses, 
    coursesLoading, 
    getEnrolledCourses,
    stats,
    progress,
    getCompletionPercentage,
    addLocalNotification
  } = useApp()

  // Update last study time when user visits dashboard
  useEffect(() => {
    localStorage.setItem("arabicai_last_study", new Date().toISOString())
  }, [])

  // Fetch enrolled courses when component mounts
  useEffect(() => {
    if (user) {
      getEnrolledCourses()
    }
  }, [user, getEnrolledCourses])

  if (!user) {
    return null
  }

  // Calculate current course progress
  const currentCourse = courses[0] // Get the first enrolled course
  const currentCourseProgress = currentCourse ? getCompletionPercentage(currentCourse.id, currentCourse.lessonsCount) : 0

  // Get current lesson progress
  const currentLessonProgress = currentCourse ? progress.find(p => p.courseId === currentCourse.id && !p.completed) : null

  // Format study time
  const formatStudyTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

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
                    <span className="gradient-text">مرحباً</span>, {user.firstName}! 👋
                  </h1>
                  <p className="text-lg text-gray-600">Ready to continue your Arabic learning journey?</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                    <Flame className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-700">{user.streakDays} day streak</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="font-semibold text-purple-700">Level {user.level}</span>
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
                    <div className="text-2xl font-bold gradient-text">
                      {stats?.totalLessonsCompleted || 0}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {currentCourse ? `${currentCourseProgress}% of ${currentCourse.title}` : 'No active course'}
                    </p>
                    <Progress value={currentCourseProgress} className="mt-3 h-2" />
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI Conversations</CardTitle>
                    <MessageSquare className="h-4 w-4 text-teal-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-600">
                      {stats?.aiConversations || 0}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {stats?.conversationsThisWeek || 0} this week
                    </p>
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                    <BookText className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">{user.totalPoints}</div>
                    <p className="text-xs text-gray-600 mt-1">Keep learning to earn more!</p>
                  </CardContent>
                </Card>

                <Card className="lesson-card card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                    <Clock className="h-4 w-4 text-pink-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-pink-600">
                      {stats?.totalStudyTime ? formatStudyTime(stats.totalStudyTime) : '0m'}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {stats?.studyTimeToday ? formatStudyTime(stats.studyTimeToday) : '0m'} today
                    </p>
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
                      {currentCourse && currentLessonProgress ? (
                        <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-6 border border-purple-200">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                              <BookOpen className="h-8 w-8" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold">{currentCourse.title}</h3>
                                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                                  {currentCourseProgress}% complete
                                </span>
                              </div>
                              <Progress value={currentCourseProgress} className="h-3" />
                              <p className="text-gray-600">
                                Continue your learning journey with {currentCourse.title}
                              </p>
                              <Link href={`/courses/${currentCourse.id}`}>
                                <Button className="btn-primary">
                                  Continue Course
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                          <div className="text-center space-y-4">
                            <BookOpen className="h-12 w-12 text-gray-400 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-600">No Active Course</h3>
                            <p className="text-gray-500">Start your Arabic learning journey by enrolling in a course</p>
                            <Link href="/courses">
                              <Button className="btn-primary">
                                Browse Courses
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}

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
                            Practice speaking with our AI tutor
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

                  {/* Enrolled Courses */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle>Your Courses</CardTitle>
                      <CardDescription>Courses you're currently enrolled in</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {coursesLoading ? (
                        <div className="text-center py-8">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                          <p className="text-gray-600 mt-4">Loading your courses...</p>
                        </div>
                      ) : courses.length > 0 ? (
                        <div className="space-y-4">
                          {courses.map((course) => {
                            const courseProgress = getCompletionPercentage(course.id, course.lessonsCount)
                            return (
                              <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
                                  <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold">{course.title}</h3>
                                  <p className="text-sm text-gray-600">{course.description}</p>
                                  <div className="flex items-center gap-4 mt-2">
                                    <Progress value={courseProgress} className="flex-1 h-2" />
                                    <span className="text-sm text-gray-600">{courseProgress}%</span>
                                  </div>
                                </div>
                                <Link href={`/courses/${course.id}`}>
                                  <Button size="sm" variant="outline">
                                    Continue
                                  </Button>
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-600 mb-2">No Enrolled Courses</h3>
                          <p className="text-gray-500 mb-4">Start your Arabic learning journey by enrolling in a course</p>
                          <Link href="/courses">
                            <Button className="btn-primary">
                              Browse Courses
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity & Achievements */}
                <div className="space-y-6">
                  {/* Recent Activity */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {stats?.recentActivity ? (
                          stats.recentActivity.map((activity: any, index: number) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{activity.title}</p>
                                <p className="text-xs text-gray-600">{activity.time}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-4">
                            <p className="text-gray-500 text-sm">No recent activity</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievements */}
                  <Card className="lesson-card">
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {stats?.achievements ? (
                          stats.achievements.map((achievement: any, index: number) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Award className="h-4 w-4 text-yellow-600" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{achievement.title}</p>
                                <p className="text-xs text-gray-600">{achievement.description}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-4">
                            <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500 text-sm">Complete lessons to earn achievements</p>
                          </div>
                        )}
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
