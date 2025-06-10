import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ArrowRight, Check, BookText, MessageSquare, BarChart3, Filter } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function LessonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Lessons</h1>
                <p className="text-muted-foreground">Master Arabic with structured lessons</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Tabs defaultValue="all" className="w-[300px]">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="beginner">Beginner</TabsTrigger>
                    <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Beginner Course</CardTitle>
                      <CardDescription>Master the basics of Arabic</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">8/20 lessons completed</div>
                  </div>
                  <Progress value={40} className="h-2" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Completed Lesson */}
                    <div className="rounded-lg border p-4 bg-muted/30">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Lesson 1: Arabic Alphabet</h3>
                            <div className="rounded-full bg-green-100 p-1">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Learn the Arabic letters and sounds</p>
                          <div className="mt-3">
                            <Link href="/lessons/1">
                              <Button variant="outline" size="sm" className="w-full">
                                Review
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Current Lesson */}
                    <div className="rounded-lg border p-4 border-primary/20 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-primary/10 p-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Lesson 5: At the Market</h3>
                          <p className="text-xs text-muted-foreground mt-1">Learn shopping vocabulary</p>
                          <Progress value={60} className="h-1.5 mt-2" />
                          <div className="mt-3">
                            <Link href="/lessons/5">
                              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                                Continue
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Locked Lesson */}
                    <div className="rounded-lg border p-4 opacity-70">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md bg-gray-100 p-2">
                          <BookOpen className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Lesson 6: Family Members</h3>
                          <p className="text-xs text-muted-foreground mt-1">Learn family-related vocabulary</p>
                          <div className="mt-3">
                            <Button variant="outline" size="sm" className="w-full" disabled>
                              Locked
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* More lessons... */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4 opacity-70">
                        <div className="flex items-start gap-3">
                          <div className="rounded-md bg-gray-100 p-2">
                            <BookOpen className="h-5 w-5 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">Lesson {i + 7}: Coming Soon</h3>
                            <p className="text-xs text-muted-foreground mt-1">This lesson is not yet available</p>
                            <div className="mt-3">
                              <Button variant="outline" size="sm" className="w-full" disabled>
                                Locked
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Intermediate Course</CardTitle>
                      <CardDescription>Advance your Arabic skills</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">0/15 lessons completed</div>
                  </div>
                  <Progress value={0} className="h-2" />
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-dashed p-8 text-center">
                    <BookText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Intermediate Course Locked</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete the Beginner Course to unlock Intermediate lessons
                    </p>
                    <Button variant="outline">View Requirements</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Practice</CardTitle>
                  <CardDescription>Enhance your learning with these activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-5 w-5 text-accent" />
                        <h3 className="font-medium">Conversation Practice</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Practice what you've learned in real conversations
                      </p>
                      <Link href="/practice">
                        <Button variant="outline" size="sm" className="w-full">
                          Start Conversation
                        </Button>
                      </Link>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookText className="h-5 w-5 text-secondary-foreground" />
                        <h3 className="font-medium">Vocabulary Review</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Review words from completed lessons</p>
                      <Link href="/vocabulary">
                        <Button variant="outline" size="sm" className="w-full">
                          Review Vocabulary
                        </Button>
                      </Link>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Progress Assessment</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Test your knowledge with a quick quiz</p>
                      <Link href="/assessment">
                        <Button variant="outline" size="sm" className="w-full">
                          Take Quiz
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-4 bg-gray-50">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2025 ArabicAI. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/help" className="text-sm font-medium hover:text-primary">
              Help
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
