"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, Menu, X, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/lessons", label: "Learning" },
    { href: "/for-business", label: "For Business" },
    { href: "/for-education", label: "For Education" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground touch-target">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-[350px] sm:max-w-[400px] p-0">
        <div className="flex flex-col h-full">
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ArabicAI</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="touch-target">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-4 no-scrollbar">
            <nav className="flex flex-col space-y-1 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-3 px-3 rounded-md text-base ${
                    pathname === item.href ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Link>
              ))}
              <div className="border-t my-4"></div>
              <Link
                href="/login"
                className="flex items-center py-3 px-3 rounded-md text-base hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                Log In
              </Link>
              <div className="pt-2">
                <Link href="/signup" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 h-11">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
          <div className="border-t p-4 text-center text-sm text-muted-foreground">
            <p>© 2025 ArabicAI. All rights reserved.</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
