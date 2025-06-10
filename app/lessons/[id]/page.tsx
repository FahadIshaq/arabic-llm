import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, BookOpen, VolumeIcon as VolumeUp, Mic, Check } from "lucide-react"

export default function LessonPage({ params }) {
  // This would be fetched from the database based on the lesson ID
  const lessonId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Dashboard</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Lesson 5: At the Market</span>
              <span className="text-xs text-muted-foreground">3 of 5</span>
            </div>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">Profile</span>
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-teal-700">JD</span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <Progress value={60} className="h-2" />
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>60% complete</span>
              <span>3 of 5 screens</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dialogue: At the Market</CardTitle>
                <CardDescription>Listen to the conversation and follow along</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4 bg-gray-50">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Dialogue</span>
                    <Button variant="ghost" size="sm">
                      <VolumeUp className="h-4 w-4 mr-1" />
                      Play Audio
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-teal-700">البائع (Seller):</p>
                      <p className="font-arabic">أهلاً وسهلاً! كيف يمكنني مساعدتك؟</p>
                      <p className="text-xs text-gray-500">Welcome! How can I help you?</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-700">المشتري (Customer):</p>
                      <p className="font-arabic">مرحباً! أريد بعض الخضار، من فضلك.</p>
                      <p className="text-xs text-gray-500">Hello! I want some vegetables, please.</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-700">البائع (Seller):</p>
                      <p className="font-arabic">بالتأكيد. لدينا طماطم وخيار وبصل طازج. ماذا تريد؟</p>
                      <p className="text-xs text-gray-500">
                        Of course. We have fresh tomatoes, cucumbers, and onions. What would you like?
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-700">المشتري (Customer):</p>
                      <p className="font-arabic">أريد كيلو من الطماطم وكيلو من الخيار. كم السعر؟</p>
                      <p className="text-xs text-gray-500">
                        I want a kilo of tomatoes and a kilo of cucumbers. How much is it?
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-teal-700">البائع (Seller):</p>
                      <p className="font-arabic">
                        الطماطم بعشرة دراهم والخيار بثمانية دراهم. المجموع ثمانية عشر درهماً.
                      </p>
                      <p className="text-xs text-gray-500">
                        Tomatoes are ten dirhams and cucumbers are eight dirhams. The total is eighteen dirhams.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium mb-2">Key Vocabulary</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-between rounded border p-2">
                      <div>
                        <p className="font-arabic">خضار</p>
                        <p className="text-xs text-gray-500">vegetables</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <VolumeUp className="h-4 w-4" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded border p-2">
                      <div>
                        <p className="font-arabic">طماطم</p>
                        <p className="text-xs text-gray-500">tomatoes</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <VolumeUp className="h-4 w-4" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded border p-2">
                      <div>
                        <p className="font-arabic">خيار</p>
                        <p className="text-xs text-gray-500">cucumber</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <VolumeUp className="h-4 w-4" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded border p-2">
                      <div>
                        <p className="font-arabic">كيلو</p>
                        <p className="text-xs text-gray-500">kilogram</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <VolumeUp className="h-4 w-4" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comprehension Check</CardTitle>
                <CardDescription>Answer the questions about the dialogue</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Question 1: What did the customer want to buy?</h3>
                  <RadioGroup defaultValue="vegetables">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="vegetables" id="vegetables" />
                      <Label htmlFor="vegetables">Vegetables</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="fruits" id="fruits" />
                      <Label htmlFor="fruits">Fruits</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="meat" id="meat" />
                      <Label htmlFor="meat">Meat</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-2 text-sm text-teal-600 flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    <span>Correct! The customer asked for vegetables.</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Question 2: How much did the tomatoes cost?</h3>
                  <RadioGroup defaultValue="ten">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="five" id="five" />
                      <Label htmlFor="five">5 dirhams</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="eight" id="eight" />
                      <Label htmlFor="eight">8 dirhams</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="ten" id="ten" />
                      <Label htmlFor="ten">10 dirhams</Label>
                    </div>
                  </RadioGroup>
                  <div className="mt-2 text-sm text-teal-600 flex items-center gap-1">
                    <Check className="h-4 w-4" />
                    <span>Correct! The tomatoes cost 10 dirhams.</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Question 3: What was the total cost?</h3>
                  <RadioGroup>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="fifteen" id="fifteen" />
                      <Label htmlFor="fifteen">15 dirhams</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="eighteen" id="eighteen" />
                      <Label htmlFor="eighteen">18 dirhams</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="twenty" id="twenty" />
                      <Label htmlFor="twenty">20 dirhams</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Pronunciation Practice</h3>
                  <p className="text-sm mb-2">Repeat the following phrase:</p>
                  <div className="rounded-lg border p-3 mb-3">
                    <p className="font-arabic text-center">أريد كيلو من الطماطم وكيلو من الخيار</p>
                    <p className="text-xs text-gray-500 text-center">
                      I want a kilo of tomatoes and a kilo of cucumbers
                    </p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <VolumeUp className="h-4 w-4 mr-1" />
                      Listen
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                      <Mic className="h-4 w-4 mr-1" />
                      Record
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
