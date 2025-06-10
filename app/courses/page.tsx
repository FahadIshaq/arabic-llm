import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Users, Star, Play, CheckCircle, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import coursesData from "@/data/courses.json"

export default function CoursesPage() {
  const courses = coursesData.courses

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 py-6 md:py-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Arabic Courses
                  </h1>
                  <p className="text-muted-foreground">Discover comprehensive Arabic learning paths</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-10 w-[250px]" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Total Courses</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-900 mt-2">12</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Completed</span>
                    </div>
                    <div className="text-2xl font-bold text-green-900 mt-2">3</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">In Progress</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900 mt-2">1</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-medium text-orange-600">Hours Learned</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-900 mt-2">47</div>
                  </CardContent>
                </Card>
              </div>

              {/* Course Tabs */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All Courses</TabsTrigger>
                  <TabsTrigger value="enrolled">My Courses</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                      <Card
                        key={course.id}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-gray-900">
                              {course.price}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                                {course.title}
                              </CardTitle>
                              <CardDescription className="mt-1 line-clamp-2">{course.description}</CardDescription>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {course.lessons} lessons
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {course.rating}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="space-y-4">
                            <div className="text-sm text-muted-foreground">By {course.instructor.name}</div>

                            <div className="flex flex-wrap gap-1">
                              {course?.features?.slice(0, 3).map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                              {course?.features && course.features.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{course.features.length - 3} more
                                </Badge>
                              )}
                            </div>

                            {course.enrolled && course.progress > 0 && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                              </div>
                            )}

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                {course?.students?.toLocaleString() ?? 0} students
                              </div>

                              {course.enrolled ? (
                                <Link href={`/courses/${course.id}`}>
                                  <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                                  >
                                    {course.progress > 0 ? "Continue" : "Start"}
                                  </Button>
                                </Link>
                              ) : (
                                <Link href={`/courses/${course.id}`}>
                                  <Button variant="outline" size="sm">
                                    View Course
                                  </Button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="enrolled" className="space-y-6">
                  <div className="text-center py-12">
                    <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your Enrolled Courses</h3>
                    <p className="text-muted-foreground mb-6">
                      Continue your Arabic learning journey with your enrolled courses
                    </p>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {courses
                        .filter((course) => course.enrolled)
                        .map((course) => (
                          <Card key={course.id} className="text-left">
                            <CardHeader>
                              <CardTitle>{course.title}</CardTitle>
                              <CardDescription>{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                  <span>Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                                <Link href={`/courses/${course.id}`}>
                                  <Button className="w-full">Continue Learning</Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="beginner">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses
                      .filter((course) => course.level === "Beginner")
                      .map((course) => (
                        <Card key={course.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Link href={`/courses/${course.id}`}>
                              <Button className="w-full">View Course</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="intermediate">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses
                      .filter((course) => course.level === "Intermediate")
                      .map((course) => (
                        <Card key={course.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Link href={`/courses/${course.id}`}>
                              <Button className="w-full">View Course</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="advanced">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses
                      .filter((course) => course.level === "Advanced")
                      .map((course) => (
                        <Card key={course.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle>{course.title}</CardTitle>
                            <CardDescription>{course.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Link href={`/courses/${course.id}`}>
                              <Button className="w-full">View Course</Button>
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
