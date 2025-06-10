"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
  enrolledCourses: number[]
  progress: any
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  resetPassword: (email: string) => Promise<boolean>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("arabicai_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, validate with backend
    if (email === "student@arabicai.com" && password === "password123") {
      const userData = {
        id: "1",
        email,
        name: "Ahmed Student",
        avatar: "/placeholder.svg?height=100&width=100",
        enrolledCourses: [1],
        progress: {
          currentCourse: 1,
          currentUnit: 1,
          currentModule: 1,
          totalHoursCompleted: 12,
          streak: 7,
          level: 3,
          xp: 1250,
        },
      }

      setUser(userData)
      localStorage.setItem("arabicai_user", JSON.stringify(userData))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("arabicai_user")
  }

  const resetPassword = async (email: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true // Always succeed for demo
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, resetPassword, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
} 

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
