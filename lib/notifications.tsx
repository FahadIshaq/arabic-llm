"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Notification {
  id: string
  title: string
  message: string
  type: "reminder" | "achievement" | "course" | "streak"
  timestamp: Date
  read: boolean
  actionUrl?: string
}

interface NotificationContextType {
  notifications: Notification[]
  unreadCount: number
  addNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  clearNotifications: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Load notifications from localStorage
    const saved = localStorage.getItem("arabicai_notifications")
    if (saved) {
      const parsed = JSON.parse(saved).map((n: any) => ({
        ...n,
        timestamp: new Date(n.timestamp),
      }))
      setNotifications(parsed)
    }

    // Set up daily reminder notifications
    const checkDailyReminder = () => {
      const lastStudy = localStorage.getItem("arabicai_last_study")
      const now = new Date()
      const lastStudyDate = lastStudy ? new Date(lastStudy) : null

      if (!lastStudyDate || now.getTime() - lastStudyDate.getTime() > 24 * 60 * 60 * 1000) {
        addNotification({
          title: "Time to practice Arabic! 📚",
          message: "Keep your streak alive! Complete today's lesson to maintain your progress.",
          type: "reminder",
          actionUrl: "/dashboard",
        })
      }
    }

    // Check every hour
    const interval = setInterval(checkDailyReminder, 60 * 60 * 1000)
    checkDailyReminder() // Check immediately

    return () => clearInterval(interval)
  }, [])

  const addNotification = (notificationData: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    }

    setNotifications((prev) => {
      const updated = [newNotification, ...prev].slice(0, 50) // Keep only last 50
      localStorage.setItem("arabicai_notifications", JSON.stringify(updated))
      return updated
    })

    // Show browser notification if permission granted
    if (Notification.permission === "granted") {
      new Notification(notificationData.title, {
        body: notificationData.message,
        icon: "/favicon.ico",
      })
    }
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      localStorage.setItem("arabicai_notifications", JSON.stringify(updated))
      return updated
    })
  }

  const markAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }))
      localStorage.setItem("arabicai_notifications", JSON.stringify(updated))
      return updated
    })
  }

  const clearNotifications = () => {
    setNotifications([])
    localStorage.removeItem("arabicai_notifications")
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}
