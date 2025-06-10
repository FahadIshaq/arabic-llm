import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookText, Search, Play, RotateCcw, Check, Filter } from "lucide-react"
import {DashboardHeader} from "@/components/dashboard-header"

export default function VocabularyPage() {
  const vocabularyWords = [
    { arabic: "مرحبا", english: "Hello", category: "Greetings", mastered: true },
    { arabic: "شكرا", english: "Thank you", category: "Greetings", mastered: true },
    { arabic: "بيت", english: "House", category: "Home", mastered: false },
    { arabic: "مدرسة", english: "School", category: "Education", mastered: false },
    { arabic: "كتاب", english: "Book", category: "Education", mastered: true },
    { arabic: "طعام", english: "Food", category: "Food", mastered: false },
    { arabic: "ماء", english: "Water", category: "Food", mastered: true },
    { arabic: "سيارة", english: "Car", category: "Transportation", mastered: false },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-4 sm:py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Vocabulary</h1>
                <p className="text-sm sm:text-base text-muted-foreground">Practice and review your Arabic vocabulary</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search words..." className="pl-8 w-[200px] sm:w-[250px]" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Total Words</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">64</div>
                  <p className="text-xs text-muted-foreground">+8 this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Mastered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">28</div>
                  <p className="text-xs text-muted-foreground">44% mastery</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">24</div>
                  <p className="text-xs text-muted-foreground">In progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Review Due</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <p className="text-xs text-muted-foreground">Need practice</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Words</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
                <TabsTrigger value="mastered">Mastered</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-3 sm:gap-4">
                  {vocabularyWords.map((word, index) => (
                    <Card key={index} className="hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="text-center min-w-[80px]">
                              <p className="font-arabic text-xl sm:text-2xl">{word.arabic}</p>
                              <p className="text-sm text-muted-foreground">{word.english}</p>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{word.category}</span>
                                {word.mastered ? (
                                  <div className="flex items-center gap-1 text-green-600">
                                    <Check className="h-3 w-3" />
                                    <span className="text-xs">Mastered</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center gap-1 text-yellow-600">
                                    <RotateCcw className="h-3 w-3" />
                                    <span className="text-xs">Learning</span>
                                  </div>
                                )}
                              </div>
                              <Progress value={word.mastered ? 100 : 60} className="h-1.5" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="touch-target">
                              <Play className="h-4 w-4" />
                              <span className="sr-only">Play pronunciation</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              Practice
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="learning" className="space-y-4">
                <div className="text-center py-8">
                  <BookText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Words You're Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    These are words you're currently practicing and haven't mastered yet.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="mastered" className="space-y-4">
                <div className="text-center py-8">
                  <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Mastered Words</h3>
                  <p className="text-sm text-muted-foreground">
                    Congratulations! These are words you've successfully mastered.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="review" className="space-y-4">
                <div className="text-center py-8">
                  <RotateCcw className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Words Due for Review</h3>
                  <p className="text-sm text-muted-foreground">
                    These words need practice to maintain your mastery level.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-4 bg-gray-50 safe-area-inset-bottom">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500">© 2025 ArabicAI. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/help" className="text-xs sm:text-sm font-medium hover:text-primary">
              Help
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm font-medium hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs sm:text-sm font-medium hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
