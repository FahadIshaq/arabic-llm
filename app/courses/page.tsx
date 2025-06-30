"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Star, Clock, Users, ArrowRight, Filter } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"
import { useApp } from "@/contexts/AppContext"
import { useState, useEffect } from "react"

export default function CoursesPage() {
  const { 
    courses, 
    coursesLoading, 
    coursesError, 
    fetchCourses, 
    searchCourses 
  } = useApp()
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  useEffect(() => {
    let filtered = courses

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by level
    if (selectedLevel !== "all") {
      filtered = filtered.filter(course => course.level === selectedLevel)
    }

    setFilteredCourses(filtered)
  }, [courses, searchQuery, selectedLevel])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      searchCourses(searchQuery)
    } else {
      fetchCourses()
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-700"
      case "intermediate":
        return "bg-yellow-100 text-yellow-700"
      case "advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  if (coursesLoading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50/30 via-white to-teal-50/30">
          <DashboardHeader />
          <main className="flex-1 section-padding">
            <div className="container container-padding">
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading courses...</p>
              </div>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-50/30 via-white to-teal-50/30">
        <DashboardHeader />

        <main className="flex-1 section-padding">
          <div className="container container-padding">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Arabic Courses</span>
                  </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose from our comprehensive collection of Arabic learning courses designed for all levels
                </p>
                </div>

              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <form onSubmit={handleSearch} className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 h-12"
                    />
                  </div>
                </form>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Filter by level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Error Message */}
              {coursesError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">{coursesError}</p>
                    </div>
              )}

              {/* Courses Grid */}
              {filteredCourses.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="course-card card-hover">
                      <CardHeader className="pb-4">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-teal-100 rounded-lg mb-4 flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-purple-600" />
                          </div>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getLevelColor(course.level)}>
                            {course.level}
                            </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="text-sm text-gray-500">({course.reviews})</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                            <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students} students</span>
                          </div>
                            </div>

                              <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-purple-600">
                              ${course.price}
                            </span>
                            {course.originalPrice && course.originalPrice > course.price && (
                              <span className="text-sm text-gray-500 line-through">
                                ${course.originalPrice}
                              </span>
                            )}
                              </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{course.lessonsCount} lessons</span>
                            <span>•</span>
                            <span>{course.unitsCount} units</span>
                            <span>•</span>
                            <span>{course.totalHours}h total</span>
                          </div>
                  </div>

                        <div className="space-y-2">
                                <Link href={`/courses/${course.id}`}>
                            <Button className="w-full btn-primary">
                              View Course
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                                </Link>
                              </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchQuery || selectedLevel !== "all" 
                      ? "Try adjusting your search or filters" 
                      : "No courses available at the moment"
                    }
                  </p>
                  {(searchQuery || selectedLevel !== "all") && (
                    <Button 
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedLevel("all")
                        fetchCourses()
                      }}
                      variant="outline"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
