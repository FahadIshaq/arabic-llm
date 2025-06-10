import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Bell, CreditCard, Shield, LogOut } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-4 sm:py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Account Settings</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64 flex-shrink-0">
                  <TabsList className="flex flex-row md:flex-col h-auto p-0 bg-transparent space-y-0 space-x-1 md:space-x-0 md:space-y-1 overflow-x-auto no-scrollbar">
                    <TabsTrigger
                      value="profile"
                      className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex-shrink-0"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger
                      value="notifications"
                      className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex-shrink-0"
                    >
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="subscription"
                      className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex-shrink-0"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Subscription
                    </TabsTrigger>
                    <TabsTrigger
                      value="security"
                      className="justify-start px-3 py-2 h-9 font-normal data-[state=active]:bg-primary/10 data-[state=active]:text-primary flex-shrink-0"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      Security
                    </TabsTrigger>
                  </TabsList>
                  <Button
                    variant="ghost"
                    className="justify-start px-3 py-2 h-9 font-normal text-red-500 hover:text-red-600 hover:bg-red-50 w-full hidden md:flex mt-1"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </div>
                <div className="flex-1 space-y-6">
                  <TabsContent value="profile" className="space-y-6 mt-0">
                    <Card>
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Manage your personal information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="flex flex-col md:flex-row gap-4 md:items-center">
                          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xl sm:text-2xl font-medium text-primary">JD</span>
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-medium">Profile Picture</h3>
                            <p className="text-sm text-muted-foreground">Upload a photo to personalize your account</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">
                                Upload
                              </Button>
                              <Button variant="ghost" size="sm">
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" defaultValue="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" defaultValue="Doe" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end p-4 sm:p-6">
                        <Button className="bg-primary hover:bg-primary/90">Save changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6 mt-0">
                    <Card>
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Manage how you receive notifications</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h3 className="font-medium">Email notifications</h3>
                            <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h3 className="font-medium">Learning reminders</h3>
                            <p className="text-sm text-muted-foreground">Get reminded to practice Arabic daily</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h3 className="font-medium">New content alerts</h3>
                            <p className="text-sm text-muted-foreground">Be notified when new lessons are available</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h3 className="font-medium">Marketing emails</h3>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about new features and promotions
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end p-4 sm:p-6">
                        <Button className="bg-primary hover:bg-primary/90">Save preferences</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="subscription" className="space-y-6 mt-0">
                    <Card>
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle>Subscription</CardTitle>
                        <CardDescription>Manage your subscription plan</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="rounded-lg border p-4 bg-primary/5 border-primary/20">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <h3 className="font-medium text-primary">Premium Monthly</h3>
                              <p className="text-sm text-primary/80">Your subscription renews on June 22, 2025</p>
                            </div>
                            <div className="text-left sm:text-right">
                              <p className="font-medium">$12.99/month</p>
                              <p className="text-xs text-muted-foreground">Next billing date: 06/22/2025</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Payment method</h3>
                          <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                              <div className="rounded-md bg-gray-100 p-2">
                                <CreditCard className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium">Visa ending in 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 12/25</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              Update
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-2 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                          <Button variant="outline" className="w-full sm:flex-1">
                            Cancel subscription
                          </Button>
                          <Button className="w-full sm:flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                            Upgrade to yearly
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          Canceling your subscription will allow you to use premium features until the end of your
                          current billing period.
                        </p>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6 mt-0">
                    <Card>
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle>Security</CardTitle>
                        <CardDescription>Manage your account security</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm new password</Label>
                          <Input id="confirm-password" type="password" />
                          <p className="text-xs text-muted-foreground">
                            Password must be at least 8 characters and include a number and a special character
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end p-4 sm:p-6">
                        <Button className="bg-primary hover:bg-primary/90">Update password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>

            <div className="md:hidden">
              <Button
                variant="ghost"
                className="justify-center w-full py-2 h-10 font-normal text-red-500 hover:text-red-600 hover:bg-red-50 border border-gray-200 rounded-md"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Button>
            </div>
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
