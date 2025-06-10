"use client"

import { useState } from "react"
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
import { Bell, CheckCheck, Trash2 } from "lucide-react"
import { useNotifications } from "@/lib/notifications"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

export function NotificationsDropdown() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotifications } = useNotifications()
  const [open, setOpen] = useState(false)

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return "⏰"
      case "achievement":
        return "🏆"
      case "course":
        return "📚"
      case "streak":
        return "🔥"
      default:
        return "📢"
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <div className="flex gap-1">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                <CheckCheck className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={clearNotifications}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No notifications yet</p>
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            {notifications.slice(0, 10).map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`p-3 cursor-pointer ${!notification.read ? "bg-blue-50" : ""}`}
                onClick={() => {
                  markAsRead(notification.id)
                  if (notification.actionUrl) {
                    setOpen(false)
                  }
                }}
              >
                {notification.actionUrl ? (
                  <Link href={notification.actionUrl} className="w-full">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                        </p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />}
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-start gap-3 w-full">
                    <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                    {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1" />}
                  </div>
                )}
              </DropdownMenuItem>
            ))}
          </div>
        )}

        {notifications.length > 10 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-muted-foreground">
              <Link href="/notifications" className="w-full">
                View all notifications
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
