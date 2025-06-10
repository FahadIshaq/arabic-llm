"use client"

import { SetStateAction, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageSquare, Mic, Send, Lightbulb, Languages, Info } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

type Message = {
  role: string
  content: string
  translation: string
  feedback?: string | null
}

export default function PracticePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "مرحباً! أنا مساعدك لتعلم اللغة العربية. كيف يمكنني مساعدتك اليوم؟",
      translation: "Hello! I'm your Arabic language learning assistant. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [showTranslation, setShowTranslation] = useState(true)
  const [scenario, setScenario] = useState("free")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages([
      ...messages,
      {
        role: "user",
        content: inputValue,
        translation: "", // In a real app, this would be translated
        
      },
    ])

    // Simulate AI response
    setTimeout(() => {
      let aiResponse
      let translation

      if (scenario === "cafe") {
        aiResponse = "بالتأكيد، ماذا تحب أن تطلب من القائمة؟ لدينا قهوة، شاي، وعصير."
        translation = "Of course, what would you like to order from the menu? We have coffee, tea, and juice."
      } else if (scenario === "market") {
        aiResponse = "أهلاً بك في السوق! هل تبحث عن شيء معين؟ لدينا خضروات وفواكه طازجة."
        translation =
          "Welcome to the market! Are you looking for something specific? We have fresh vegetables and fruits."
      } else {
        aiResponse = "هذا رائع! هل تريد أن نتحدث عن موضوع معين؟"
        translation = "That's great! Would you like to talk about a specific topic?"
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: aiResponse,
          translation: translation,
          feedback: inputValue.includes("انا") ? "Grammar note: Consider using 'أنا' instead of 'انا' for 'I'" : null,
        },
      ])
      setInputValue("")
    }, 1000)
  }

  const handleKeyDown = (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const changeScenario = (value: SetStateAction<string>) => {
    setScenario(value)

    // Reset conversation with appropriate greeting based on scenario
    let initialMessage
    let translation

    if (value === "cafe") {
      initialMessage = "مرحباً بك في المقهى! أنا النادل. كيف يمكنني مساعدتك؟"
      translation = "Welcome to the cafe! I'm the waiter. How can I help you?"
    } else if (value === "market") {
      initialMessage = "أهلاً بك في السوق! أنا البائع. هل تبحث عن شيء معين؟"
      translation = "Welcome to the market! I'm the seller. Are you looking for something specific?"
    } else {
      initialMessage = "مرحباً! أنا مساعدك لتعلم اللغة العربية. كيف يمكنني مساعدتك اليوم؟"
      translation = "Hello! I'm your Arabic language learning assistant. How can I help you today?"
    }

    setMessages([
      {
        role: "ai",
        content: initialMessage,
        translation: translation,
      },
    ])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-4 sm:py-6">
        <div className="container grid gap-4 sm:gap-6 lg:grid-cols-4">
          <Card className="lg:col-span-1 order-2 lg:order-1">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Conversation Scenarios</CardTitle>
              <CardDescription>Choose a scenario to practice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
              <div
                className={`rounded-lg border p-3 cursor-pointer ${
                  scenario === "free" ? "bg-primary/10 border-primary/20" : ""
                }`}
                onClick={() => changeScenario("free")}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium">Free Conversation</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Practice any topic with the AI tutor</p>
              </div>
              <div
                className={`rounded-lg border p-3 cursor-pointer ${
                  scenario === "cafe" ? "bg-primary/10 border-primary/20" : ""
                }`}
                onClick={() => changeScenario("cafe")}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium">At the Café</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Order drinks and food at a café</p>
              </div>
              <div
                className={`rounded-lg border p-3 cursor-pointer ${
                  scenario === "market" ? "bg-primary/10 border-primary/20" : ""
                }`}
                onClick={() => changeScenario("market")}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium">At the Market</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Shop for items and practice bargaining</p>
              </div>
              <div className="rounded-lg border p-3 cursor-pointer">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium">Introducing Yourself</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Practice personal introductions</p>
              </div>
              <div className="rounded-lg border p-3 cursor-pointer">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium">Asking for Directions</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Learn to navigate in Arabic</p>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 flex flex-col order-1 lg:order-2">
            <CardHeader className="border-b p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-lg sm:text-xl">
                    {scenario === "free" ? "Free Conversation" : scenario === "cafe" ? "At the Café" : "At the Market"}
                  </CardTitle>
                  <CardDescription>
                    {scenario === "free"
                      ? "Practice any topic with the AI tutor"
                      : scenario === "cafe"
                        ? "Order drinks and food at a café"
                        : "Shop for items and practice bargaining"}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant={showTranslation ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={showTranslation ? "bg-primary hover:bg-primary/90" : ""}
                  >
                    <Languages className="mr-2 h-4 w-4" />
                    <span className="sm:hidden">Trans.</span>
                    <span className="hidden sm:inline">Translation</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Info className="mr-2 h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">Help</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto p-4 space-y-4 no-scrollbar">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start gap-2 sm:gap-3 max-w-[85%] sm:max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "ai" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      {message.role === "ai" ? (
                        <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      ) : (
                        <span className="text-xs sm:text-sm">👤</span>
                      )}
                    </div>
                    <div
                      className={`space-y-1 ${
                        message.role === "ai"
                          ? "bg-gray-100 rounded-lg p-2.5 sm:p-3 text-sm"
                          : "bg-primary/10 rounded-lg p-2.5 sm:p-3 text-sm"
                      }`}
                    >
                      <p className="font-arabic text-base sm:text-lg">{message.content}</p>
                      {showTranslation && message.translation && (
                        <p className="text-xs text-gray-500 mt-1">{message.translation}</p>
                      )}
                      {message?.feedback && (
                        <div className="mt-2 text-xs bg-yellow-50 p-2 rounded border border-yellow-200 text-yellow-700 flex items-start gap-1">
                          <Lightbulb className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          <span>{message?.feedback}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t p-3 sm:p-4">
              <div className="flex w-full items-center space-x-2">
                <Button variant="outline" size="icon" className="touch-target">
                  <Mic className="h-4 w-4" />
                  <span className="sr-only">Voice input</span>
                </Button>
                <Input
                  type="text"
                  placeholder="Type your message in Arabic..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-primary hover:bg-primary/90 touch-target"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
                <Button variant="outline" size="icon" className="touch-target">
                  <Lightbulb className="h-4 w-4" />
                  <span className="sr-only">Get hint</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="w-full border-t py-4 bg-gray-50 safe-area-inset-bottom">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
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
