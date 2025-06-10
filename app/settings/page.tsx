import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {DashboardHeader} from "@/components/dashboard-header"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-4 sm:py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Customize your learning experience and app preferences
              </p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Preferences</CardTitle>
                  <CardDescription>Adjust how you learn Arabic with ArabicAI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Arabic Dialect</Label>
                      <p className="text-sm text-muted-foreground">Choose your preferred Arabic dialect</p>
                    </div>
                    <Select defaultValue="msa">
                      <SelectTrigger className="w-[200px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="msa">Modern Standard Arabic</SelectItem>
                        <SelectItem value="egy">Egyptian Arabic</SelectItem>
                        <SelectItem value="lev">Levantine Arabic</SelectItem>
                        <SelectItem value="gulf">Gulf Arabic</SelectItem>
                        <SelectItem value="mag">Maghrebi Arabic</SelectItem>
                        <SelectItem value="irq">Iraqi Arabic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Learning Level</Label>
                      <p className="text-sm text-muted-foreground">Your current Arabic proficiency level</p>
                    </div>
                    <Select defaultValue="beginner">
                      <SelectTrigger className="w-[200px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Daily Goal</Label>
                        <p className="text-sm text-muted-foreground">Minutes of practice per day</p>
                      </div>
                      <span className="text-sm font-medium">15 minutes</span>
                    </div>
                    <Slider defaultValue={[15]} max={60} min={5} step={5} className="w-full" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Auto-play audio</Label>
                      <p className="text-sm text-muted-foreground">Automatically play pronunciation audio</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Show translations</Label>
                      <p className="text-sm text-muted-foreground">Display English translations by default</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Daily reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminded to practice Arabic</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Streak notifications</Label>
                      <p className="text-sm text-muted-foreground">Celebrate your learning streaks</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">New content alerts</Label>
                      <p className="text-sm text-muted-foreground">Be notified when new lessons are available</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Weekly progress reports</Label>
                      <p className="text-sm text-muted-foreground">Receive weekly learning summaries</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility</CardTitle>
                  <CardDescription>Customize the app for your accessibility needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Font Size</Label>
                      <p className="text-sm text-muted-foreground">Adjust text size for better readability</p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                        <SelectItem value="extra-large">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">High contrast mode</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Reduce motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Screen reader support</Label>
                      <p className="text-sm text-muted-foreground">Enhanced support for screen readers</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Data</CardTitle>
                  <CardDescription>Control how your data is used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Analytics</Label>
                      <p className="text-sm text-muted-foreground">Help improve ArabicAI with usage data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Personalized recommendations</Label>
                      <p className="text-sm text-muted-foreground">Use learning data for better recommendations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base">Data Export</Label>
                    <p className="text-sm text-muted-foreground">Download your learning data and progress</p>
                    <Button variant="outline" size="sm">
                      Export Data
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base">Delete Account</Label>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
