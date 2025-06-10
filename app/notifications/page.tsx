"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CheckCheck, Trash2, Settings } from "lucide-react"
import { useNotifications } from "@/lib/notifications"
import { formatDistanceToNow } from "date-fns"
import { DashboardHeader } from "@/components/dashboard-header"
import { ProtectedRoute } from "@/components/protected-route"

export default function NotificationsPage() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotifications } = useNotifications()

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

  const unreadNotifications = notifications.filter((n) => !n.read)
  const readNotifications = notifications.filter((n) => n.read)

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 py-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Notifications
                  </h1>
                  <p className="text-muted-foreground">Stay updated with your learning progress</p>
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <Button variant="outline" onClick={markAllAsRead}>
                      <CheckCheck className="mr-2 h-4 w-4" />
                      Mark all read
                    </Button>
                  )}
                  <Button variant="outline" onClick={clearNotifications}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear all
                  </Button>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Total</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mt-2">{notifications.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full" />
                      <span className="text-sm font-medium">Unread</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mt-2">{unreadCount}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <CheckCheck className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Read</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mt-2">{readNotifications.length}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Notifications */}
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
                  <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
                  <TabsTrigger value="read">Read ({readNotifications.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {notifications.length === 0 ? (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No notifications yet</h3>
                        <p className="text-muted-foreground">
                          We'll notify you about your learning progress and achievements
                        </p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <Card
                          key={notification.id}
                          className={`cursor-pointer transition-colors ${
                            !notification.read ? "bg-blue-50 border-blue-200" : ""
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className="font-medium">{notification.title}</h4>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="outline" className="text-xs">
                                      {notification.type}
                                    </Badge>
                                    {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                  </div>
                                </div>
                                <p className="text-muted-foreground mt-1">{notification.message}</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="unread" className="space-y-4">
                  {unreadNotifications.length === 0 ? (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <CheckCheck className="h-16 w-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">All caught up!</h3>
                        <p className="text-muted-foreground">You have no unread notifications</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                      {unreadNotifications.map((notification) => (
                        <Card
                          key={notification.id}
                          className="cursor-pointer bg-blue-50 border-blue-200"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className="font-medium">{notification.title}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {notification.type}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground mt-1">{notification.message}</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="read" className="space-y-4">
                  {readNotifications.length === 0 ? (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No read notifications</h3>
                        <p className="text-muted-foreground">Read notifications will appear here</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                      {readNotifications.map((notification) => (
                        <Card key={notification.id}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl opacity-60">{getNotificationIcon(notification.type)}</div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className="font-medium opacity-75">{notification.title}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {notification.type}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground mt-1">{notification.message}</p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
