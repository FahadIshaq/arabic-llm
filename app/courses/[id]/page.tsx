import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  ArrowLeft,
  Download,
  Share,
  Heart,
  Award,
  Target,
  MessageSquare,
  FileText,
  Video,
  Headphones,
  Lock,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import coursesData from "@/data/courses.json"

interface Module {
  id: number
  title: string
  type: string
  duration: string
  locked: boolean
}

interface Unit {
  title: string
  locked: boolean
  modules: Module[]
}

interface Course {
  id: number
  title: string
  description: string
  level: string
  year: number
  duration: string
  totalHours: number
  unitsCount: number
  assessmentsPerUnit: number
  certification: string
  image: string
  price: string
  originalPrice: string | null
  lessons: number
  rating: number
  reviews: number
  students: number
  features: string[]
  requirements: string[]
  outcomes: string[]
  enrolled: boolean
  progress: number
  instructor: {
    name: string
    title: string
    avatar: string
    experience: string
    rating: number
    bio: string
    students: number
  }
  units: Unit[]
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = coursesData.courses.find((c) => c.id === parseInt(params.id)) as Course

  if (!course) {
    return <div>Course not found</div>
  }

  const isModuleLocked = (unitIndex: number, moduleIndex: number) => {
    if (unitIndex === 0 && moduleIndex === 0) return false
    if (unitIndex === 0) {
      const previousModule = course.units[0].modules[moduleIndex - 1]
      return previousModule.locked
    }
    const previousUnit = course.units[unitIndex - 1]
    const lastModuleOfPreviousUnit = previousUnit.modules[previousUnit.modules.length - 1]
    return lastModuleOfPreviousUnit.locked
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "audio":
        return <Headphones className="h-4 w-4" />
      case "interactive":
        return <MessageSquare className="h-4 w-4" />
      case "practice":
        return <Target className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "text-blue-600"
      case "audio":
        return "text-green-600"
      case "interactive":
        return "text-purple-600"
      case "practice":
        return "text-orange-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 py-6">
          <div className="container px-4 md:px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/courses" className="hover:text-foreground">
                Courses
              </Link>
              <span>/</span>
              <span>{course.title}</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Course Header */}
                <div className="space-y-4">
                  <Link href="/courses">
                    <Button variant="ghost" size="sm" className="mb-4">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Courses
                    </Button>
                  </Link>

                  <div className="flex items-start gap-4">
                    <Badge className="bg-green-100 text-green-800">{course.level}</Badge>
                    <Badge variant="outline">{course.price}</Badge>
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
                  <p className="text-lg text-muted-foreground">{course.description}</p>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course?.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {course.enrolled && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Your Progress</span>
                        <span className="text-sm text-muted-foreground">{course.progress}% complete</span>
                      </div>
                      <Progress value={course.progress} className="h-2 mb-3" />
                      <Link href={`/courses/${course.id}/learn`}>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                          Continue Learning
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Course Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                      <Play className="mr-2 h-5 w-5" />
                      Preview Course
                    </Button>
                  </div>
                </div>

                {/* Course Tabs */}
                <Tabs defaultValue="curriculum" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                    <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>

                  <TabsContent value="curriculum" className="space-y-6">
                    <div className="space-y-4">
                      {course.units.map((unit, unitIndex) => (
                        <Card key={unitIndex} className={unit.locked ? "opacity-60" : ""}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              {unit.title}
                              {unit.locked && <Lock className="h-4 w-4 text-muted-foreground" />}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {unit.modules.map((module, moduleIndex) => {
                              const locked = isModuleLocked(unitIndex, moduleIndex)
                              return (
                                <div
                                  key={module.id}
                                  className={`flex items-center justify-between p-3 rounded-lg border ${
                                    locked ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/50 transition-colors"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {locked ? (
                                      <Lock className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                      <Play className="h-4 w-4 text-primary" />
                                    )}
                                    <div>
                                      <h4 className="font-medium">{module.title}</h4>
                                      <p className="text-sm text-muted-foreground">
                                        {module.type} • {module.duration}
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    variant={locked ? "outline" : "default"}
                                    disabled={locked}
                                    className="flex items-center gap-2"
                                  >
                                    {locked ? "Locked" : "Start"}
                                  </Button>
                                </div>
                              )
                            })}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="instructor" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={course.instructor.avatar || "/placeholder.svg"}
                            alt={course.instructor.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                            <p className="text-m42rwt58y4ezsdwçuted-foreground">{course.instructor.title}</p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span>{course.instructor.rating} rating</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>{course.instructor?.students?.toLocaleString() ?? 0} students</span> 
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="h-4 w-4" />
                                <span>{course.instructor.experience}</span>
                              </div>
                            </div>
                            <p className="mt-4 text-muted-foreground">{course.instructor.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="reviews" className="space-y-6">
                    <div className="text-center py-8">
                      <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Student Reviews</h3>
                      <p className="text-muted-foreground">See what other students are saying about this course</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="space-y-6">
                    <div className="text-center py-8">
                      <Download className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Course Resources</h3>
                      <p className="text-muted-foreground">Download additional materials and resources for this course</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Enrollment Card */}
                <Card className="sticky top-6">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{course.price}</div>
                        {course?.originalPrice && typeof course.originalPrice === 'string' && (
                          <div className="text-sm text-muted-foreground line-through">{course.originalPrice}</div>
                        )}
                      </div>

                      {course.enrolled ? (
                        <div className="space-y-3">
                          <Link href={`/courses/${course.id}/learn`}>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                              Continue Learning
                            </Button>
                          </Link>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Share className="mr-2 h-4 w-4" />
                              Share
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Heart className="mr-2 h-4 w-4" />
                              Save
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Enroll Now
                          </Button>
                          <Button variant="outline" className="w-full">
                            Try Free Preview
                          </Button>
                        </div>
                      )}

                      <Separator />

                      <div className="space-y-3 text-sm">
                        <h4 className="font-medium">This course includes:</h4>
                        <ul className="space-y-2">
                          {course?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          )) ?? []}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {course?.requirements?.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </CardContent>
                </Card>

                {/* Learning Outcomes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {course?.outcomes?.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
