import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  title: string
  message: string
  type: "progress" | "reminder" | "achievement"
  read: boolean
  timestamp: string
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Course Progress",
    message: "You're 25% through Year 1: Conversational Arabic! Keep up the great work!",
    type: "progress",
    read: false,
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    title: "Study Reminder",
    message: "Don't forget to complete your daily Arabic practice!",
    type: "reminder",
    read: false,
    timestamp: "5 hours ago"
  },
  {
    id: "3",
    title: "Achievement Unlocked",
    message: "Congratulations! You've completed the Basic Greetings module!",
    type: "achievement",
    read: true,
    timestamp: "1 day ago"
  }
]

export function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem
            key={notification.id}
            className={`p-4 ${!notification.read ? "bg-muted/50" : ""}`}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">{notification.title}</span>
                <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 