import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Target, Clock, BookOpen, Zap, Trophy, BarChart3, Activity } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ProgressPage() {
  const stats = {
    totalHours: 47,
    streak: 12,
    wordsLearned: 324,
    lessonsCompleted: 18,
    averageScore: 87,
    weeklyGoal: 5,
    weeklyProgress: 3,
  }

  const weeklyData = [
    { day: "Mon", hours: 1.5, lessons: 2 },
    { day: "Tue", hours: 2.0, lessons: 3 },
    { day: "Wed", hours: 0.5, lessons: 1 },
    { day: "Thu", hours: 1.8, lessons: 2 },
    { day: "Fri", hours: 2.2, lessons: 3 },
    { day: "Sat", hours: 0, lessons: 0 },
    { day: "Sun", hours: 1.0, lessons: 1 },
  ]

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Study for 7 consecutive days",
      icon: "🔥",
      earned: true,
      date: "2024-01-22",
    },
    {
      id: 3,
      title: "Vocabulary Master",
      description: "Learn 100 new words",
      icon: "📚",
      earned: true,
      date: "2024-01-28",
    },
    {
      id: 4,
      title: "Perfect Score",
      description: "Get 100% on an assessment",
      icon: "⭐",
      earned: false,
      progress: 87,
    },
    {
      id: 5,
      title: "Marathon Learner",
      description: "Study for 30 consecutive days",
      icon: "🏃",
      earned: false,
      progress: 40,
    },
  ]

  const skillLevels = [
    { skill: "Reading", level: 65, color: "bg-blue-500" },
    { skill: "Writing", level: 45, color: "bg-green-500" },
    { skill: "Listening", level: 72, color: "bg-purple-500" },
    { skill: "Speaking", level: 38, color: "bg-orange-500" },
    { skill: "Grammar", level: 58, color: "bg-pink-500" },
    { skill: "Vocabulary", level: 81, color: "bg-teal-500" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Progress
              </h1>
              <p className="text-muted-foreground">Track your Arabic learning journey</p>
            </div>

            {/* Overview Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Total Hours</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mt-2">{stats.totalHours}</div>
                  <p className="text-xs text-blue-700 mt-1">+5 this week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">Current Streak</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-900 mt-2">{stats.streak} days</div>
                  <p className="text-xs text-orange-700 mt-1">Keep it up!</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Words Learned</span>
                  </div>
                  <div className="text-2xl font-bold text-green-900 mt-2">{stats.wordsLearned}</div>
                  <p className="text-xs text-green-700 mt-1">+23 this week</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Avg. Score</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-900 mt-2">{stats.averageScore}%</div>
                  <p className="text-xs text-purple-700 mt-1">Excellent!</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Weekly Goal */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Weekly Goal
                      </CardTitle>
                      <CardDescription>Complete {stats.weeklyGoal} lessons this week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {stats.weeklyProgress}/{stats.weeklyGoal} lessons
                          </span>
                        </div>
                        <Progress value={(stats.weeklyProgress / stats.weeklyGoal) * 100} className="h-3" />
                        <p className="text-sm text-muted-foreground">
                          {stats.weeklyGoal - stats.weeklyProgress} lessons remaining
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span>Completed "Arabic Alphabet" lesson</span>
                          <span className="text-muted-foreground ml-auto">2h ago</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>Practiced conversation with AI</span>
                          <span className="text-muted-foreground ml-auto">1d ago</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span>Earned "Week Warrior" achievement</span>
                          <span className="text-muted-foreground ml-auto">2d ago</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span>Completed vocabulary review</span>
                          <span className="text-muted-foreground ml-auto">3d ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Weekly Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      This Week's Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weeklyData.map((day, index) => (
                        <div key={day.day} className="flex items-center gap-4">
                          <div className="w-12 text-sm font-medium">{day.day}</div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-purple-500 h-2 rounded-full transition-all"
                                  style={{ width: `${(day.hours / 3) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground w-12">{day.hours}h</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{day.lessons} lessons</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Breakdown</CardTitle>
                    <CardDescription>Your proficiency in different Arabic language skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {skillLevels.map((skill, index) => (
                        <div key={skill.skill} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.skill}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={`${skill.color} h-2 rounded-full transition-all`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Strongest Skill</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-teal-600 mb-2">Vocabulary</div>
                        <div className="text-lg text-muted-foreground">81% proficiency</div>
                        <p className="text-sm text-muted-foreground mt-2">
                          You excel at learning new words and their meanings
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Focus Area</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 mb-2">Speaking</div>
                        <div className="text-lg text-muted-foreground">38% proficiency</div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Practice more conversations to improve speaking skills
                        </p>
                        <Link href="/practice">
                          <Button size="sm" className="mt-3">
                            Practice Speaking
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {achievements.map((achievement) => (
                    <Card
                      key={achievement.id}
                      className={`${
                        achievement.earned
                          ? "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200"
                          : "opacity-75"
                      }`}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{achievement.icon}</div>
                        <h3 className="font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                        {achievement.earned ? (
                          <div className="space-y-2">
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <Trophy className="h-3 w-3 mr-1" />
                              Earned
                            </Badge>
                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="text-sm font-medium">{achievement.progress}% complete</div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                  <p className="text-muted-foreground mb-6">
                    Get insights into your learning patterns and performance trends
                  </p>
                  <Button variant="outline">View Full Analytics</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
